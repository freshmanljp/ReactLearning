// 高阶组件的定义方式
import React, { Component } from 'react'

// 需要接受参数组件，所以导出为函数，注意参数名必须是大写开头，认定为组件
const withCopyright = (MyComponent) => {
  return class withCopyright extends Component {
    render() {
      return (
        <>
          {/* 因为隔了一层组件，所以需要传递props */}
          <MyComponent {...this.props}/>
          <div>&copy; 2020 &emsp;失声旋律</div>
        </>
      )
    }
  }
}

export default withCopyright
