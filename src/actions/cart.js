import actionType from './actionTypes'

// 因为action可能需要接收参数，所以定义成返回对象的函数形式
const increment = (id) => {
  return {
    type: actionType.CART_AMOUNT_INCREMENT,
    payload: {
      id: id
    }
  }
}
const decrement = (id) => {
  return {
    type: actionType.CART_AMOUNT_DECREMENT,
    payload: {
      id: id
    }
  }
}
const incrementAsync = (id) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(id))
    }, 2000)
  }
}

export {
  increment,
  decrement,
  incrementAsync
} 