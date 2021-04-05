import { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './views/Dashboard';

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
