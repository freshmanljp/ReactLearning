// ********************此文件为展示context语法，实际写的时候还是按组件化方式编写**************************
// context的用法，也是计数器为例，是一种组件之间共享一类数值的方式
// 引入createContext的方法,注意是方法，直接用即可
import React, { Component,createContext } from 'react'

// 按需导入context中的provider和consumer组件
const { Provider,
        Consumer: CountConsumer
} = createContext()

// 计数器显示组件,用到共享数据时需用Consumer组件包起来
// 注意：Consumer组件包起来的部分必须是函数，因为要接受参数，参数为对象，不能直接输出，需要结构出需要的值
class Counter extends Component {
    render() {
        return (
            <CountConsumer>
                {
                    // 注意此处的参数为对象，不能直接输出，需要结构出需要的值
                    ({count}) => {
                        return (
                            <span>{count}</span>
                        )
                    }
                }
            </CountConsumer> 
        )
    }
}

// 计数器按钮组件
class CounterBtn extends Component {
    render() {
        return (
            <CountConsumer>
                {
                    ({addCount, subCount}) => {
                        const handle = this.props.type === 'add' ? addCount : subCount
                        return (
                            <button onClick={handle}>{this.props.children}</button>
                        )
                    }
                }
            </CountConsumer>
        )
    }
}

// 数据共享组件，state为需要共享的数据，修改该数据的方法也在这里定义，并通过value属性传递下去
class CounterProvider extends Component {
    constructor() {
        super()
        // 共享的数据
        this.state = {
            count: 0
        }
    }
    // 修改共享数据的方法
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    subCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            // 将需要共享的参数和方法作为provider组件的value属性传递下去
            <Provider value={{
                count: this.state.count,
                addCount: this.addCount,
                subCount: this.subCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

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
