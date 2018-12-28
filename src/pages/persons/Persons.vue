<template>
  <div id="persons">
    <div class="userinfo">
      <p>{{userinfo.opid}}</p>
      <img class="avatarUrl" :src="userinfo.avatarUrl" alt="" >
      <p>{{userinfo.nickNames}}</p>
    </div>
    <yearalosday></yearalosday>
    <button v-if="userinfo.openId" class="btn" @click="scanBook" >添加图书</button>
    <div id="persons-login">
      <button class="login" open-type="getUserInfo" v-if="!userinfo.openId" lang="zh_CN" @getuserinfo="doLogin" >登录</button>
    </div>
  </div>

</template>

<script>
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config.js'
  import { post, showModal } from '@/util.js'
import yearalosday from '@/components/yearalsoday'
  export default {
    data () {
      return {
        userinfo: {
          avatarUrl: '../../static/img/study.jpg',
          nickName: '点击登录',
          openId: ''
        }
      }
    },
    components: {
      yearalosday
    },
    methods: {
      async addBook (isbn) {
        const res = await post('/weapp/addbook', {
          isbn,
          openid: this.userinfo.openId
        })
        showModal('添加成功', `${res.title}添加成功`)
      },
      scanBook () {
        wx.scanCode({
          success: (res) => {
            if (res.result) {
              this.addBook(res.result)
              // console.log(res)
            }
          }
        })
      },
      doLogin: function () {
        let self = this
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            wx.setStorageSync('userinfo', userinfo)
            self.userinfo = userinfo
            console.log(self.userinfo)
          },
          // success: function (userinfo) {
          //   qcloud.request({
          //     url: config.userUrl,
          //     login: true,
          //     success (userRes) {
          //       showSuccess('登录成功')
          //       wx.setStorageSync('userinfo', userRes.data.data)
          //       self.userinfo = userRes.data.data
          //     }
          //   })
          // },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
    }
  }
</script>

<style>
#persons{
  padding:0 30px;
}

  .userinfo{
    margin-top:50px;
    text-align:center;
  }
  .avatarUrl{
    height: 100px;
    width: 100px;
    margin: 20px;
    border-radius: 50%;
  }
.login{
  width: 300px;
  height: 50px;
}
  .btn{
    width: 300px;
    height: 50px;
  }

</style>
