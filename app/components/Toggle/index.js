/**
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { 
  NativeSelect,
  FormControl,
  InputLabel
} from '@material-ui/core';
import ToggleOption from '../ToggleOption';

function Toggle(props) {
  let content = <option>--</option>;

  // If we have items, render them
  if (props.values) {
    content = props.values.map(value => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <FormControl >
      { props.label && <InputLabel htmlFor={props.name}>{ props.label }</InputLabel> }
      <NativeSelect 
        value={props.value}
        onChange={props.onToggle}
        inputProps={{
          name: props.name,
          id: props.id,
        }}>
        {content}
      </NativeSelect>
    </FormControl>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.string,
  messages: PropTypes.object,
};

export default Toggle;
