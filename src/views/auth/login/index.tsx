import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import GoogleLogin from 'react-google-login';
import style from './style';

const LoginView: React.FC = () => {
  const classes = style();
  const [showPassword] = useState(false);

  return (
    <Box
      boxShadow={3}
      bgcolor="background.paper"
      m={1}
      p={1}
      className={classes.card}
      style={{ maxWidth: '300px', height: '400px', borderRadius: '7px' }}
    >
      <Grid container spacing={3} direction="column">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Avatar className={classes.avatar}>
            <Icon className="fas fa-lock" />
          </Avatar>
          <Typography className={classes.title} component="h1" variant="h5">
                Autenticação
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">E-mail</InputLabel>
            <OutlinedInput
              startAdornment={(
                <InputAdornment position="start">
                  <Icon className="fas fa-user" />
                </InputAdornment>
                    )}
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Senha</InputLabel>
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              startAdornment={(
                <InputAdornment position="start">
                  <Icon className="fas fa-key" />
                </InputAdornment>
                    )}
              labelWidth={60}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Button fullWidth className={classes.loginButton} variant="contained" size="large">
                      Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <GoogleLogin
                clientId="278658391651-hapsi6ngjpk8etkogt79jls5s49jebte.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={(response) => console.log('onSuccess', response)}
                onFailure={(response) => console.log('onFailure', response)}
                style={{ width: '100%' }}
                redirectUri="http://www.fullauthtest.com:3000/callack"
              >
                <span> Login with Google</span>
              </GoogleLogin>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginView;
