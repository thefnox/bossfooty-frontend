/**
 *
 * AuthPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { SubmissionError } from 'redux-form/immutable'
import { get, replace, set } from 'lodash';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LoginForm from 'components/LoginForm';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import RegisterForm from 'components/RegisterForm';
import ResetPasswordForm from 'components/ResetPasswordForm';
import ForgotPasswordForm from 'components/ForgotPasswordForm';
import { loadUserStatus } from 'containers/App/actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
  makeSelectIsSubbed
} from 'containers/App/selectors';
import SocialLink from 'components/SocialLink';
import { API_HOSTNAME } from 'utils/constants';
import auth from 'utils/auth';
import request from 'utils/request';
import messages from './messages';
import reducer from './reducer';
import './styles.css';

const ButtonLink = props => <Link {...props} />

class AuthPage extends React.PureComponent {
  
  getRequestURL = () => {
    const { authType } = this.props.match.params

    switch (this.props.match.params.authType) {
      case 'login':
        return `${API_HOSTNAME}auth/local`;
      case 'register':
        return `${API_HOSTNAME}auth/local/register`;
      case 'reset-password':
        return `${API_HOSTNAME}auth/reset-password`;
      case 'forgot-password':
        return `${API_HOSTNAME}auth/forgot-password`;
      default:
    }

    return `${API_HOSTNAME}auth/local`;
  };

  handleSubmit = async (bodyMap) => {
    const { authType } = this.props.match.params
    const body = (authType === 'forgot-password' ? body.set('url', `${window.location.origin}/auth/reset-password`) : bodyMap).toObject()
    const requestURL = this.getRequestURL();

    try {
      const response = await request(requestURL, { method: 'POST', body })
      if (!response.user) {
        console.log(response);
        throw 'An error has occurred';
      }
      auth.setToken(response.jwt, body.rememberMe);
      auth.setUserInfo(response.user, body.rememberMe);
      this.props.onLoadUser();
      this.redirectUser();
    }
    catch(err) {
      throw new SubmissionError({
        _error: err
      })
    }
  };

  redirectUser = () => {
    this.props.history.push('/');
  };

  render() {
    const { authed } = this.props;
    const { authType } = this.props.match.params;
    const providers = ['facebook', 'google'];

    return (
      <div className="authPage">
        <div className="wrapper">
          <div className="headerContainer">
            {authType === 'register' && (
              <span>Welcome !</span>
            )}
          </div>
          <div className="headerDescription">
            {authType === 'register' && (
              <span>Please register to access the app.</span>
            )}
            {authed && (
              <span>You are already logged in.</span>
              )
            }
          </div>
          {
            !authed && (
            <div> 
              <div className="formContainer">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-12">
                      {providers.map(provider => (
                        <SocialLink provider={provider} key={provider} />
                      ))}
                    </div>
                  </div>
                  { authType === 'login' && <LoginForm onSubmit={this.handleSubmit} /> }
                  { authType === 'register' && <RegisterForm onSubmit={this.handleSubmit} /> }
                  { authType === 'reset-password' && <ResetPasswordForm onSubmit={this.handleSubmit} /> }
                  { authType === 'forgot-password' && <ForgotPasswordForm onSubmit={this.handleSubmit} /> }
                </div>
              </div>
              <div className="linkContainer">
                { 
                  authType === 'login' ? (
                    <div>
                      <Button component={ButtonLink} to="/auth/forgot-password"><FormattedMessage { ...messages.forgotPasswordLink } /></Button>
                      <Button component={ButtonLink} to="/auth/register"><FormattedMessage { ...messages.createAccountLink } /></Button>
                    </div>
                  )
                  : (
                    <div>
                      <Button component={ButtonLink} to="/auth/login"><FormattedMessage { ...messages.loginLink } /></Button>
                    </div>
                  )
                }
              </div>
            </div>
            )
          }
        </div>
      </div>
    );
  }
}

AuthPage.defaultProps = {};
AuthPage.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus())
  };
}

const mapStateToProps = createStructuredSelector({
  authed: makeSelectIsAuthed(),
  subbed: makeSelectIsSubbed(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'auth', reducer });

export default compose(
  withReducer,
  withConnect,
)(AuthPage);