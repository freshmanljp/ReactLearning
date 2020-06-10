import React, { Component, Fragment } from 'react'
// 导入需要使用的action
import { decrement, increment } from '../../actions/cart'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      cartList: []
    }
  }
  // 获取store中相关状态并更新到state中,getState必须为箭头函数，否则this会绑定到store上
  getState = () => {
    this.setState({
      cartList: this.props.store.getState().cart
    })
  }
  // 获取一次state并订阅store中的状态信息变化
  componentDidMount() {
    this.getState()
    this.props.store.subscribe(this.getState)
  }
  // 计算购物车总价
  countTotal() {
    let total = 0
    this.state.cartList.forEach(item => {
      total += item.price * item.amount
    })
    return total
  }
  render() {
    const style = { 
      border: '1px solid',
      color: 'red'
    }
    return (
      <Fragment>
        <h3>购物车</h3>
        <table style={style}>
          <thead>
            <tr>
              <th>id</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>数量</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.cartList.map(item => {
                return (
                  <Fragment key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <button onClick={
                          () => {
                            this.props.store.dispatch(decrement(item.id))
                          }
                        }>-</button>
                        <span>{item.amount}</span>
                        <button onClick={
                          () => {
                            this.props.store.dispatch(increment(item.id))
                          }
                        }>+</button>
                      </td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
          <h3>总价为： {this.countTotal()}</h3>
      </Fragment>
    )
  }
}
