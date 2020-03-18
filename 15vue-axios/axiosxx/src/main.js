import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 3.全局配置
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/wh'
axios.defaults.timeout = 5000

// 1.基本使用
axios({
  url: '/home/multidata',
  method: 'get'
}).then((data) => {
  // console.log(data)
})

axios({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then(function(data){
  // console.log(data)
})

// 2.并发请求
axios.all([
  axios({
    url: '/home/multidata'
  }),
  axios({
    url: '/home/data',
    params: {
      type:'pop',
      page: 1
    }
  })
]).then((res) => {
  // console.log(res[0])
  // console.log(res[1])
})

// 4.创建实例
const axios1 = axios.create({
  baseURL: 'http://123.207.32.32:8000/api/wh',
  timeout: 5000
})
axios1({
  url: '/home/multidata'
}).then((res) => {
  // console.log(res)
}).catch((err) => {
  console.log(err)
})

// 5.封装
import {request} from './network/reqest'
// 1.传入方法
// request({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// },(res) => {
//   console.log(res)
// },(err) => {
//   console.log(err)
// })

// 2.传入对象
// request({
//   baseConfig: {
//     url:'/home/data',
//     params: {
//       type: 'pop',
//       page: 1
//     }
//   },
//   success: function(res){
//     console.log(res)
//   },
//   error: function(err){
//     console.log(err)
//   }
// })

// 3.Promise方式
// request({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then((res) => {
//   console.log(res)
// }).catch((err) => {
//   console.log(err)
// })

// 4.axios本身就返回Promise，3没有必要

request({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log(err)
})