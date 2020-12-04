import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fafafa',
    },
    secondary: {
      main: '#A5B1B6',
    },
    info: {
      main: '#001F54'
    },
    warning: {
      main: '#04070D'
    },
    success: {
      main: '#7EC8E3'
    }
  },
  typography: {
    fontFamily: ['Roboto Condensed', 'Montserrat'].join(','),
    fontWeightRegular: 400,
    fontSize: 16
  },

})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

