<template>
  <div class="footer">
    <!--底部tabbar-->
    <div class="tabbar_xc"></div>
    <div class="tabbar">
      <div class="mywork_item2" v-for="(item,index) in tabbardata" :key="item.index"  :class = "isactive == index ? 'addclass' : '' " @click='onclick(index)'>
        <router-link :to="item.to">
            <!--<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png"/>-->
        <img class="mywork_item_img2" :src="item.src">
        <br>
        <span>{{item.text}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'footers',
    data () {
      return {
        isactive:3,
        tabbardata:[
          {
            to:'/home',
            src:'https://b.yzcdn.cn/vant/icon-demo-1126.png',
            text:'首页'
          },
          {
            to:'/product',
            src:'https://b.yzcdn.cn/vant/icon-demo-1126.png',
            text:'分类'
          },
          {
            to:'/about',
            src:'https://b.yzcdn.cn/vant/icon-demo-1126.png',
            text:'论坛'
          },
          {
            to:'/',
            src:'https://b.yzcdn.cn/vant/icon-demo-1126.png',
            text:'我的'
          },

        ],
      }
    },
    methods:{
      onclick(index){
        this.isactive=index
      }
    }
  }
  </script>
<style lang="scss">
  body{
    margin: 0;
    a{
      text-decoration: none;
      color: black;
    }
  }

  .tabbar{
    height: 60px;
    background-color: #E4E4E4;
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
    text-align: center;
    font-size: 16px;
    z-index:999;
  }
  .tabbar_xc{
    position: fixed;
    bottom:0;
    left:0;
    height: 60px;
    width: 100%;
  }
  .mywork_item2{
    float: left;
    margin: 2% 2%;
    font-size: 12px;
    width: 21%;
  }
  .mywork_item_img2{
    height: 40%;
    width: 40%;
    border-radius: 50%;
  }
  .addclass{
    a{
      color :  #dab191;
    }
  }
</style>
