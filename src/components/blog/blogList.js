import React, { Component } from 'react'
import BlogItem from './blogItem'
import { connect } from 'react-redux'
import { fetchBlogList } from '../../actions/blog'

class blogList extends Component {
  componentDidMount = () => {
    this.props.fetchBlogList()
  }
  render() {
    // 是否请求出现错误的标志位
    const hasError = Boolean(this.props.errMsg)
    return (
      <div>
        {
          this.props.isLoading
          ?
          <span>Loading...</span>
          :
          (
            hasError
            ?
            <span>{this.props.errMsg}</span>
            :
            <ul>
              {
                this.props.blogList.map(item => {
                  return (
                    <BlogItem {...item} key={item.id}/>
                  )
                  })
              }
            </ul>
          )
        }
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    blogList: state.blog.blogList,
    isLoading: state.blog.isLoading,
    errMsg: state.blog.errMsg
  }
}

export default connect(mapState, { fetchBlogList })(blogList)
