<template>
  <div id="app">
    <!-- 
    加选中class
    默认情况会渲染成a标签，tag=可指定渲染的标签
    <router-link to="/Home" tag="button" replace active-class='act'>首页</router-link>
    <router-link to="/About" tag="button" replace active-class='act'>关于</router-link>

    在路由js中改变选中class
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link>

    <button @click="homeClick">主页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: 'roc'
    }
  },
  methods: {
    homeClick(){
      // 在浏览器中 push可返回，replace不可返回
      // this.$router.push('/home');
      this.$router.replace('/home');
    },
    aboutClick(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    userClick(){
      this.$router.replace('/user')
    }
  },
}
</script>

<style>
.router-link-active,.act{
  color: #f00;
}
</style>
