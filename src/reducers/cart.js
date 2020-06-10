import actionType from '../actions/actionTypes'
const initState = [{
  id: 1,
  title: 'apple',
  price: 8888,
  amount: 1
}, {
  id: 2,
  title: 'honor',
  price: 2999,
  amount: 3
}]

// reducer是一个函数，用于规定action对state的处理方式
// 给state赋予初始值
export default (state = initState, action) => {
  switch(action.type) {
    case actionType.CART_AMOUNT_INCREMENT:
      return state.map(item => {
        if(item.id === action.payload.id) item.amount++
        return item
      })
    case actionType.CART_AMOUNT_DECREMENT:
      return state.map(item => {
        if(item.id === action.payload.id) item.amount--
        return item
      })
    default:
      return state
  }
}