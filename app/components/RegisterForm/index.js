/**
 *
 * RegisterForm
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

  if (!values.get('firstName')) {
    errors.firstName = 'First name is required'
  }

  if (!values.get('lastName')) {
    errors.lastName = 'Last name is required'
  }

  if (!values.get('password')) {
    errors.password = 'Password is required'
  }

  if (!values.get('email')) {
    errors.email = 'Email is required'
  }

  if (values.get('password') !== values.get('confirmPassword')) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors;
}


/* eslint-disable react/prefer-stateless-function */
const RegisterForm = props => {
  const { error, handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={ handleSubmit }>
      { error && <strong>{error.message}</strong> }
      <Field
        name="username"
        type="text"
        label="Username"
        component={TextField}
      />
      <Field
        name="firstName"
        type="text"
        label="First name"
        component={TextField}
      />
      <Field
        name="lastName"
        type="text"
        label="Last name"
        component={TextField}
      />
      <Field
        name="password"
        type="password"
        label="Password"
        component={TextField}
      />
      <Field
        name="confirmPassword"
        type="password"
        label="Confirm Password"
        component={TextField}
      />
      <Field
        name="email"
        type="email"
        label="Email"
        component={TextField}
      />      
      <div>
        <Button type="submit" disabled={submitting}>
          Register
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  validate,
  form: 'register'
})(RegisterForm)
