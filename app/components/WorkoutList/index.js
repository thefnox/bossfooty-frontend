/**
 *
 * WorkoutList
 *
 */

import React from 'react';
import isEmpty from 'lodash/isEmpty';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import WorkoutItem from 'components/WorkoutItem';
import messages from './messages';
import { Typography } from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */
function WorkoutList(props) {
  const { exercises, repMaxes, classes } = props;
  return !isEmpty(exercises) ? (
    <div className={classes.workoutList}>
      <Typography variant="subheading"><FormattedMessage {...messages.header} /></Typography>
      <div>
        { 
          exercises.map((exercise, index) => (
            <WorkoutItem key={index} index={index + 1} classes={classes} exercise={exercise} repMaxes={repMaxes} />
          ))
        }
      </div>
    </div>
  ) : null;
}

WorkoutList.propTypes = {};

export default WorkoutList;
