/**
 *
 * ResetPasswordForm
 *
 */

import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import {
  Checkbox,
  TextField
} from 'redux-form-material-ui'
import Button from '@material-ui/core/Button';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const validate = values => {
  const errors = {};
  const { password, passwordConfirmation } = values

  if (values.get('passwordConfirmation') && values.get('password') !== values.get('passwordConfirmation')) {
    errors.passwordConfirmation = 'Passwords do not match'
  }

  return errors;
}

/* eslint-disable react/prefer-stateless-function */
const ResetPasswordForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />    
      <Field
        name="passwordConfirmation"
        type="password"
        label="Confirm Password"
        component={TextField}
      />      
      <div>
        <Button type="submit" disabled={submitting}>
          Reset your password
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'reset-password'
})(ResetPasswordForm)
