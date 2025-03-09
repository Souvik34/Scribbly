/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from "react-redux"
import { store } from './pages/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App />
  </Provider>
  
);
