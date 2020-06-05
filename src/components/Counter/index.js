import React, { Component } from 'react'
import { CountConsumer } from '../../countStore'

// 计数器显示组件,用到共享数据时需用Consumer组件包起来
// 注意：Consumer组件包起来的部分必须是函数，因为要接受参数，参数为对象，不能直接输出，需要结构出需要的值
export default class Counter extends Component {
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
