/*
 * PaymentPage
 *
 * Allows you to pay for the subscription
 */
import React from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { loadPaymentInfo, loadUserStatus } from 'containers/App/actions';
import { makeSelectUserData, makeSelectIsSubbed } from 'containers/App/selectors';
import { makeSelectKey, makeSelectError, makeSelectStripe } from './selectors';
import { StripeProvider } from 'react-stripe-elements';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import SubscribeCheckout from 'components/SubscribeCheckout'
import { FormattedMessage } from 'react-intl';
import { API_HOSTNAME } from 'utils/constants'
import LoadingIndicator from 'components/LoadingIndicator';
import reducer from './reducer';
import request from 'utils/request';
import saga from './saga';
import H1 from 'components/H1';
import messages from './messages';
class PaymentPage extends React.PureComponent {

  state = fromJS({
    stripe: null,
    loading: false
  });

  componentDidMount() {
    if (!this.props.apiKey) {
      this.props.onLoadPayment();
    }
  }

  onSubmit = async (stripeToken) => {
    const requestURL = `${API_HOSTNAME}payment`;
    this.setState({loading: true});
    if (stripeToken) {
      try {
        const response = await request(requestURL, { method: 'POST', body: { stripeToken }})
        this.props.onLoadUser();
        this.redirectUser();
      }
      catch(err) {
        console.error(err)
      }
    }
  }

  redirectUser = () => {
    this.props.history.push('/quiz');
  };

  render() {
    const { loading } = this.state;
    const { apiKey, error, stripeInstance, userData, subbed } = this.props;
    return (
      <div>
        <Helmet>
          <title>Payment Page</title>
          <meta
            name="description"
            content="Buy a new subscription"
          />
        </Helmet>
        <div>
        {
          error && (
            <strong>
              { error }
            </strong>
          )
        }
        { 
          !subbed && stripeInstance && !loading && (
            <div>
              <StripeProvider stripe={stripeInstance}>
                <SubscribeCheckout onSubmit={this.onSubmit} userData={userData}/>
              </StripeProvider>
            </div>
          )
        }
        {
          loading && (
            <LoadingIndicator />
          )
        }
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus()),
    onLoadPayment: evt => dispatch(loadPaymentInfo())
  };
}

PaymentPage.propTypes = {
  error: PropTypes.string,
  apiKey: PropTypes.string,
  userData: PropTypes.object,
  stripeInstance: PropTypes.object,
  onLoadPayment: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  apiKey: makeSelectKey(),
  error: makeSelectError(),
  stripeInstance: makeSelectStripe(),
  userData: makeSelectUserData()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'payment', reducer });
const withSaga = injectSaga({ key: 'payment', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(PaymentPage)