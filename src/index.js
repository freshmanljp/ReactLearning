import React from 'react'
import { render } from 'react-dom'

import App from './App'

// 如果需要全局地扩展React.Component的prototype,如挂载ajax,但一般不挂载ajax
// import * as services from './services'
// React.Component.prototype.http = services

render(
    <App />,
    document.querySelector('#root')
)