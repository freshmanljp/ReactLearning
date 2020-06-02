import React, { Component } from 'react'
import propTypes from 'prop-types'

// 不向外暴露的组件

export default class TodoItem extends Component {
    static propTypes ={
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        isDone: propTypes.bool.isRequired,
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
        return (
            <li>
                <input type="checkbox" checked={this.props.isDone} onChange={this.checkChange}></input>
                <span>{this.props.title}</span><span>  {this.props.isDone ? '已完成' : '待完成'}</span>
            </li>
        )
    }
}
