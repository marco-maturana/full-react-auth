import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LoginView from '../../views/auth/login';
import RegisterView from '../../views/auth/register';
import style from './style';


const AuthTemplate: React.FC = () => {
  const { path } = useRouteMatch();
  const classes = style();

  return (
    <div className={classes.background}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.shadowBackground}
      >
        <Router>
          <Switch>
            <Route path={`${path}/login`} exact component={LoginView} />
            <Route path={`${path}/register`} exact component={RegisterView} />
          </Switch>
        </Router>
      </Grid>
    </div>

  );
};

export default AuthTemplate;
