<template>
    <div class="profile">
<div class="title">个人信息</div>
        <br>
        <van-cell-group>
            <van-cell-group>
                <van-field
                        v-model="username"
                        clearable
                        label="用户名"
                        left-icon="contact"
                        right-icon="question-o"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('修改用户名称')"
                />

                <van-field
                        v-model="password"
                        left-icon="closed-eye"
                        type="password"
                        label="密码"
                        clearable
                        placeholder="请输入密码"
                />

                <van-field
                        v-model="phone"
                        label="手机号"
                        left-icon="phone-o"
                        placeholder="请输入手机号"
                        disabled
                        center
                >
                    <van-button slot="button" size="small" type="warning" @click="changemobile()">修改手机号</van-button>
                </van-field>
                <van-field
                        v-model="email"
                        label="邮箱"
                        clearable
                        left-icon="envelop-o"
                        placeholder="请输入邮箱"
                />

            </van-cell-group>
        </van-cell-group>
        <van-popup v-model="show" position="bottom">
            <van-picker
                    show-toolbar
                    title="性别"
                    :columns="columns"
                    @cancel="onCancel"
                    @confirm="onConfirm"
            />
        </van-popup>
        <van-popup v-model="showsr" position="bottom">
            <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="onCancels"
                    @confirm="onConfirms"
            />
        </van-popup>
        <van-cell :value="sex" icon="friends-o" is-link @click="change()">
            <template slot="title">
                <div class="van-field__label">
                    <span >性别</span>
                </div>
            </template>
        </van-cell>
        <van-cell :value="birthday" icon="clock-o" is-link @click="changes()">
            <template slot="title">
                <div class="van-field__label">
                    <span >生日</span>
                </div>
            </template>
        </van-cell>
        <br/><br/>

        <van-button type="warning" size="large" @click="save()">保存信息</van-button>
    </div>
</template>

<script>
  export default {
    name: 'profile',
    data(){
      return{
        minDate:new Date('1900-01-01'),
        maxDate:new Date(),
        currentDate:new Date(this.$store.state.birthday),
        username:this.$store.state.username,
        password:this.$store.state.password,
        phone:this.$store.state.phone,
        email:this.$store.state.email,
        birthday:this.$store.state.birthday,
        sex:this.$store.state.sex,
        columns: ['男', '女'],
        show:false,
        showsr:false
      }
    },
    methods:{
      changemobile () {
        this.$router.push({ name: 'changemobile', params: { phone: this.phone } })
      },
      onConfirm(value) {
        this.sex=value
        this.show=!this.show
      },
      onCancel() {
        this.show=!this.show
      },
      onConfirms(v) {
        this.showsr=!this.showsr
        var endvalue = new Date(v)
        let Y = endvalue.getFullYear() + '-'
        let M = (endvalue.getMonth()+1 < 10 ? '0'+(endvalue.getMonth()+1) : endvalue.getMonth()+1) + '-'
        let D = (endvalue.getDate() < 10 ? '0'+(endvalue.getDate()) : endvalue.getDate())
        this.birthday=Y+M+D
      },
      onCancels() {
        this.$toast('取消');
        this.showsr=!this.showsr
      },
      change(){
        this.show=!this.show
      },
      changes(){
        this.showsr=!this.showsr
      },
      save(){
        this.$dialog.confirm({
          title: '提示',
          message: '是否确认修改信息'
        }).then(() => {
          // on confirm
          this.$store.state.username=this.username
          this.$store.state.password=this.password
          this.$store.state.phone=this.phone
          this.$store.state.email=this.email
          this.$store.state.birthday=this.birthday
          this.$store.state.sex=this.sex
          this.$toast.success('修改成功')
          this.$router.push('/mains')
        }).catch(() => {
          // on cancel
        });
      }
    },
    beforeRouteLeave (to, from , next) {
      if(this.$store.state.username!=this.username||
        this.$store.state.password!=this.password||
        this.$store.state.phone!=this.phone||
         this.$store.state.email!=this.email||
        this.$store.state.birthday!=this.birthday||
        this.$store.state.sex!=this.sex){
       this.$dialog.confirm({
        title: '提示',
        message: '当前修改未保存，是否离开当前页面？'
      }).then(() => {
        next()
      }).catch(() => {
        // on cancel
        next(false)
      });}else{
        next()
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