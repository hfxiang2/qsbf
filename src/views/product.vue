<template>
    <div class="product">
        <h1>This is an product page</h1>
        <h2>hello</h2>
        <div class="a">
            <div  class="b"></div>
        </div>
        <van-button type="primary" @click="show=!show">主要按钮</van-button>
        <!-- <van-popup v-model="show">内容</van-popup> -->
        <van-popup v-model="show" position="bottom" >
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :formatter="formatter"
            @confirm="nshow()"
            @cancel="ncancel()"
          />
        </van-popup>
    </div>
</template>
<script>
  // import card from '@/components/card.vue'
  export default {
    name: 'product',
    data() {
      return {
         show: false,
        minDate: new Date(1990,1,1),
        maxDate: new Date(2019, 10, 1),
        currentDate: new Date()
      }
    },
    methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }else if (type === 'day') {
        return `${value}日`
      }
      return value;
    },
      nshow(){
     this.$dialog.confirm({
       title: "时间",
          message: this.currentDate
     }).then(() => {
       // on confirm
       this.$toast.success(`成功了：${this.currentDate}`)
     }).catch(() => {
       // on cancel
       this.$toast('已取消')
     });
      },
      ncancel(){
        this.$toast('已取消')
      }
  }
    // components: {
    //   card
    // }
  }
</script>
<style lang="scss">
    @import '../style/mixin.sass';
    $font-color:#d7bf99;
    $radius:12px;
   .a{
       margin: auto;
       width: 200px;
       height: 200px;
       background-color: blueviolet;
       @include div_center;
       @include clear_float;
   }
    .b{
        width: 100px;
        height: 100px;
        background-color: $font-color;
        @include border-radius($radius);
    }
</style>