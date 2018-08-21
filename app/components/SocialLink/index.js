/**
 *
 * SocialLink
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { API_HOSTNAME } from 'utils/constants'
import { capitalize } from 'lodash';
import { Button } from '@material-ui/core'
import PropTypes from 'prop-types';

import './styles.css';

class SocialLink extends React.Component {
  render() {
    const { provider } = this.props
    return (
      <a href={`${API_HOSTNAME}connect/${provider}`} className="link">
        <Button>
          {capitalize(provider)}
        </Button>
      </a>
    );
  }
}

SocialLink.propTypes = {
  provider: PropTypes.string.isRequired,
};

export default SocialLink;
