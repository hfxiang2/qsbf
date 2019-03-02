<template>
    <div class="changemobile">
        <div class="title">修改号码</div>
        <br/>
        <van-cell-group>
            <van-field
                    v-model="phone"
                    label="手机号"
                    left-icon="envelop-o"
                    placeholder="请输入手机号"
                    clearable
            />
            <van-field
                    v-model="sms"
                    center
                    clearable
                    left-icon="envelop-o"
                    label="短信验证码"
                    placeholder="请输入短信验证码"
            >
                <van-button slot="button" size="small" type="warning" :disabled="isabled"  @click="smst()">{{sendtext}}</van-button>
            </van-field>
        </van-cell-group>
        <br/><br/>
        <van-button type="warning" size="large" @click="change()">保存修改</van-button>
    </div>
</template>

<script>
  export default {
    name: 'changemobile',
    data(){
      return{
        sms:'',
        sendtext:'获取验证码',
        isabled:false,
        phone:this.$store.state.phone
      }
    },
    methods:{
      smst(){
        this.$toast.success('发送成功')
        this.sendtext='重新发送(60)'
        this.timeOutFunc(60)
        setTimeout(()=>{
          this.$notify('验证码：123622');
        },3000)
      },
      timeOutFunc(obj) {
        this.isabled = true
        if (obj !== 0) {
          setTimeout(() => {
            obj--
            this.sendtext = '重新发送(' + obj + ')'
            this.timeOutFunc(obj)
          }, 1000)
        } else {
          this.isabled = false
          this.sendtext = '获取验证码'
        }
      },
      change(){
        this.$dialog.confirm({
          title: '提示',
          message: '是否确认修改号码'
        }).then(() => {
          // on confirm
          this.$toast.success('修改成功')
          this.$router.replace('/profile')
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>
    .title{
        text-align: center;
        margin-top: 1rem;
        font-size: 0.5rem;
    }
</style>