import React from 'react';
import { FormattedMessage } from 'react-intl';
import { 
  makeSelectIsAuthed,
  makeSelectIsSubbed,
  makeSelectIsSetup 
} from 'containers/App/selectors';
import {
  AppBar,
  Toolbar,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {

  renderAuthedLinks() {
    const { authed, subbed, configured } = this.props;
    if (authed) {
      return (
        <AppBar position="static" color="default">
          <Toolbar>
            <HeaderLink to="/">
              <FormattedMessage {...messages.home} />
            </HeaderLink>
            {
              subbed ? (
                configured ? (
                  <HeaderLink to="/workout">
                    <FormattedMessage {...messages.workout} />
                  </HeaderLink>
                ) 
                : (
                  <HeaderLink to="/quiz">
                    <FormattedMessage {...messages.setup} />
                  </HeaderLink>
                )
              )
              : (
                <HeaderLink to="/payment">
                  <FormattedMessage {...messages.payment} />
                </HeaderLink>
              )
            }
            <HeaderLink to="/logout">
              <FormattedMessage {...messages.logout} />
            </HeaderLink>
          </Toolbar>
        </AppBar>
      )
    }
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/pricing">
            <FormattedMessage {...messages.pricing} />
          </HeaderLink>
          <HeaderLink to="/about">
            <FormattedMessage {...messages.about} />
          </HeaderLink>
          <HeaderLink to="/auth/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
        </Toolbar>
      </AppBar>
    )
  }

  render() {
    return (
      <div>
        { this.renderAuthedLinks() }
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    authed: makeSelectIsAuthed(),
    subbed: makeSelectIsSubbed(),
    configured: makeSelectIsSetup(),
  }),
)(Header);
