<template>
    <div id="book">
      <card :key="book.id" v-for="book in books" :book="book"></card>
      <p class="text-foorter" v-if="!more">没有更多数据</p>
    </div>
</template>

<script>
  import card from '@/components/card'
  import {get} from '@/util'
export default {
    data () {
      return {
        books: [],
        page: 0,
        more: true
      }
    },
    methods: {
      async getList (init) { // init判断是否初始化
        if (init) {
          this.page = 0
          this.more = true
        }
        wx.showNavigationBarLoading()// 下拉操作
        const books = await get('/weapp/booklist', {page: this.page})
        if (books.list.length < 10 && this.page > 0) {
          console(this.books)
          this.more = false
        }
        if (init) {
          this.books = books.list
          wx.stopPullDownRefresh()// 下拉操作
        } else {
        // 下拉刷新，不是直接覆盖books，而是累加
          this.books = this.books.concat(books.list)
        }
        // wx.hideNavigationBarLoading()// 下拉操作
      },
      async getTop () {
        const tops = await get('/weapp/top')
        this.tops = tops.list
      }
    },
    mounted () {
      this.getList(true)
      this.getTop()
    },

    onPullDownRefresh () { // 下拉
      this.getList(true)
      this.getTop()
    },
    onReachBottom () {
      if (!this.more) {
      // 没有更多了
        return false
      }
      this.page = this.page + 1
      this.getList()
    },
    components: {card}
}
</script>

<style scoped>
  .text-foorter{
    font-size: 18px;
  }
</style>
