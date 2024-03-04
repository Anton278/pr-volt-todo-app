import _React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as _Provider } from 'react-redux'
import 'bootstrap/dist/js/bootstrap.min.js'

import _App from './app'
import { store } from './redux/store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <_React.StrictMode>
    <_Provider store={store}>
      <_App />
    </_Provider>
  </_React.StrictMode>,
)
