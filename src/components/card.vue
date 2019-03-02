<template>
    <div id="top">
        <!-- <div id="hname">{{targetorg}}</div> -->
        <div id="vipCard">
            <div id="headPhoto">
                <img id="photo"
                     v-if="thumbHeadPic"
                     v-bind:src="thumbHeadPic">
                <img id="photo"
                     v-else-if="headPic"
                     v-bind:src="headPic">
                <img id="photo"
                     v-else
                     src="../assets/logo.png">
                <!-- <input  type="file" name="myphoto" style="display:none; z-index:100;"/> -->
            </div>
            <div id="username">
                <span>{{username}}</span>
            </div>
            <div class="triangle_border_right"></div>
            <div id="vipGrade"
                 v-if="!levelName">
                &nbsp;&nbsp;&nbsp;普通会员
            </div>
            <div id="vipGrade"
                 v-if="levelName">
                &nbsp;&nbsp;&nbsp;{{levelName}}
            </div>
            <div id="vipjf">
                <div id="jffont">
                            {{integral}}
                </div><br>
                <!-- <span id="jffont" >{{integral}}</span><br> -->
                <span class="text-muted">我的积分</span>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
  export default {
    name: 'card',
    props:['thumbHeadPic','headPic','username','integral','levelName'],
    data() {
      return {
        targetorg: ''
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>
<style>
    #top {
        height: 200px;
        /* background: #f2f7f6; */
    }

    #vipCard {
        height: 100%;
        max-width: 568px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: -webkit-linear-gradient(-158deg, #d9ba8f, #e9dad0);
        /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(-158deg, #d9ba8f, #e9dad0);
        /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(-158deg, #d9ba8f, #e9dad0);
        /* Firefox 3.6 - 15 */
        background: linear-gradient(-90deg, #d9ba8f, #e9dad0);
        /* 标准的语法（必须放在最后） */
        position: relative;
        margin: auto;
    }

    #photo {
        width: 66px;
        height: 66px;
        background-size: 100%;
        border-radius: 50%;
    }

    #headPhoto {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        margin-top: 30px;
        margin-left: 22px;
        background: #ffffff;
        border: 2px solid #f5f5f5;
    }

    #vipjf {
        position: absolute;
        margin-top: 129px;
        margin-left: 22px;
        line-height: 18px;
    }

    #jffont {
        font-size: 40px;
        color: #191816;
    }

    #username {
        font-size: 14px;
        position: absolute;
        margin-left: 110px;
        margin-top: 52px;
    }
    #vipGrade {
        width: 66px;
        height: 20px;
        background: #343325;
        position: absolute;
        margin-top: 52px;
        margin-left: 80.5%;
        color: #ddbd97;
        padding-top: 1px;
        padding-bottom: 1px;
        font-size: 12px;
    }

    .triangle_border_right {
        border-width: 10px 0 10px 6px;
        border-style: solid;
        border-color: transparent transparent transparent #d9ba8f;
        /*透明 透明 透明 灰*/
        position: absolute;
        margin-top: 52px;
        margin-left: 80.33%;
        z-index: 10;
    }

    .hicon {
        width: 28px;
        height: 28px;
        border: 0px solid #d3c19c;
    }
    .text-muted {
        font-size: 12px;
    }
    @media screen and (max-height: 568px) {
        .triangle_border_right {
            margin-left: 76.83%;
        }
        #vipGrade {
            margin-left: 77%;
        }
    }
</style>
