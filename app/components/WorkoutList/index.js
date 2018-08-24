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
import moment from 'moment'
import { Typography, TextField } from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */

function onChange(value) {
  console.log(value)
}

function WorkoutList(props) {
  const { exercises, repMaxes, classes, day, startDate, onChange } = props;
  const date = moment(startDate).add(day - 1, 'days');
  return (
    <div className={classes.workoutList}>
      <TextField
        id="date"
        label="Date"
        type="date"
        value={date.format('YYYY-MM-DD')}
        className={classes.textField}
        onInput={onChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <div>
        { 
          !isEmpty(exercises) && exercises.length > 0 && exercises.map((exercise, index) => (
            <WorkoutItem key={index} index={index + 1} classes={classes} exercise={exercise} repMaxes={repMaxes} />
          ))
        }
      </div>
    </div>
  );
}

WorkoutList.propTypes = {};

export default WorkoutList;
