// 组件化形式编写有context的开发方式
import React, { Component } from 'react'
import {
    Counter,
    CounterBtn
} from './components'
import { CounterProvider } from './countStore'
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 需要数据共享的组件用自定义的数组共享组件包起来 */}
                <CounterProvider>
                    <CounterBtn type="sub">-</CounterBtn>
                    <Counter></Counter>
                    <CounterBtn type="add">+</CounterBtn>
                </CounterProvider>
            </div>
        )
    }
}
