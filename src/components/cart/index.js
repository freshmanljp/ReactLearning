import React, { Component, Fragment } from 'react'
// 导入需要使用的action
import { decrement, increment } from '../../actions/cart'

// 需要用到store的组件导入connect方法，connect方法调用后返回高阶组件
import { connect } from 'react-redux'

class index extends Component {
  // constructor() {
  //   super()
  //   // this.state = {
  //   //   cartList: []
  //   // }
  // }
  // // 获取store中相关状态并更新到state中,getState必须为箭头函数，否则this会绑定到store上
  // getState = () => {
  //   this.setState({
  //     cartList: this.props.store.getState().cart
  //   })
  // }
  // // 获取一次state并订阅store中的状态信息变化
  // componentDidMount() {
  //   this.getState()
  //   this.props.store.subscribe(this.getState)
  // }
  // 计算购物车总价
  countTotal() {
    let total = 0
    this.props.cartList.forEach(item => {
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
              this.props.cartList.map(item => {
                return (
                  <Fragment key={item.id}>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <button onClick={
                          () => {
                            this.props.decrement(item.id)
                          }
                        }>-</button>
                        <span>{item.amount}</span>
                        <button onClick={
                          () => {
                            this.props.increment(item.id)
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

// state相当于store.getState
const mapState = (state) =>{
  // 这里return了什么，在组件中便可通过this.props获取
  return {
    cartList: state.cart
  }
}

// 导出配置好connect的高阶组件，connect常有参数有两个
// 1.mapState,将store的state映射注入到组件的props中
// 2.mapDispatch，将store的action映射注入到组件的props中，直接调用即可触发dispatch,传入的刚好就是actionCreater对象，所以只需要出入导入的actionCreater对象
export default connect(mapState, { increment, decrement })(index)
