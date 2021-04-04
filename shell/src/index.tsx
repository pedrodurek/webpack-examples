import { FC } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <Router>
      <Route path="/home">{/** TODO */}</Route>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
