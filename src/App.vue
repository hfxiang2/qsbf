<template>
  <div id="app">
    <!--<div class="navbar">-->
      <!--<div class="navbar_title">个人中心</div>-->
    <!--</div>-->
    <!--<div id="nav">-->
      <!--<router-link to="/home">Home</router-link> |-->
      <!--<router-link to="/">main</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <!--底部tabbar-->
   
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'mains'
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
#nav {
  height: 30px;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
