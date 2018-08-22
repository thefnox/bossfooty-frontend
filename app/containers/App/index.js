/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import injectSaga from 'utils/injectSaga';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
import AboutPage from 'containers/AboutPage/Loadable';
import PricingPage from 'containers/PricingPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import PaymentPage from 'containers/PaymentPage/Loadable';
import LogoutPage from 'containers/LogoutPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import QuizPage from 'containers/QuizPage/Loadable';
import AuthPage from 'containers/AuthPage/Loadable';
import WorkoutPage from 'containers/WorkoutPage/Loadable';
import ConnectPage from 'containers/ConnectPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.css';
import saga from './saga';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
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
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

export class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Bossfooty"
          defaultTitle="Bossfooty"
        >
          <meta name="description" content="Bossfooty Performance" />
        </Helmet>
        <CssBaseline />
        <Header className={classes.appBar} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/auth/:authType/:id?" component={AuthPage} />
          <PrivateRoute path="/payment" component={PaymentPage} />
          <PrivateRoute path="/logout" component={LogoutPage} />
          <PrivateRoute path="/quiz" component={QuizPage} />
          <PrivateRoute path="/workout/:day?" component={WorkoutPage} />
          <Route exact path="/connect/:provider/callback" component={ConnectPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer className={classNames(classes.footer, classes.layout)} />
      </AppWrapper>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withStyles(styles),
  withSaga
)(App);