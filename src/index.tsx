import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';

import { BrowserRouter } from 'react-router-dom'
import { Normalize } from 'styled-normalize';

import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global-styles';

import { Provider } from 'react-redux';
import store from './redux/store/store';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

