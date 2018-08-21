/**
 *
 * LoginForm
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
  
  if (!values.get('username')) {
    errors.username = 'Username is required'
  }

  if (!values.get('password')) {
    errors.password = 'Password is required'
  }

  return errors;
}

/* eslint-disable react/prefer-stateless-function */
const LoginForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      <Field
        name="identifier"
        type="text"
        label="Username"
        component={TextField}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />
      <span>
        <Field name="rememberMe" type="checkbox" component={Checkbox} label="Remember me" />
        Remember me?
      </span>
      <div>
        <Button type="submit" disabled={submitting}>
          Log In
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'login'
})(LoginForm)
