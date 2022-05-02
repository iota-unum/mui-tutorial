import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fdd835',
    },
    secondary: {
      main: '#303f9f',
    },
    background: {
      default: '#e8eaf6',
    },
  },

  components : {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '3em',
          width: '10em',
          fontWeight: 'bolder'
        }
      }
    }
  }
});


export default theme