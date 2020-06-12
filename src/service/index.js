import axios from 'axios'

import apis from './api'

const ajax = axios.create({
  baseURL: apis.baseURL
})

export const getBlogList = () => {
  return ajax.get(apis.blog)
}