// 封装 axios 请求模块

import axios from 'axios'

// 处理后端返回数据超出js安全整数范围问题
import jsonBig from 'json-bigint'

// axios.create 方法:复制一个 axios
const request = axios.create({
  baseURL:
    'http://ttapi.research.itcast.cn/' // 基础路径
})

request.defaults.transformResponse =
  [function (data) {
    try {
      return jsonBig.parse(data)
    } catch (err) {
      return {}
    }
  }]

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
