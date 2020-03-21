<template>
  <div>
    <h2>我是Home</h2>
    <router-link to='/home/news'>新闻</router-link>
    <router-link to='/home/messages'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data(){
    return {
      path: '/home/news'
    }
  },
  created(){
    console.log('Home创建')
  },
  activated(){
    console.log('home激活了')
    console.log(this.path)
    this.$router.push(this.path)
  },
  deactivated(){
    console.log('home停用了')
  },
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path
    // console.log(this.$route.path)
    console.log('home离开之前')
    console.log(this.$route.path)
    next()
  }
}
</script>

<style>

</style>
