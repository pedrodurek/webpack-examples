import { FC, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const Profile = lazy(
  () => import(/* webpackChunkName: "profile" */ './views/Profile'),
);

const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
