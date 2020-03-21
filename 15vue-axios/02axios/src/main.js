import Vue from 'vue'
import App from './App'
// import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})


// 3.全局配置相同的配置
axios.defaults.baseURL = 'http://123.207.32.32:8000/api/wh'
axios.defaults.timeout = 5000


// 1.基本用法
// 无需传参
axios({
  url: '/home/multidata',
  method: 'get',
}).then((res) => {
  // console.log(res.data)
})
// 需要传参
axios({
  url: '/home/data',
  method: 'get',
  params: {
    type: 'pop',
    page: 1
  }
}).then((res) => {
  // console.log(res.data)
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
  url: '/home/data',
  params: {
    type: 'pop',
    page: 1
  }
}).then((res) => {
  // console.log(res.data)
})

