import axios from 'axios'

// 4.axios本身就返回Promise  3.没有必要
export function request(config){
  // 一 创建实例
  const sl1 = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })

  // 二 拦截器
  /**
   * 为什么拦截？
   * 1.比如config中的一些信息不符合服务器要求
   * 2.每次发送网络请求时，界面显示一个加载图标
   * 3.某些网络请求（比如登录时需要token），必须携带一些特殊信息
   * 
   */
    // 请求拦截
  sl1.interceptors.request.use((config) => {
    console.log(config)
    return config
  }, (err) => {
    console.log(err)
  })
  // 响应拦截
  sl1.interceptors.response.use((res) => {
    console.log(res)
    return res
  }, (err) => {
    console.log(res)
  })

  // 三 发送请求
  return sl1(config)
}




// 1.通过回调函数传出去 请求返回的数据
// export function request(config,success,error){
//   const sl1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/wh',
//     timeout: 5000
//   })
//   sl1(config).then((res) => {
//     success(res)
//   }).catch((err) => {
//     error(err)
//   })
// }

// 2.传入对象方式
// export function request(config){
//   // 创建实例
//   const sl1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000/api/wh',
//     timeout: 5000
//   })
//   // 发送请求
//   sl1(config.baseConfig).then((res) => {
//     config.success(res)
//   }).catch((err) => {
//     config.error(err)
//   })
// }

// 3.promise方式
// export function request(config){
//   return new Promise((resolve, reject) => {
//     const sl1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000/api/wh',
//       timeout: 5000
//     })
  
//     sl1(config).then((res) => {
//       resolve(res)
//     }).catch((err) => {
//       reject(err)
//     })
//   })
// }