import { ThemeProvider } from '@material-ui/core';
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import './index.css';
import store from './redux/configureStore';

let theme = createTheme({
  typography: {
    fontSize: 19.2,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#E50914',
    },
  },
});

theme = responsiveFontSizes(theme);
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
