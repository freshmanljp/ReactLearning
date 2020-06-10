import { createStore } from 'redux'
import rootReducer from './reducers'

// 用联合后的reducer创建store
export default createStore(rootReducer)