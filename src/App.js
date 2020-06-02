import React, { Component, Fragment } from 'react'

// 引入组件
import { TodoHeader, TodoInput, TodoList, TodoLike } from './components'

// 组件类型：受控组件，半受控组件，非受控组件，根据组件是由props还是state控制判断

export default class App extends Component {
    // state方式1
    // state = {
    //     title: '今日事，今日毕'
    // }
    // state方式2
    constructor() {
        super()
        this.state = {
            title: '今日事，今日毕',
            desc: '拖延症全跑掉',
            todoLists: [{
                id: 1,
                title: '撩妹',
                isDone: true
            }, {
                id: 2,
                title: '约啊',
                isDone: false
            }]
        }
    }
    // 子组件给父组件传值，需在父组件中定义好处理数据的方法，通过props传值给传值的子组件
    addTodo = inputValue => {
        this.setState({
            // 处理数据添加的方式有多种，注意push方法的使用，其返回值是新数组的长度，并不适合在此场景使用
            // todoLists: this.state.todoLists.concat({
            //     id: Math.random(),
            //     title: inputValue,
            //     isDone: false
            // })
            todoLists: [...this.state.todoLists, {
                id: Math.random(),
                title: inputValue,
                isDone: false
            }]
        })
    }
    // 子组件给父组件传值2，改变todoitem的状态
    isCompletedChange = id => {
        // setState的第二种使用方式,注意要return数组
        this.setState((preState) => {
            return {
                // map方法注意return
                todoLists: preState.todoLists.map(item => {
                    if (item.id === id) {
                        item.isDone = !item.isDone
                    }
                    return item
                })
            }  
        })
    }
    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc} title={this.state.title}></TodoHeader>
                <TodoInput addTodo={this.addTodo}></TodoInput>
                {/* 动态绑定的属性记得用花括号括起来，否则被统一认为是字符串 */}
                <TodoList a={1} b={2} data={this.state.todoLists} isCompletedChange={this.isCompletedChange}></TodoList>
                <TodoLike></TodoLike>
            </Fragment>
        )
    }
}
