import React, { Component } from 'react'

// 非可控组件
export default class index extends Component {
  constructor() {
    super()
    this.state = {
      isLike: false
    }
  }
  handleClick = () => {
    // 注意：setState是异步函数，会延迟执行，其有两个参数，参数1为设置值，参数2为读取最新参数值的回调函数
    this.setState({
      isLike: !this.state.isLike
    })
  }
  render() {
    return (
      <div>
        <span onClick={this.handleClick}>{this.state.isLike ? '💗取消' : '🖤点赞'}</span>
      </div>
    )
  }
}
