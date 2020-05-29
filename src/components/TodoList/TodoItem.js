import React, { Component } from 'react'

// 不向外暴露的组件

export default class TodoItem extends Component {
    render() {
        return (
            <li>
                <span>{this.props.title}</span><span>  {this.props.isDone ? '已完成' : '待完成'}</span>
            </li>
        )
    }
}
