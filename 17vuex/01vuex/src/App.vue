<template>
  <div id="app">
    <h2>------------app---------------</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>{{$store.state.num}}</h2>
    <!-- 将num平方计算出来返回 -->
    <h2>{{$store.getters.getNum2}}</h2>
    <h2>{{$store.getters.getage18}}</h2>
    <h2>{{$store.getters.getage18Length}}</h2>
    <h2>{{$store.getters.getagen(20)}}</h2>

    <h2>------------helloVuex---------------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return {
      message: '我是app组件'
    }
  },
  methods: {
    add(){
      this.$store.commit('storeAdd')
    },
    sub(){
      this.$store.commit('storeSub')
    }
  }
}
</script>

<style>

</style>
