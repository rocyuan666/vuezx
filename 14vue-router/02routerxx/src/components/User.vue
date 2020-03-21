<template>
  <div>
    <h2>我是User</h2>
    <h3>{{$route.params.userId}}</h3>
  </div>
</template>

<script>

export default {
  name: 'User',
  // created(){
  //   document.title = '用户'
  // },
  components: {
    
  }
}
</script>

<style>

</style>
