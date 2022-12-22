import createTheme from '@mui/material/styles/createTheme';

export const COLOR_BLACK = '#000000';
export const COLOR_INDIGO = '#24246B';
export const COLOR_WHITE = '#FFFFFF';
export const COLOR_CARAMEL = '#F6DD98';
export const COLOR_SAFFRON = '#EDBC31';
export const COLOR_SOAP = '#D1D1F0';

export const theme = createTheme({
  typography: {
    fontFamily: "'Raleway', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
        },
      },
    },
  },
});
