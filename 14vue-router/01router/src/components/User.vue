<template>
    <div>
        <h2>我是用户页</h2>
        <p>我是用户内容</p>
        <p>我是用户信息：{{userId}}</p>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId(){
            // 返回 路由用户ID
            return this.$route.params.userId
        }
    }
}
</script>

<style>
    
</style>