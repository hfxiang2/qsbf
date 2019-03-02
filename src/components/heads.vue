<template>
    <div class="head" :style="{backgroundColor:bgc,fontSize:fontSize}">
        <div class="heads_left">left</div>
        <div class="heads_right">right</div>
        <!--<div class="heads">{{title}}</div>-->
        <input class="input" type="text" v-model="inputValue" @keypress.enter="enter" placeholder="搜索...">
    </div>
</template>

<script>
  export default {
    name: 'heads',
    props:['title','bgc','fontSize'],
    data() {
    return{
      inputValue:''
    }
    },
    methods:{
      enter(){
        this.$emit("sendmsg",this.inputValue)
      }
    }
  }
</script>

<style scoped>
    .head{
        height: 48px;
        width: 100vw;
        background-color: #fff;
        border-bottom: 1px solid #E4E4E4;
        position: fixed;
        top:0;
        left:0;
        z-index: 999;
        opacity: 0.8;
    }
.heads{
    /*color: aquamarine;*/
    text-align: center;
}
    .heads_left{
        float: left;
        margin-top: 16px;
        margin-left: 2%;
    }
    .heads_right{
        float: right;
        margin-top: 16px;
        margin-right: 2%;
    }
    .input{
        font-size: 16px;
        border: 1px solid #E4E4E4;
        border-radius: 8px;
        margin-top: 14px;
    }
</style>