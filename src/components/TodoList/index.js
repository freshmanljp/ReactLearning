import React, { Component } from 'react'
import propTypes from 'prop-types'

import TodoItem from './TodoItem'

export default class index extends Component {
    static propTypes ={
        a: propTypes.number.isRequired,
        b: propTypes.number.isRequired,
        data: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number.isRequired,
            title: propTypes.string.isRequired,
            isDone: propTypes.bool.isRequired
        })).isRequired,
        isCompletedChange: propTypes.func
    }
    render() {
        return (
            <div>
                <ul>
                    <li>{`${this.props.a}+${this.props.b}=${this.props.a+this.props.b}`}</li>
                    {
                        this.props.data.map(item => {
                            return (
                                <TodoItem key={item.id} {...item} isCompletedChange={this.props.isCompletedChange}></TodoItem>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
