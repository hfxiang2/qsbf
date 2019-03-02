<template>
    <div class="goods">
        <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(image, index) in goods.images" :key="index">
                <img class="imgs" :src="image" @click="showDetail()"/>
            </van-swipe-item>
        </van-swipe>
        <van-panel :title=goods.goodsName :desc=goods.description :status=goods.price>
            <div>
                <van-cell-group>
                    <van-cell :value=goods.num >
                        <template slot="title">
                            <span class="custom-text">剩余数量</span>
                            <van-tag type="danger">{{goods.tag}}</van-tag>
                        </template>
                    </van-cell>
                    <van-cell title="运费:" :value=goods.yunfei />
                </van-cell-group>
            </div>
        </van-panel>
        <van-cell value="查看更多商品" icon="shop-o" is-link>
            <template slot="title">
                <span class="custom-text">进入店铺</span>
                <van-tag type="danger">推荐</van-tag>
            </template>
        </van-cell>
        <van-cell title="线下门店" icon="location-o" is-link />
        <van-goods-action>
            <van-goods-action-mini-btn
                    icon="chat-o"
                    text="客服"
            />
            <van-goods-action-mini-btn
                    info="5"
                    icon="cart-o"
                    text="购物车"
            />
            <van-goods-action-mini-btn
                    icon="shop-o"
                    text="店铺"
            />
            <van-goods-action-big-btn text="加入购物车" />
            <van-goods-action-big-btn
                    primary
                    text="立即购买"
                    @click="showCustomAction=!showCustomAction"
            />
        </van-goods-action>
        <van-sku
                v-model="showCustomAction"
                stepper-title="我要买"
                :sku="sku"
                :goods="goods"
                :goods-id="goods.goodsId"
                :hide-stock="sku.hide_stock"
                :quota="quota"
                :quota-used="quotaUsed"
                show-add-cart-btn
                reset-stepper-on-hide
                :initial-sku="initialSku"
                @buy-clicked="onBuyClicked"
                @add-cart="onAddCartClicked"
        >
        </van-sku>
        <!-- 自定义 sku actions -->
        <template slot="sku-actions" slot-scope="props">
            <div class="van-sku-actions">
                <van-button bottom-action @click="onPointClicked">积分兑换</van-button>
                <!-- 直接触发 sku 内部事件，通过内部事件执行 onBuyClicked 回调 -->
                <van-button type="primary" bottom-action @click="props.skuEventBus.$emit('sku:buy')">买买买</van-button>
            </div>
        </template>
    </div>
</template>

<script>
  import { ImagePreview } from 'vant';
  export default {
    name: 'goods',
    data(){
      return{
        showCustomAction:false,
        goods:this.$store.state.books,
        index:'',
        quota:0,
        quotaUsed:0,
        initialSku:this.$store.state.initialSku,
        sku:this.$store.state.sku,
        skuData: this.$store.state.skuData
      }
    },
    methods:{
      onChange(index) {
        // this.$toast('当前 Swipe 索引：' + index);
        this.index=index
      },
      showDetail(){
        ImagePreview({
          images: this.goods.images,
          startPosition: this.index,
          onClose() {
            // do something
          }
        });
      },
      onBuyClicked(){
        this.$toast.success('买买买')
      },
      onAddCartClicked(){
        this.$toast.success('已加入购物车')
      },

    onPointClicked(){
      this.$toast('积分购买')
  }
    }
  }
</script>

<style scoped>
.imgs{
    width: 100%;
    height: 6rem;
}
</style>