import React, { Component } from 'react'
// import React, { PureComponent } from 'react'
import propTypes from 'prop-types'

// 不向外暴露的组件

// (解决重复渲染问题方式2),使用PureComponent组件注册组件,更新组件时会自动进行*浅比较*前后更新组件决定是否更新组件
// export default class TodoItem extends PureComponent {
export default class TodoItem extends Component {
    static propTypes ={
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        isDone: propTypes.bool.isRequired,
    }
    constructor() {
        super()
        this.state = {
            isDoneText: ''
        }
    }
    // state中的值要与props的值保持同步的处理方法
    static getDerivedStateFromProps(props) {
        return {
            isDoneText: props.isDone ? '已完成' : '待完成'
        }
    }

    checkChange = () => {
        // 结构出props中需要属性的简便方法,可以赋初值的,如函数没传的话可以赋初值为空函数
        const {
            isCompletedChange = () => {},
            id
        } = this.props
        isCompletedChange(id)
    }
    render() {
        // 从打印信息可以看到，每更改一次todoList的prop信息，整个todoList的组件都会重新渲染一次，包括所有的todoitem，不利于系统的性能
        console.log('todoitem被渲染了')
        return (
            <li>
                <input type="checkbox" checked={this.props.isDone} onChange={this.checkChange}></input>
                {/* <span>{this.props.title}</span><span>  {this.props.isDone ? '已完成' : '待完成'}</span> */}
                <span>{this.props.title}</span><span>  {this.state.isDoneText}</span>
            </li>
        )
    }
    // (解决重复渲染问题方式1)生命钩子函数shouldComponentUpdate可设置组件是否更新，根据返回的bool值决定组件是否更新，在里面判断组件是否有必要更新
    shouldComponentUpdate = (nextProps, nextState) => {
        return nextProps.isDone !== this.props.isDone
    }
}
