
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom'
import './styles/index.css';
import App from './layout/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import configureStore from './store/ConfigureStore'

const initialState = window.initialReduxState
const store = configureStore(initialState)

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement)
reportWebVitals();
