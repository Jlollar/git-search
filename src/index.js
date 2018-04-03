import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import reducer from './reducers/reducer';
import { Home, Mine, Search } from './screens';
import Header from './components/Header';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/search":
      return <Search />;
    case "/mine":
      return <Mine />;
    default:
      return <Home />;
  }
};
let pathname = window.location.pathname;
  
let store = createStore(reducer)
render(
    <Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
