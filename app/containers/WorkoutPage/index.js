/**
 *
 * WorkoutPage
 *
 */

import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import WorkoutList from 'components/WorkoutList';
import { compose, bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {
  CssBaseline,
  Typography,
  Grid,
  Paper
} from '@material-ui/core'
import { makeSelectUserData, makeSelectIsSubbed } from 'containers/App/selectors';
import { loadUserStatus } from 'containers/App/actions';
import { API_HOSTNAME } from 'utils/constants';
import request from 'utils/request';
import TestDayForm from 'components/TestDayForm';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Helmet } from 'react-helmet';
import { 
  makeSelectWorkoutPage,
  makeSelectTestResultData,
  makeSelectTestResultError,
  makeSelectDay,
  makeSelectRepMaxesData,
  makeSelectWorkoutData,
  makeSelectWorkoutError,
  makeSelectSuccessFetch
} from './selectors';
import {
  loadWorkoutData,
  loadTestResultData
} from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './styles.css';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  workoutList: {
    width: '100%',
  },
  mainHomeHero: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainHomeHeroContent: {
    width: '100%',
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  exerciseHeading: {
    textAlign: 'left',
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  exerciseSecondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    paddingBottom: 25,
  },
  exerciseTable: {
    width: '100%'
  },
});

/* eslint-disable react/prefer-stateless-function */
export class WorkoutPage extends React.PureComponent {

  calcDay = (matchDay, currentDay) => {
    if (matchDay !== undefined && matchDay !== null) {
      return parseInt(matchDay);
    }
    else if (currentDay !== undefined && currentDay !== null) {
      return parseInt(currentDay)
    }
    return -1;
  }

  async componentDidMount() {
    const { userData, match: { params: { day: matchDay } }, fetchWorkout, fetchTestResult, fetched } = this.props;
    const { currentDay } = userData;
    const day = this.calcDay(matchDay, currentDay);
    if (!fetched) {
      if (day >= 0) {
        fetchWorkout(day);
      }
      else if (currentDay === -1) {
        fetchTestResult();
      }
    }
  }

  async componentDidUpdate(prevProps) {
    const { userData, match: { params: { day: matchDay } }, fetchWorkout, fetchTestResult, fetched } = this.props;
    const { currentDay } = userData;
    if (currentDay === -1 && prevProps.match.params.day !== matchDay) {
      fetchWorkout(day);
    }
  }

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
  };

  renderWorkoutHeader(){
    const { userData: { currentDay, restDay1, restDay2 }, day } = this.props;
    const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date().getDay()];
    if (currentDay === 0){
      return (
        <FormattedMessage {...messages.dayZeroHeader} />
      );
    }
    else if (day > currentDay) {
      return (
        <FormattedMessage {...messages.skipAhead} />
      );
    }
    else if (day <= 0) {
      return (
        <FormattedMessage {...messages.backInTime} />
      );
    }
    else if(day === currentDay && (restDay1 === weekday || restDay2 === weekday)) {
      return (
        <FormattedMessage {...messages.restDayHeader} />
      );
    } else {
      return (
        <div>
          <FormattedMessage {...messages.todayWorkoutHeader} values={{
            day
          }} />
        </div>)
    }
  }

  render() {
    const { classes, testResult, userData, exercises, repMaxes, day, fetchWorkout } = this.props;
    const { currentDay, startDate } = userData;
    return (
      <div>
        <Helmet>
          <title>Workout Page</title>
          <meta
            name="description"
            content="Your current workout"
          />
        </Helmet>
        <div className="testResultPage">
        {
          currentDay === -1 ? (
            <div>
              <Typography><FormattedMessage {...messages.testDayHeader} /></Typography>
              { !isEmpty(testResult) && <TestDayForm onSubmit={this.submit} testResult={ testResult } /> }
            </div>
          ) 
          : (
            <Grid container spacing={40} className={classes.cardGrid}>
              <div className={classes.mainHomeHeroContent}>
                <Grid item  xs={12} sm={12} md={12}>
                  <Typography variant="display3">{ this.renderWorkoutHeader() }</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <WorkoutList 
                    classes={classes}
                    exercises={ exercises }
                    repMaxes={ repMaxes }
                    day={day}
                    onChange={(event) => {
                      const beginDate = moment(startDate);
                      const newDate = moment(event.target.value);
                      const diff = Math.ceil(newDate.diff(beginDate, 'days', true)) + 1;
                      fetchWorkout(diff)
                    }}
                    startDate={startDate} />
                </Grid>
              </div>
            </Grid>
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
  error: makeSelectTestResultError(),
  workoutError: makeSelectWorkoutError(),
  exercises: makeSelectWorkoutData(),
  repMaxes: makeSelectRepMaxesData(),
  day : makeSelectDay(),
  fetched: makeSelectSuccessFetch()
});


export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onLoadUser:  evt => dispatch(loadUserStatus()),
    fetchWorkout: day => dispatch(loadWorkoutData(day)),
    fetchTestResult: evt => dispatch(loadTestResultData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'workout', reducer });
const withSaga = injectSaga({ key: 'workout', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(WorkoutPage);
