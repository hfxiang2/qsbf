<template>
    <div class="mains">
        <!--{{msg}}-->

        <!--card部分-->
        <div class="card">
            <div class="headPhoto">
                <van-uploader :after-read="onRead">
                    <img class="photo"
                         :src="headPhoto">
                </van-uploader>

                <br>
                <br>
               <span>{{username}}</span>
                <!-- <input  type="file" name="myphoto" style="display:none; z-index:100;"/> -->
            </div>
            <span class="rightTop"><router-link to="/profile">完善资料<van-icon name="arrow" class="martop"/></router-link></span>
            <span class="leftTop white"><router-link to="/search"><van-icon name="search" /></router-link></span>
        </div>
        <!--浮条-->
        <div class="float">
            <div class="float_item">
                <span>{{integral}}</span><br>
                <span class="float_item_font">剩余积分</span>
            </div>
            <div class="float_item">
                <span>{{levelName}}</span><br>
                <span class="float_item_font">会员等级</span>
            </div>
            <div class="float_item">
                <span>{{integral}}</span><br>
                <span class="float_item_font">剩余积分</span>
            </div>
            <div class="clear"></div>
            <div class="float_item">
                <span>{{integral}}</span><br>
                <span class="float_item_font">剩余积分</span>
            </div>
            <div class="float_item">
                <span>{{integral}}</span><br>
                <span class="float_item_font">剩余积分</span>
            </div>
            <div class="float_item">
                <span>{{integral}}</span><br>
                <span class="float_item_font">剩余积分</span>
            </div>

        </div>
        <div class="clear"></div>
        <br>
        <van-notice-bar mode="closeable">
            闭包就是能够读取其他函数内部变量的函数,它的作用一个是可以读取函数内部的变量,另一个就是让这些变量的值始终保持在内存中
        </van-notice-bar>

        <van-row  justify="space-between">
            <van-col span="6">
                <router-link to="/shopcar">
                <van-icon name="pending-payment" class="iconsize"/>
                <br>
               待付款
                </router-link>
            </van-col>

            <van-col span="6">
                <router-link to="/shopcar">
                <van-icon name="records" class="iconsize"/>
                <br>
                待接单
                </router-link>
            </van-col>
            <van-col span="6">
                <router-link to="/shopcar">
                <van-icon name="tosend" class="iconsize"/>
                <br>
                待发货
                </router-link>
            </van-col>
            <van-col span="6">
                <router-link to="/shopcar">
                <van-icon name="logistics" class="iconsize"/>
                <br>
                已发货
                </router-link>
            </van-col>
        </van-row>
        <div class="textleft">
        <van-cell-group class="user-group">
            <van-cell icon="records" title="全部订单" is-link />
        </van-cell-group>

        <van-cell-group>
            <van-cell icon="points" title="我的积分" is-link />
            <van-cell icon="gold-coin-o" title="我的优惠券" value="2张可用" is-link to="/coupon"/>
            <van-cell icon="gift-o" title="我收到的礼物" is-link />
        </van-cell-group>
        </div>
        <footers></footers>

    </div>
</template>

<script>
import footers from '@/components/footer.vue'
  export default {
    name: 'mains',
    components:{
        footers
    },

    data(){
      return{
        msg:'第一个页面',
        headPhoto:this.$store.state.headPhoto,
        username:this.$store.state.username,
        integral:this.$store.state.integral,
        phone:this.$store.state.phone,
        email:this.$store.state.email,
        birthday:this.$store.state.birthday,
        sex:this.$store.state.sex,
        levelName:this.$store.state.levelName
      }
    },
    methods:{
      onRead(file) {
        return file
      }
    }
  }
</script>

<style scoped lang="scss">
.mains{
    font-size: 14px;
    color: rgba(9, 6, 16, 0.99);
    margin-bottom: 60px;
    text-align: center;
}
.white{
    color: white;
}
.card{
    width: 100%;
    height: 200px;
    background: -webkit-linear-gradient(-158deg, #ed6a0c, #EDC468);
    font-size: 14px;
    position:relative;
}
.photo {
    width: 100%;
    height: 100%;
    background-size: 100%;
    border-radius: 50%;

}
.textleft{
    text-align: left;
}
.headPhoto {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    margin: 6% auto;
    left:0;
    right:0;
    background: #ffffff;
    border: 2px solid #f5f5f5;
    color:#fff;
    font-weight: 400;
}
.leftTop{
    float: left;
    margin-top: 2%;
    margin-left: 4%;
    font-size: 0.6rem;
}
    .rightTop{
        float: right;
        margin-top: 2%;
        margin-right: 4%;
        font-size: 12px;
        a{
        color:#071129;
        }
    }
    .martop{
        vertical-align: middle;
    }
.martop1{
    vertical-align: top;
}
    .float{
        width: 92%;
        height: 100px;
        position:relative;  
        margin: auto;
        border: 1px solid #eeeeee;
        background-color: white;
        border-radius: 4px;
        z-index: 999;
        margin-top: -50px;
        box-shadow: 0 3px 4px #797979;
        color: #ed6a0c;
    }
    .float_item{
        float: left;
        margin:3% 7%;
        font-size: 12px;
        width: 19%;
    }
    .float_item_font{
        color: #000;
    }
    .clear{
        clear: both;
    }
    .mywork{
        width: 100%;
        margin-top: 2%;
        color: black;
    }
    .mywork_left{
        float: left;
        margin-top: 2%;
        margin-left: 3%;
    }
    .mywork_item_img{
        height: 50%;
        width: 50%;
        border-radius: 50%;
    }
    .mywork_item{
        float: left;
        margin: 1% 2%;
        font-size: 12px;
        width: 16%;
    }
    .another{
        margin-top: 8%;
    }
    .mywork_item1{
        float: left;
        margin: 1% 2%;
        font-size: 12px;
        width: 21%;
    }
    .iconsize{
       font-size:  0.8rem;
    }
</style>