<template>
    <div class="shopcar">
        <van-checkbox-group class="card-goods" v-model="checkedGoods">
            <van-checkbox
                    class="card-goods__item"
                    v-for="item in goods"
                    :key="item.id"
                    :name="item.id"
            >
                <van-card
                        :title="item.title"
                        :desc="item.desc"
                        :num="item.num"
                        :price="formatPrice(item.price)"
                        :thumb="item.thumb"
                />
            </van-checkbox>
        </van-checkbox-group>
        <van-submit-bar
                :price="totalPrice"
                :disabled="!checkedGoods.length"
                :button-text="submitBarText"
                @submit="onSubmit"
        />
    </div>
</template>

<script>
  export default {
    name: 'shopcar',
    data() {
      return {
        checkedGoods: ['1', '2', '3'],
        goods: [{
          id: '1',
          title: '进口女朋友',
          desc: '身高168cm,体重50kg',
          price: 200,
          num: 1,
          thumb: 'https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg'
        }, {
          id: '2',
          title: '陕西妹子',
          desc: '身高163cm,体重45kg',
          price: 690,
          num: 1,
          thumb: 'https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg'
        }, {
          id: '3',
          title: '美国妹子',
          desc: '身高175cm,体重52kg',
          price: 2680,
          num: 1,
          thumb: 'https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg'
        }]
      };
    },
    computed: {
      submitBarText() {
        const count = this.checkedGoods.length;
        return '结算' + (count ? `(${count})` : '');
      },
      totalPrice() {
        return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
      }
    },
    methods: {
      formatPrice(price) {
        return (price / 100).toFixed(2);
      },
      onSubmit() {
        this.$toast('点击结算');
      }
    }
  }
</script>

<style scoped>
.shopcar{
    padding: 10%;
}
</style>