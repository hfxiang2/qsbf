<template>
  <div class="about">
    <div id="nav">
      <card :username="this.$store.state.name"
            :levelName="this.$store.state.levelName"
            :integral="this.$store.state.integral"
            thumbHeadPic="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3528462443,3937467016&fm=173&app=25&f=JPEG?w=218&h=146&s=18843C729F735A1154F7CCC7020050B2"
      ></card>
      <!--<h2>嵌套路由，在组件内部使用  router-view 标签</h2>-->
      <!--<h3>在路由器对象中给组件定义子路由</h3>-->
      <router-link to="/about/remake">remake</router-link>
      <router-view/>
    </div>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import card from '@/components/card.vue'
  export default {
    name: 'product',
    components: {
      card
    }
  }
</script>