import { FC, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard'),
);

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
