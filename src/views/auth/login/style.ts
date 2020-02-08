import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: any) => ({
  card: {
    width: '400px',
    margin: '10px',
    '& label': {
      color: '#1C9090 !important'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1C9090 !important',
      color: '#1C9090 !important'
    },
    '& .MuiInputAdornment-root': {
      color: 'grey'
    }
  },
  avatar: {
    marginTop: theme.spacing(2),
    backgroundColor: '#FE7575',
    width: '60px',
    height: '60px'
  },
  loginButton: {
    backgroundColor: '#1C9090',
    color: 'white',
    fontWeight: 'bold'
  },
  title: {
    margin: '10px',
    fontWeight: 'bold',
    color: 'grey'
  }
}));
