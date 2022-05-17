import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Hash } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css';
import App from './App'

ReactDOM.render(
  <Hash>
    <App />
  </Hash>,
  document.getElementById('root')
)
