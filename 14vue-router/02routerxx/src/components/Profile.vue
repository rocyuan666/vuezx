<template>
  <div>
    <h2>我是Profile</h2>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
    <h3>{{$route.query.height}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  // created(){
  //   document.title = '档案'
  // },
  components: {

  }
}
</script>

<style>

</style>