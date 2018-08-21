/**
 *
 * TestDayForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {
  Checkbox,
  TextField
} from 'redux-form-material-ui'
import { isEmpty } from 'lodash';
import { Button, FormControl } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};

  return errors;
}

/* eslint-disable react/prefer-stateless-function */
const TestDayForm = props => {
  const { error, testResult, handleSubmit, pristine, submitting } = props
  return !isEmpty(testResult) ? (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      {
        testResult.map(({ id, name }, index) => (
          <FormControl key={`exercise-${index}`} fullWidth>
            <Field
              name={`${id}`}
              type="number"
              label={ name }
              component={TextField}
            />   
          </FormControl>
        ))
      }
      <div>
        <Button type="submit" disabled={submitting}>
          Send results
        </Button>
      </div>
    </form>
  )
  : null;
}

export default reduxForm({
  validate,
  form: 'testingday'
})(TestDayForm)
