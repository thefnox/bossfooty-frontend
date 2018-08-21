/**
 *
 * QuizPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { API_HOSTNAME } from 'utils/constants';
import { loadUserStatus } from 'containers/App/actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
  makeSelectIsSubbed,
  makeSelectIsSetup
} from 'containers/App/selectors';
import auth from 'utils/auth';
import request from 'utils/request';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import QuizForm from 'components/QuizForm';
import { makeSelectQuizData } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
class QuizPage extends React.PureComponent {
  
  submit = async (bodyMap) => {
    const body = bodyMap.toObject()
    const requestURL = `${API_HOSTNAME}quiz`;

    const response = await request(requestURL, { method: 'POST', body })
    if (!response) {
      console.log(response);
      throw new SubmissionError({
        _error: 'An error has occurred'
      })
    }
    this.props.onLoadUser();
    this.redirectUser();
  };

  redirectUser = () => {
    this.props.history.push('/workout');
  };

  render() {
    const { quizData, configured } = this.props;
    return ( 
      <div>
        <Helmet>
          <title>Quiz Page</title>
          <meta
            name="description"
            content="Set up the application"
          />
        </Helmet>
       {
         quizData && (
          <div className="quizContainer">
          {
            configured ? (
              <strong><FormattedMessage {...messages.header} /></strong>
            ) : (
              <div>
                <QuizForm onSubmit={this.submit} quizData={ quizData } />
              </div>
            )
          }
          </div>
        )
       }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  quizData: makeSelectQuizData(),
  authed: makeSelectIsAuthed(),
  subbed: makeSelectIsSubbed(),
  configured: makeSelectIsSetup(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'quiz', reducer });
const withSaga = injectSaga({ key: 'quiz', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(QuizPage);
