<template>
  <div class="home">
    <heads title="首页" bgc="white" fontSize="16px" @sendmsg="showChildMsg"></heads>
    <h3 style="margin-top: 48px"> hello,{{msg}}</h3>
    <img alt="Vue logo" src="../assets/logo.png">   
    <HelloWorld msg="This is new begin!每天搞一点！" style="margin-bottom: 60px"/>
    <footers></footers>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import heads from '@/components/heads.vue'
import footers from '@/components/footer.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    heads,
    footers
  },
  data(){
    return{
      msg:'xiaoming',
      // scroll:true
    }
  },
  mounted(){
    // window.addEventListener('scroll',this.scrollHandle)
  },
  methods:{
    // scrollHandle(){
    //   let scrollTop= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   if(scrollTop>=60){
    //     this.scroll=!this.scroll
    //   }else{
    //     this.scroll=true
    //   }
    //   console.log(scrollTop)
    // },
    showChildMsg(inputValue){
      this.msg=inputValue
    }
  }
}
</script>
