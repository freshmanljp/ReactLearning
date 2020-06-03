// 此文件用于管理ajax的相关配置
import axios from 'axios'
import apis from './apis'

const ajax = axios.create({
  baseURL: apis.baseURL
})

// 这里可以进行一些全局的拦截处理

export const getTodos = () => {
  return ajax.get(apis.todos)
}

