// import React from 'react'
// import ReactDOM from 'react-dom'

// react组件<创建方式1>的简单原理,注意是箭头函数形式
// const createApp = (props) => {
//   return (
//     <div>
//         {/* 注释属于js代码,所以也加了一层花括号 */}
//         <h1>会是你吗? {props.name}</h1>
//         <p>优秀的{props.name}</p>
//     </div>
//   )
// }

// const app = createApp({
//   name: '寒寂'
// })

// ReactDOM.render(app, document.querySelector('#root'))

// 组件创建方式1
// const HelloWorld = (props) => {
//   return (
//     <div>
//         {/* 注释属于js代码,所以也加了一层花括号 */}
//         <h1>会是你吗? {props.name}</h1>
//         <p title={props.title}>优秀的{props.name}</p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <HelloWorld name="西柚" title="不会吧"></HelloWorld>,
//   document.querySelector('#root')
// )

//////////////////////////////////////////////////////////////////////////////

// react组件<创建方式2>的简单原理,是使用类形式
import React, { Component } from 'react'
import { render } from 'react-dom'
// class App extends Component {
//   render () {
//     console.log(this.props)
//     return (
//       <div>
//         <h1>这个夏天</h1>
//         <p title={this.props.say}>{this.props.content}</p>
//       </div>
//     )
//   }
// }

// 渲染原理
// const app = new App({
//   content: '我想遇见你',
//   say: '西莜姐'
// }).render()
// render(app, document.querySelector('#root'))

// render(
//   <App content="我想遇见你" say="西莜姐" />,
//   document.querySelector('#root')
// )

///////////////////////////////////////////////////////////////////////
// react中模板的样式语法
import './index.css'
import classNames from 'classnames'
import styled from 'styled-components'

const GreenSpan = styled.span`
  color: green
`

class App extends Component {
  render() {
    const styleTest = { color: 'red' }
    return (
      <div>
        <h2>模板中元素样式的使用方式</h2>
        <ul>
          <li style={styleTest}>1.style内联的方式</li>
          <li className="textBlue">2.class的方式,注意class要写成className</li>
          <li className={classNames('a', { 'b': true, 'c': false })}>3.用第三方插件classNames去动态添加className</li>
          <li><GreenSpan>4.styled-components的使用,直接给一个元素写样式</GreenSpan></li>
        </ul>
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)




