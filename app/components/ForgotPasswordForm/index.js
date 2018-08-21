/**
 *
 * ForgotPasswordForm
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

/* eslint-disable react/prefer-stateless-function */
const ForgotPasswordForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      <Field
        name="email"
        type="email"
        label="Enter your email"
        component={TextField}
      />      
      <div>
        <Button type="submit" disabled={submitting}>
          Send request
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'forgot-password'
})(ForgotPasswordForm)
