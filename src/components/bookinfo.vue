<template>
    <div>
      <div class="bookinfo">
        <div class="img-div">
          <img mode="scaleToFill" class="back" :src="info.image" height="150px">
          <img mode="aspectFit" class="main-img" :src="info.image">
          <div class="info">
            <div class="title">
              {{info.title}}
            </div>
            <div class="author">
              {{info.author}}
            </div>
          </div>
        </div>
        <div class="deatil" >
          <img :src="uesrinfo.image" class="avatar" mode="aspectFit">
          {{uesrinfo.name}}
          <div class="right text-primary">
            {{info.rate}}分
            <rate :value="info.rate"></rate>
          </div>
        </div>
        <div class="deatil" >
          {{info.publisher}}
          <div class="right">
            {{info.price}}
          </div>
        </div>
        <div class="tags">
          <div class="badge" :key="tag" v-for="tag in info.tags">
            {{tag}}
          </div>
        </div>
        <div class="summary">
          <p :key="i" v-for="(sum,i) in info.summary">
            {{sum}}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
  import rate from '@/components/rate'
export default {
    props: ['info'],
    computed: {
      uesrinfo () {
        return this.info.user_info || {}
      }
    },
    components: {
      rate
    }
}
</script>

<style>
.bookinfo{
  font-size: 14px;
}
.badge{
  display:inline-block;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  border: 1px #EA5A49 solid;
  color: #EA5A49;
}
.right{
  float: right;
}
.deatil{
  padding: 5px 10px;
}
.summary{
  margin-top: 10px;
}
p{
  text-indent:2em;
  font-size: 14px;
  padding: 0px 15px;
}
.avatar{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: middle;
}
.img-div{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.back{
  filter: blur(15px);
  height: 200px;
}
.main-img{
  position: absolute;
  height: 120px;
  width: 100%;
  left: 0;
  top: 20px;
}
.info{
  color: #000000;
  position: absolute;
  width: 100%;
  left:0;
  top:150px;
  text-align: center;
}
.title{
  font-size: 20px;
}
.author{
  font-size: 14px;
}
</style>
