<template>
  <div class="hello">
    <h1>VueX</h1>
    <h3 class="title">父子组件传值：父->子</h3>
    <h3>{{ msg }}</h3>
    <h3 class="title">vuex-getter获取数据this.$store.getter.方法名</h3>
    <h3>{{this.$store.state.say+this.$store.getters.NAME}}</h3>
    <h3 class="title">计数器-mutayion-同步刷新this.$store.commit('方法名')</h3>
    <button @click.prevent="add">+</button>{{" "+this.$store.state.count+" "}}<button @click.prevent="del">-</button>&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click.prevent="reset">reset</button>
    <h3 class="title">action-异步刷新this.$store.dispatch('方法名')</h3>
    <button @click.prevent="changes">action1</button>&nbsp;&nbsp;&nbsp;&nbsp; <button @click.prevent="change">action2</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    add(){
      this.$store.commit('ADD')
    },
    del(){
      this.$store.commit('DEL')
    },
    change(){
      this.$store.dispatch('SUBMIT')
    },
    changes(){
      this.$store.dispatch('SUBMITS')
    },
    reset(){
      this.$store.commit('RESET')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title{
    color: blueviolet;
  }
</style>
