/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  Paper,
  Grid,
  Typography,
  Card,
  CardContent
} from '@material-ui/core'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
  makeSelectIsAuthed,
  makeSelectIsSubbed
} from 'containers/App/selectors';
import reducer from './reducer';

const styles = theme => ({
  mainHomeHero: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainHomeHeroContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
});

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.Component {
  render() {
    const { loading, error, repos, classes } = this.props;
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Bossfooty"
          />
        </Helmet>
        <div>
          <Paper className={classes.mainHomeHero}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainHomeHeroContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Do you want to be an IMPACT PLAYER on the field?
                  </Typography>
                  <Typography variant="title" color="inherit">
                  If your answer is YES, then scroll down…
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={40} className={classes.cardGrid}>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="headline">A soccer player will be most successful if they optimize these three areas:</Typography>
                    <Typography variant="subheading" paragraph>
                    </Typography>
                    <Typography variant="subheading" color="primary">
                      Mind + Body + Nutrition = THE NEXT LEVEL
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="headline">To get high quality training in these areas you would have to pay a fortune, and this
doesn’t include the fact that you have to rearrange your schedule to make it
work…keep scrolling</Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="headline">What if I told you that you could get professional quality training for your MIND,
BODY, &amp; NUTRITION…</Typography>
                    <Typography variant="subheading" color="textSecondary">
                    ALL IN ONE PLACE… ON YOUR OWN SCHEDULE… AT A VERY AFFORDABLE
PRICE...
                    </Typography>
                    <Typography variant="subheading" paragraph>
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="headline">We offer:</Typography>
                    <Typography variant="subheading" color="textSecondary">
                      Mind + Body + Nutrition = THE NEXT LEVEL
                    </Typography>
                    <Typography variant="subheading" paragraph>
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="headline">A soccer player will be most successful if they optimize these three areas:</Typography>
                    <Typography variant="subheading" color="textSecondary">
                    Fully customized soccer specific off-season training programs designed using
our Boss Footy Program Design Software.
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                    Nutritional guides, sample meal plans, and food options.
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                    Motivational, inspirational, confidence boosting training in our Mind section.
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                    Recovery methods and full body foam rolling how to videos
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                    Stretching routines to maximize flexibility and performance
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export default compose(
  withStyles(styles)
)(HomePage);
