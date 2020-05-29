import React, { Component } from 'react'

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
    }
    // 注意用箭头函数的形式定义事件方法，确保this的指向为组件对象本身（这是无参数的事件处理函数的推荐用法）
    handleInputChange = (e) => {
        // 注意react中的e用currentTarget表示事件触发对象
        this.setState({
            inputValue: e.currentTarget.value
        })
    }
    logContent = (content) => {
        console.log('内容为： ' + content)
    }
    addClick = () => {
        this.props.addTodo(this.state.inputValue)
    }
    render() {
        return (
            <div>
                {/* react中的输入框双向绑定实现 */}
                <input placeholder="do something"
                value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.addClick}>add</button>
                {/* 事件处理函数有参数时的推荐绑定形式 */}
                <button onClick={this.logContent.bind(this, this.state.inputValue)}>点我有输出</button>  
            </div>
        )
    }
}
