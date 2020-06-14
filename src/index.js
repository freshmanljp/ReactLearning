// HOC高阶组件的用法
import React from 'react'
import { render } from 'react-dom'

// history模式
import { BrowserRouter as Router, Route } from 'react-router-dom'
// 哈希模式
// import { HashRouter as Router, Route } from 'react-router-dom'

import App from './App'

render(
    <Router>
        <Route component={App}></Route>
    </Router>,
    document.querySelector('#root')
)