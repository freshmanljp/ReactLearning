import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
  render() {
    return (
      <div>
        <h3>Article组件</h3>
        {/* 路由传参的三种方式，动态路由参数（match中的params），query参数(对应location中的search参数)，state参数（location中的state） */}
        <p>
          <Link to="/article/1?from=article">文章1</Link>
        </p>
        <p>
          <Link to={{
            // 注意是pathname
            pathname: '/article/2',
            state: {
              from: 'article'
            } 
          }}>文章2</Link>
        </p>
      </div>
    )
  }
}