import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RussoOneTTF from './fonts/RussoOne-Regular.ttf';
import {CssBaseline} from '@mui/material';

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#a52a2a',
    }
  },
  typography: {
    fontFamily: 'Russo One, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Russo One",
          src: `url(${RussoOneTTF}) format("truetype")`
        },
      }
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
