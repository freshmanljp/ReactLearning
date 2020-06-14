import React, { Component } from 'react'
import { GoHomeBtn } from '../../components'

export default class ArticleDetail extends Component {
  // goHome = () => {
  //   this.props.history.push('/home')
  // }
  render() {
    console.log(this.props)
    return (
      <div>
        详情页 {this.props.match.params.id}
        {/* <button onClick={this.goHome}>回到首页</button>  */}
        <GoHomeBtn />
      </div>
    )
  }
}
