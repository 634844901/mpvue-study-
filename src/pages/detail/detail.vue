<template>
  <div id="detail">
    <bookinfo :info="info"></bookinfo>
    <commentlist :comments="comments" ></commentlist>
    <div class="myComments" v-if="showAdd">
      <div class="comment">
      <textarea v-model="comment"  class="textarea" :maxlength="100" placeholder="请输入图书短评">
      </textarea>
      </div>
      <div class="location">
        地理位置
        <switch @change="getGeo" :checked="location">
          <span class="c">{{location}}</span>
        </switch>
      </div>
      <div class="model" >
        手机型号
        <switch @change="getPhone" :checked="model">
          <span class="text-primary">{{model}}</span>
        </switch>
      </div>
      <button class="btn" @click="addComment">评论</button>
    </div>
    <div v-else class="text-foorter">
      未登录或者已评论(只允许评论一次)
    </div>
    <!--<button open-type="share"  class="btn">转发</button>-->
  </div>
</template>

<script>
  import {get, post, showModal} from '@/util'
  import bookinfo from '@/components/bookinfo'
  import commentlist from '@/components/commentlist'
export default {
    data () {
      return {
        location: '',
        bookid: '',
        info: {},
        comment: '',
        model: '',
        userinfo: {},
        comments: []
      }
    },
    computed: {
      showAdd () {
        const comments = this.comments
        // 没登录
        if (!this.userinfo.openId) {
          return false
        }
        if (comments.filter(v => v.openid === this.userinfo.openId).length) {
        // 已经评论过了
          return false
        }
        return true
      }
    },
    methods: {
      async addComment () {
      // 评论内容 手机型号 地理位置 图书ID 用户的openid
        if (!this.comment) {
          return
        }
        const data = {
          openid: this.userinfo.openId,
          bookid: this.bookid,
          comment: this.comment,
          phone: this.model,
          location: this.location
        }
        try {
          await post('/weapp/addcomments', data)
          this.comment = ''
          this.getComments()
        } catch (e) {
          showModal('失败', e.msg)
        }
      },
      async getDetail () {
        const info = await get('/weapp/bookdeatil', {id: this.bookid})
        wx.setNavigationBarTitle({
          title: info.title
        })
        this.info = info
      },
      async getComments () {
        const comments = await get('/weapp/commentlist', {bookid: this.bookid})
        this.comments = comments.list
      },

      getGeo (e) {
      // 4CG634iUDKetlUM87p4j8VC0RIwk4BzG
        const ak = '4CG634iUDKetlUM87p4j8VC0RIwk4BzG'
        const url = 'http://api.map.baidu.com/geocoder/v2/'
        if (e.target.value) { // 是不是被选中，选中则并传递经纬度
          wx.getLocation({
            success: geo => {
              wx.request({url,
                data: {
                  ak,
                  location: `${geo.latitude},${geo.longitude}`,
                  output: 'json'
                },
                success: res => {
                  if (res.data.status === 0) {
                    console.log(res)
                    this.location = res.data.result.addressComponent.city
                  } else {
                    this.location = '123'
                    console.log(res)
                  }
                }
              })
            }
          })
        } else {
        // 没选中
          this.location = ''
        }
      },
      getPhone (e) {
        if (e.target.value) { // 是不是被选中
          const phones = wx.getSystemInfoSync()
          this.model = phones.model
        } else {
        // 没选中
          this.model = ''
        }
      }
    },
    mounted () {
      this.bookid = this.$root.$mp.query.id
      this.getDetail()
      this.getComments()
      const userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
      }
    },
    components: {
      bookinfo,
      commentlist
    }
}
</script>

<style>
.comment{
}
.textarea{
  background:#eee;
  padding: 10px;
  width: 100%;
  height: 100px;
  margin-top: 10px;
  margin-left: 1px;
  margin-right: 1px
}
  .location{
    margin-top: 10px;
    padding: 5px 10px;
    color:#000000;
  }
  .model{
    margin-top: 10px;
    padding: 5px 10px;
  }
  .btn{
    margin-top: 10px;
    margin-bottom: 10px;
    color: white;
    background: #EA5A49;
    margin-bottom: 10px;
    padding-left: 15px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
  }
  .text-foorter{
    margin-top: 15px;
    font-size: 12px;
    color: #EA5A49;
  }
</style>
