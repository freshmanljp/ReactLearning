import actionType from './actionTypes'
import { getBlogList } from '../service'

// 此action主要用于显示loading提示
const startFetchBlogList = () => {
  return {
    type: actionType.START_FETCH_BLOG_LIST
  }
}
// 此action用于实现请求成功时数据的传递
const fetchBlogSuccess = (data) => {
  return {
    type: actionType.FETCH_BLOG_SUCCESS,
    payLoad: data
  }
}
// 请求失败时消息的传递
const fetchBlogFailed = (err) => {
  return {
    type: actionType.FETCH_BLOG_FAILED,
    payLoad: err
  }
}
// 只需要导入fetchBlogList一个action，因为其他均为内部调用action
export const fetchBlogList = () => (dispatch) => {
  dispatch(startFetchBlogList())
  getBlogList()
  .then((res) => {
    if(res.status === 200) {
      dispatch(fetchBlogSuccess(res.data))
    }
  })
  .catch(err => {
    dispatch(fetchBlogFailed('好像有些问题出现了'))
  })
}