import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AuthTemplate from './templates/auth';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/auth" component={AuthTemplate} />
    </Switch>
  </Router>
);

export default App;
