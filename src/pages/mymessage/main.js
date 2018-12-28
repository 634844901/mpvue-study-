import Vue from 'vue'
import mymessage from './mymessage'

const app = new Vue(mymessage)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '评论列表',
    enablePullDownRefresh: true
  }
}
