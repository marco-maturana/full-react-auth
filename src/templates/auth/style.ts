import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from './assets/background.jpg';

export default makeStyles(() => ({
  background: {
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: 'rgb(46, 41, 43)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 0',
    width: '100%'
  },
  shadowBackground: {
    height: '100vh',
    width: '100%',
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
}));
