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

const Profile = lazy(
  () => import(/* webpackChunkName: "dashboard" */ 'app2/Profile'),
);

const Shell = () => {
  return (
    <RootContainer>
      <Router>
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route
                exact
                path="/"
                render={() => <Redirect to="/dashboard" />}
              />
            </Switch>
          </Suspense>
        </main>
      </Router>
    </RootContainer>
  );
};

export default Shell;
