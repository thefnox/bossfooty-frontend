/**
 *
 * ConnectPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { API_HOSTNAME } from 'utils/constants'
import messages from './messages';
import auth from 'utils/auth';
import request from 'utils/request';

class ConnectPage extends React.Component {
  componentDidMount() {
    const {
      match: { params: { provider } },
      location: { search },
    } = this.props;
    const requestURL = `${API_HOSTNAME}auth/${provider}/callback${search}`;

    request(requestURL, { method: 'GET' })
      .then(response => {
        auth.setToken(response.jwt, true);
        auth.setUserInfo(response.user, true);
        this.redirectUser('/');
      })
      .catch(err => {
        console.log(err.response.payload);
        this.redirectUser('/auth/login');
      });
  }

  redirectUser = path => {
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <h1><FormattedMessage { ...messages.header } /></h1>
      </div>
    );
  }
}

ConnectPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ConnectPage;
