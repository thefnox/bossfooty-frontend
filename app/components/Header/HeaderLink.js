import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core'

export default class HeaderLink extends React.Component {
  render() {
    const { to, children } = this.props
    return (
      <Link to={to}>
        <Button>
          {children}
        </Button>
      </Link>
    );
  }
}