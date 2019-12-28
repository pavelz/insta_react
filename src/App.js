import React from 'react';
import { Provider } from 'react-redux'
import MainApp from './MainApp'
import ReactGA from 'react-ga'
import logo from './logo.svg';

import './App.css';

import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import PhotoReducer from "./PhotoReducer";
ReactGA.initialize('UA-155132860-1')
const loggerMiddleware = createLogger()
export const store = createStore(
    PhotoReducer,
    {photos: []}, compose(applyMiddleware(thunkMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f));


function App() {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
      <Provider store={store}>


        <MainApp />
        {/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ✌️
        </a>
      </header>
    </div>
          */}

      </Provider>


);
}

export default App;
