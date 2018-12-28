import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/mymessage/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#9999FF',
      navigationBarTitleText: '我的小程序',
      navigationBarTextStyle: 'black'
    },
    'tabBar': {
      selectedColor: '#EA5149',
      list: [
        {
          pagePath: 'pages/book/main',
          text: '图书',
          iconPath: 'static/img/book2.png',
          selectedIconPath: 'static/img/book1.png'
        },
        {
          pagePath: 'pages/demo/main',
          text: '评论',
          iconPath: 'static/img/其他1.jpg',
          selectedIconPath: 'static/img/其他2.jpg'
        },
        {
          pagePath: 'pages/mymessage/main',
          text: '我的消息',
          iconPath: 'static/img/其他1.jpg',
          selectedIconPath: 'static/img/其他2.jpg'
        },
        {
          pagePath: 'pages/persons/main',
          text: '我',
          iconPath: 'static/img/me2.jpg',
          selectedIconPath: 'static/img/me1.jpg'
        }
      ]
    }
  }
}
