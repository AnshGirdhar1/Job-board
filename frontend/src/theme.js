import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0049FC',
    },
    secondary: {
      main: '#0049FC',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
          textTransform: 'capitalize',
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '15px',
          textTransform: 'capitalize',
        },
      },
    },
  },
});
