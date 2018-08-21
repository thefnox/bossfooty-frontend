/**
 *
 * WorkoutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { makeSelectUserData, makeSelectIsSubbed } from 'containers/App/selectors';
import { loadUserStatus } from 'containers/App/actions';
import { API_HOSTNAME } from 'utils/constants';
import request from 'utils/request';
import TestDayForm from 'components/TestDayForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Helmet } from 'react-helmet';
import { makeSelectWorkoutPage, makeSelectTestResultData, makeSelectTestResultError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles.css';

/* eslint-disable react/prefer-stateless-function */
export class WorkoutPage extends React.PureComponent {

  submit = async (bodyMap) => {
    const body = bodyMap.toObject()
    const requestURL = `${API_HOSTNAME}testresult`;

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

  render() {
    const { subbed, testResult, userData } = this.props;
    return (
      <div>
        <Helmet>
          <title>Workout Page</title>
          <meta
            name="description"
            content="Your current workout"
          />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div className="testResultPage">
        {
          userData.currentDay === -1 && !isEmpty(testResult) ? (
            <TestDayForm onSubmit={this.submit} testResult={ testResult } />
          ) 
          : (
            <div>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  workoutpage: makeSelectWorkoutPage(),
  subbed: makeSelectIsSubbed(),
  userData: makeSelectUserData(),
  testResult: makeSelectTestResultData(),
  error: makeSelectTestResultError()
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

const withReducer = injectReducer({ key: 'workout', reducer });
const withSaga = injectSaga({ key: 'workout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WorkoutPage);
