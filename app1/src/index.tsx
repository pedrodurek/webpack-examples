import { FC, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Dashboard = lazy(
  () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard'),
);

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Suspense>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
