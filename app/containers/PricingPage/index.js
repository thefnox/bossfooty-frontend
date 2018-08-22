/**
 *
 * PricingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import {
  Button,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@material-ui/core';
import messages from './messages';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
})

/* eslint-disable react/prefer-stateless-function */
export class PricingPage extends React.PureComponent {
  render() {
    const { classes } = this.props
    return (
      <div className={ classes.layout }>
        <div className={classes.heroContent}>
          <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
            Pricing
          </Typography>
          <Typography variant="title" align="center" color="textSecondary" component="p">
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
          </Typography>
        </div>
        <Grid container spacing={40} alignItems="center" justify="center">
          <Grid item xs={12} sm={6} md={6}>
            <Card>
              <CardHeader
                title=""
                subheader=""
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography variant="display2" color="textPrimary">
                    FREE 7 - DAY TRIAL
                  </Typography>
                </div>
                <Typography variant="subheading" align="center">
                  Cancel anytime before trial ends and you will not be charged.
                </Typography>
                <Typography variant="subheading" align="center" color="textSecondary">
                  Our subscription rate is $24.99/mo
                </Typography>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Link to='/auth/local/register'>
                  <Button fullWidth color="primary">
                    Start your 7-day free trial
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Typography align="center" variant="title" color="textPrimary" gutterBottom>
              MEMBERSHIP INCLUDES:
            </Typography>
            <Typography align="center" variant="subheading">Body</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Your customized training program</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Training program adjusted every 12 weeks, to optimize performance levels</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography align="center" variant="subheading">Nutrition</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Sample Meal Plans</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Easy Recipes</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Food options</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Typography align="center" variant="subheading">Mind</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Boss Footy Mind Program</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Motivation</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Inspiration</Typography>
            <Typography align="center" variant="subheading" color="textSecondary">Relaxation</Typography>          
          </Grid>
        </Grid>
      </div>
    );
  }
}

PricingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withStyles(styles),
  withConnect
)(PricingPage);
