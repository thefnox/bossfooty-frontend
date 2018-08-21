/**
 *
 * LogoutPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { loadUserStatus } from 'containers/App/actions';
import auth from 'utils/auth';

/* eslint-disable react/prefer-stateless-function */
export class LogoutPage extends React.PureComponent {

  componentDidMount(){
    const { onLoadUser } = this.props;
    auth.clearToken();
    auth.clearUserInfo();
    onLoadUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
      </div>
    )  
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onLoadUser: evt => dispatch(loadUserStatus())
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(LogoutPage);
