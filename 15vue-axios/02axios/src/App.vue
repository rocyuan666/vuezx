<template>
  <div id="app">
    {{data}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      data: null
    }
  },
  created(){
    axios({
      url:'http://123.207.32.32:8000/api/wh/home/data',
      params: {
        type: 'pop',
        page: 1
      }
    }).then((res) => {
      console.log(res)
      this.data = res
    })
  }
}
</script>

<style>

</style>
