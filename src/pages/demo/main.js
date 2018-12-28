import Vue from 'vue'
import Demo from './Demo'

const app = new Vue(Demo)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '评论列表',
    enablePullDownRefresh: true
  }
}
