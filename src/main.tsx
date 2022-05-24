import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter as Hash } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/';
import './index.css'
import 'antd/dist/antd.css';
import App from './App'

ReactDOM.render(
  <Provider store={store}>
  <Hash>
    <App />
  </Hash></Provider>
  ,
  document.getElementById('root')
)
