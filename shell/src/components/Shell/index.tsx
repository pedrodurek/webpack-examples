import React, { lazy, Suspense } from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Header from '../Header';
import { RootContainer } from './styles';

const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard" */ 'app1/Dashboard'),
);

const Shell = () => {
  return (
    <RootContainer>
      <Header />
      <main>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
            </Switch>
          </Suspense>
        </Router>
      </main>
    </RootContainer>
  );
};

export default Shell;
