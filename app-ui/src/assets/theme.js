import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#333',
    },
    h2: {
      fontSize: '1.7rem',
      fontWeight: '700',
      color: '#333',
    },
  },
});
