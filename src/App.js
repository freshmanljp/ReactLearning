// 实现简易的redux
import React, { Component } from 'react'
import { Cart } from './components'

// 导入store
import store from './store'

class App extends Component {
    render() {
        return (
            <div>
                <Cart store={store}/>
            </div>
        )
    }
}

export default (App)
