import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// 外部定义的组件需要用到router相关api时需要用到高阶组件withRouter
class index extends Component {
  goHome = () => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div>
        <button onClick={this.goHome}>回到首页</button>
      </div>
    )
  }
}

export default withRouter(index)
