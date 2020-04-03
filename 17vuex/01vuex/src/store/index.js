import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  // 多个页面需要共享的状态(state)
  //不建议使用$store.state.num++ 直接操作，devtools工具无法检测追踪(状态已经更改，而我们无法知道哪里改了)，需要通过mutations,actions 操作
  state: {
    num: 2,
    stus:[
      {id: 110, name: 'roc', age: 18},
      {id: 111, name: 'zhangsan', age: 20},
      {id: 112, name: 'lisi', age: 30},
      {id: 113, name: 'wangmazi', age: 40}
    ]
  },
  //有同步操作
  mutations: {
    storeAdd(state){
      state.num++
    },
    storeSub(state){
      state.num--
    }
  },
  //有异步操作
  actions: {

  },
  //希望组件使用时候，将state中数据（状态）经过一些变化（计算）后  <和计算属性类似>，在modules中可以有第三个参数：rootStates（根state数据）
  getters: {
    // 基本使用（每次返回num的平方进行使用）
    getNum2(state){
      return state.num * state.num
    },
    //获取年龄大于18的object
    getage18(state){
      return state.stus.filter(function(item){
        return item.age > 18
      })
    },
    //获取年龄大于18的object个数
    getage18Length(state,getters){
      return getters.getage18.length
    },
    //获取年龄大于所传参的object
    // getters中 不支持传参
    getagen(state){
      return function(age){
        return state.stus.filter(function(item){
          return item.age > age;
        })
      }
    }
  },
  modules: {

  }
})

export default store