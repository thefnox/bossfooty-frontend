/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from 'containers/PrivateRoute';
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
  padding: 0 16px;
  flex-direction: column;
`;

export class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Bossfooty"
          defaultTitle="Bossfooty"
        >
          <meta name="description" content="Bossfooty Performance" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/auth/:authType/:id?" component={AuthPage} />
          <PrivateRoute path="/payment" component={PaymentPage} />
          <PrivateRoute path="/logout" component={LogoutPage} />
          <PrivateRoute path="/quiz" component={QuizPage} />
          <PrivateRoute path="/workout" component={WorkoutPage} />
          <Route exact path="/connect/:provider" component={ConnectPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}

const withSaga = injectSaga({ key: 'global', saga });

export default compose(
  withSaga
)(App);