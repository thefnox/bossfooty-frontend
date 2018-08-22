import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Grid,
  Typography
} from '@material-ui/core';
import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

export default class Footer extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <footer className={className}>
        <Grid container spacing={32} justify="space-evenly">
          <Grid item xs>
            <Typography variant="title" color="textPrimary" gutterBottom>
              <FormattedMessage {...messages.copyright} />
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <FormattedMessage {...messages.licenseMessage} />
            </Typography>
          </Grid>
          <Grid item xs>
            <LocaleToggle />
          </Grid>
          <Grid item xs>
            <Typography variant="subheading" color="textSecondary">
              <FormattedMessage
                {...messages.authorMessage}
                values={{
                  author: <A href="http://fnox.club">FNOX</A>,
                }} />
            </Typography>
          </Grid>
        </Grid>
      </footer>
    );
  }
}

