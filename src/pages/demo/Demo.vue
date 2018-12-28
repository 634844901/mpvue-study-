<template>
    <div class="commentbook" >
      <div class="mycomment" v-if="userinfo.openId">
        <commentlist type="user" :comments="comments"></commentlist>
        <p>我的图书：</p>
        <div>
          <card v-for="book in books" :key="book.id" :book="book"></card>
          <div v-if="!books.length">暂时还没添加书</div>
        </div>
      </div>
      <div v-else>
        <p>请登录</p>
      </div>
    </div>
</template>

<script>
  import {get} from '@/util'
  import commentlist from '@/components/commentlist'
  import card from '@/components/card'
export default {
    data () {
      return {
        comments: [],
        userinfo: {},
        books: []
      }
    },
    methods: {
      init () {
        wx.showNavigationBarLoading()
        this.getComments()
        this.getBooks()
        wx.hideNavigationBarLoading()
      },
      async getBooks () {
        const books = await get('/weapp/booklist', {
          openid: this.userinfo.openId
        })
        this.books = books.list
      },
      async getComments () {
        const comments = await get('/weapp/commentlist', {
          openid: this.userinfo.openId
        })
        this.comments = comments.list
      }
    },
    onPullDownRefresh () {
      this.init()
      wx.stopPullDownRefresh()
    },
    onShow () {
      if (!this.userinfo.openId) {
        let userinfo = wx.getStorageSync('userinfo')
        if (userinfo) {
          this.userinfo = userinfo
          this.init()
        }
      }
    },
    components: {
      commentlist,
      card
    }
}
</script>

<style scoped>

</style>
