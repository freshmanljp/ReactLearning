import actionType from '../actions/actionTypes'
const initState = {
  blogList: [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }],
  isLoading: false,
  errMsg: ''
}

// reducer是一个函数，用于规定action对state的处理方式
// 给state赋予初始值
export default (state = initState, action) => {
  switch(action.type) {
    case actionType.START_FETCH_BLOG_LIST:
      return {
        ...state,
        isLoading: true
      }
    case actionType.FETCH_BLOG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        blogList: action.payLoad,
        errMsg: ''
      }
    case actionType.FETCH_BLOG_FAILED:
      return {
        ...state,
        isLoading: false,
        errMsg: action.payLoad
      }
    default:
      return state
  }
}