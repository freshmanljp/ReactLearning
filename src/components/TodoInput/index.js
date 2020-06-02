import React, { Component, createRef } from 'react'
// 需要引用某个元素对象本身的处理方式，（1）需要引入createRef方法

export default class index extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: ''
        }
        // （2）使用createRef方法创建ref，名字自取
        this.inputDom = createRef()
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
        this.setState({
            inputValue: ''
        })
        // （4）在需要引用的元素的场合通过current方法引用元素
        this.inputDom.current.focus()
    }
    // 获取键盘输入编码的方式
    handleAddKeyUp = (e) => {
        if(e.keyCode === 13) {
            this.addClick()
        }
    }
    render() {
        return (
            <div>
                {/* react中的输入框双向绑定实现 */}
                {/* （3）在需要引用的元素上绑定创建ref */}
                <input placeholder="do something"
                ref={this.inputDom}
                value={this.state.inputValue} onChange={this.handleInputChange} onKeyUp={this.handleAddKeyUp}/>
                <button onClick={this.addClick}>add</button>
                {/* 事件处理函数有参数时的推荐绑定形式 */}
                <button onClick={this.logContent.bind(this, this.state.inputValue)}>点我有输出</button>  
            </div>
        )
    }
}
