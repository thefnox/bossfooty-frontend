/**
 *
 * QuizForm
 *
 */

import React from 'react';
import { isEmpty } from 'lodash';
import { Field, reduxForm } from 'redux-form/immutable'
import {
  TextField,
  Select,
} from 'redux-form-material-ui'
import { MenuItem, Button, FormControl, InputLabel } from '@material-ui/core';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};

  if (!values.get('position')) {
    errors.position = 'Position is required'
  }

  if (!values.get('age')) {
    errors.age = 'Age is required'
  }

  if (!values.get('experience')) {
    errors.experience = 'Experience is required'
  }

  if (!values.get('endurance')) {
    errors.endurance = 'Endurance is required'
  }

  if (values.get('age') < 10 || values.get('age') > 100) {
    errors.age = `Age must be between ${10} and ${100}`;
  }
  return errors;
}

const QuizForm = props => {
  const { error, quizData, onSubmit, handleSubmit, pristine, submitting } = props
  return !isEmpty(quizData.question1) && (
    <form onSubmit={ handleSubmit(onSubmit) }>
      { error && <strong>{error.message}</strong> }
      <h3><FormattedMessage {...messages.header} /></h3>
      <FormControl fullWidth>
        <InputLabel >What position do you play?</InputLabel>
        <Field  type="select" name="position" component={Select} placeholder="Select your position">
          {
            quizData.question1.answers.map((answer, index) => (
              <MenuItem key={`answer-${index}`} value={answer}>{answer}</MenuItem>
            ))
          }
        </Field>  
      </FormControl>
      <FormControl fullWidth>
        <Field
          name="age"
          type="number"
          label="How old are you?"
          component={TextField}
        />   
      </FormControl>
      <FormControl fullWidth>
        <InputLabel >How much experience do you have lifting in a gym or weight room?</InputLabel>
        <Field type="select" name="experience" component={Select} placeholder="Pick your experience level">
          {
            quizData.question3.answers.map((answer, index) => (
              <MenuItem key={`answer-${index}`} value={answer}>{answer}</MenuItem>
            ))
          }
        </Field>   
      </FormControl>
      <FormControl fullWidth>
        <InputLabel >If you were to play a 90 minute game tonight, how long would you last?</InputLabel>
        <Field  type="select" name="endurance" component={Select} placeholder="Pick your endurance level">
          {
            quizData.question4.answers.map((answer, index) => (
              <MenuItem key={`answer-${index}`} value={answer}>{answer}</MenuItem>
            ))
          }
        </Field>
      </FormControl>
      <div>
       <FormControl fullWidth>
        <Button type="submit" disabled={submitting}>
          Send answers
        </Button>
        </FormControl>
      </div>
    </form>
  );
}

export default reduxForm({
  validate,
  form: 'quiz'
})(QuizForm)

