import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader'
import { init } from '@antmjs/vantui'
import React from 'react'
import { render } from 'react-dom'
import './index.less'
import App from './App'
import reportWebVitals from './reportWebVitals'
init()
applyPolyfills().then(function () {
  defineCustomElements(window)
})

render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
