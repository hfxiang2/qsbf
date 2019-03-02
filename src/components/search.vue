<template>
    <div class="search">
        <van-search
                v-model="searchvalue"
                placeholder="请输入搜索关键词"
                show-action
                @search="onSearch"
                @cancel="onCancel"
        >
            <!--<div slot="action" @click="onSearch">搜索</div>-->
        </van-search>
        <br/>
        <div class="textcenter">
        <van-tag type="danger" v-show="searchhistory.length!=0">历史记录</van-tag>
        <van-cell v-for="item in searchhistory" :key="item.index" :title="item.name">
            <van-icon slot="right-icon" name="cross" class="van-icon" @click="close(item.name)"/>
        </van-cell>
        </div>
        <div class="textcenter">
        <van-tag type="danger" v-show="searchvalue===''" >热门推荐</van-tag>
        </div>
        <van-list
                v-show="searchvalue===''"
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >

            <van-cell
                v-for="item in list"
                :key="item"
        >
                <router-link to="/goods">
                <van-card
                        num="1"
                        tag="热卖"
                        price="4.00"
                        desc="时尚女衣，范冰冰同款"
                        title="时尚女衣"
                        :thumb="imageURL"
                        origin-price="10.00"
                >
                    <div slot="footer">
                        <van-button size="mini">收藏</van-button>
                        <van-button size="mini">购买</van-button>
                    </div>
                </van-card>
                </router-link>
        </van-cell>

        </van-list>
    </div>
</template>

<script>
  export default {
    name: 'search',
    data(){
      return{
        searchvalue:'',
        searchhistory:this.$store.state.searchhistory,
        list: [],
        loading: false,
        finished: false,
        imageURL:this.$store.state.books.imageURL
      }
    },
    methods:{
      onSearch(){
        this.$toast(this.searchvalue)
        let res=this.searchhistory.some(item=>{
          if(item.name===this.searchvalue){
            return true
          }
        })
        if(res){
          return res
        }else{
          this.searchhistory.push({name:this.searchvalue})
        }

      },
      onCancel(){
        this.$router.go(-1)
      },
      close(name){
        var index = this.searchhistory.findIndex(
          (item) => {
            if (item.name === name) {
              return true
            }
          }
        )
        // alert(index)
        this.searchhistory.splice(index, 1)
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 5; i++) {
            this.list.push(this.list.length + 1);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 20) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>
.textcenter{
    text-align: center;
}
</style>