// react-redux的使用
import React, { Component } from 'react'
import { Cart } from './components'

// 导入provider组件
import { Provider } from 'react-redux'

// 导入store
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Cart />
            </Provider>
        )
    }
}

export default (App)
