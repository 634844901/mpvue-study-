<template>
  <div class="index">
    <div class="notice">
      <p class="texttitle">公告</p>
    </div>
    <div class="content" :key="index" v-for="(i,index) in data2">
      <div class="title" >
        <p class="texttitle">{{i.title}}</p>
        <div class="divLine"></div>
      </div>
      <div class="textcontent">
        {{i.textcontent}}
      </div>
      <button class="see" v-if="see==='false'&& buttonname!==index" :name="index" @click="maxtext(index)">显示更多</button>
      <button class="see" v-else="buttonname===index" :name="index" @click="mixtext(index)">收缩显示</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: [
        { title: '123456', textcontent: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……\n' +
          '四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时。他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后。三体人庞大的宇宙舰队开始向地球进发……\n' +
          '人类的末日悄然来临。' },
        { title: '123456', textcontent: '你是否既想获得丰富复杂的网页样式，同时又想节省时间和精力？本书为你展示了如何遵循CSS最新规范（CSS2和CSS2.1）将层叠样式表的方方面面应用于实践。\n' +
          '通过本书提供的诸多示例，你将了解如何做到仅在一处建立样式表就能创建或修改整个网站的外观，以及如何得到HTML力不能及的更丰富的表现效果。\n' +
          '资深CSS专家Eric A.Meyer。' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' }
      ],
      see: 'false',
      buttonname: '',
      data2: [
        { title: '123456', textcontent: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……\n' +
          '四光年外，“三体文明”正苦苦挣扎——三颗无规则运行的太阳主导下的百余次毁灭与重生逼迫他们逃离母星。而恰在此时。他们接收到了地球发来的信息。在运用超技术锁死地球人的基础科学之后。三体人庞大的宇宙舰队开始向地球进发……\n' +
          '人类的末日悄然来临。' },
        { title: '123456', textcontent: '你是否既想获得丰富复杂的网页样式，同时又想节省时间和精力？本书为你展示了如何遵循CSS最新规范（CSS2和CSS2.1）将层叠样式表的方方面面应用于实践。\n' +
          '通过本书提供的诸多示例，你将了解如何做到仅在一处建立样式表就能创建或修改整个网站的外观，以及如何得到HTML力不能及的更丰富的表现效果。\n' +
          '资深CSS专家Eric A.Meyer。' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' },
        { title: '123456', textcontent: '123456789' }
      ]
    }
  },
  created () {
    var text = this.data2
    for (var i in text) {
      if ((text[i].textcontent.length >= 60)) {
        text[i].textcontent = text[i].textcontent.substring(0, 60) + '...'
      }
    }
  },
  watch: {
  },
  methods: {
    maxtext (textid) {
      if (this.buttonname != null) {
        this.mixtext(this.buttonname)
        for (var i in this.data2) {
          if (i == textid) {
            this.data2[i].textcontent = this.data1[i].textcontent
            this.buttonname = textid
          }
        }
      } else {
        for (var i in this.data2) {
          if (i == textid) {
            this.data2[i].textcontent = this.data1[i].textcontent
            this.buttonname = textid
          }
        }
      }
    },
    mixtext (textid) {
      this.buttonname = ''
      for (var i in this.data2) {
        if (i == textid) {
          this.data2[i].textcontent = this.data2[i].textcontent.substring(0, 60) + '...'
        }
      }
    }
  }

}
</script>

<style scoped>
  page{
    padding: 0;
    height: 100%;
    width: 100%;
  }
  .notice{
    padding: 10px;
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
.index{
  width: 100%;
  background-color: #EFFFFE;
  height: 100%;
}
.content{
  font-size: 16px;
  padding:10px;
  width: 80%;
  background-color: #ffffff;
  margin: auto;
  margin-bottom: 30px;
  box-shadow: 2px 2px 5px  #888888;
}
.textcontent{
  overflow:hidden;
  height: 100%;
  text-indent:1em;
}
  .texttitle{
    font-size: 50rpx;
  }
  .divLine{
    background: #E0E3DA;
    width: 100%;
    height: 5rpx;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .see{
    margin-top: 10px;
    color: white;
    background: cornflowerblue;
    margin-bottom: 10px;
    border-radius: 2px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    width: 100%;
  }
</style>
