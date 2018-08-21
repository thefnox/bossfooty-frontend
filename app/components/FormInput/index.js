/**
 *
 * FormInput
 *
 */

import React from 'react';
import { Field } from 'redux-form/immutable'
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const renderField = ({ input, name, label, type, meta: { touched, error } }) => (
  <FormControl>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Input {...input} type={type} id={name} />
    {error && <FormHelperText id={`${name}-error`}>{error}</FormHelperText>}
  </FormControl>
)

class FormInput extends React.Component {
  render() {
    const { name, type, label, placeholder } = this.props;
    return (
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        component={renderField}
        label={label}
      />
    );
  }
}

FormInput.propTypes = {};

export default FormInput;
