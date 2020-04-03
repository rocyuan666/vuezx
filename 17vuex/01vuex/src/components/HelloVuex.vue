<template>
  <div>
    <h2>{{$store.state.num}}</h2>
    <h2>{{$store.getters.getNum2}}</h2>
    <h2>{{$store.getters.getage18}}</h2>
    <h2>{{$store.getters.getage18Length}}</h2>
    <h2>{{$store.getters.getagen(30)}}</h2>
  </div>
</template>

<script>

export default {
  name: 'HelloVuex'
}
</script>

<style scoped>

</style>