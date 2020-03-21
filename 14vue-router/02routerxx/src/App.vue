<template>
  <div id="app">
    <router-link to="/home" replace>Home</router-link>
    <router-link to="/about" replace>About</router-link>
    <!-- <router-link :to="'/user/'+ userId" replace>User</router-link> -->
    <button @click="userClick">User</button>
    <!-- <router-link :to="{path: '/profile', query: {name: 'Rocyuan', age: '18', height:'1.88'}}" replace>Profile</router-link> -->
    <button @click="profileClick">Profile</button>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'roc',
          age: 18,
          height: 1.88
        }
      })
    },
    userClick(){
      this.$router.push('/user/'+this.userId)
    }
  },
  components: {
    
  }
}
</script>

<style>
  .active{
    color:#f00;
  }
</style>
