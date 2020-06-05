import React, { Component } from 'react'
import { CountConsumer } from '../../countStore'

// 计数器按钮组件
export default class CounterBtn extends Component {
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
