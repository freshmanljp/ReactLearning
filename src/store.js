import { createStore, applyMiddleware } from 'redux'
// 引入thunk，用于处理异步action的情况
import thunk from 'redux-thunk'

// 引入合并后的reducer
import rootReducer from './reducers'

// 用联合后的reducer创建store,并应用thunk这个中间件
export default createStore(
  rootReducer,
  applyMiddleware(thunk) 
)