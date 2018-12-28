<template>
    <div class="comments_list">
      <div class="page-title" v-if="comments.length">
        我的评论:
      </div>
      <div class="comment" v-for="comment in comments" :key="comment.id"
           @click="handleClick(comment)">
        <div class="user">
          <div class="inline">
            <img :src="comment.image" class="avatar" mode="aspectFit">
            {{comment.title}}
            <div class="right">
              {{comment.location||'未知地点'}}
              <span class="text-primary">
              --
            </span>
              {{comment.phone||'未知型号'}}
            </div>
          </div>
        </div>
        <div class="comment">
          {{comment.comment}}
          <div class="segmentation">
            <span>------------------------</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
	  name: '',
  props: ['comments', 'type'],
  methods: {
    handleClick (comment) {
      if (this.type === 'user') {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + comment.bookid
        })
      }
    }
  }
	}
</script>

<style scoped>
.page-title{
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-right: 1px;
  margin-left: 1px;
}
  .comment{
    font-size: 16px;
    padding: 5px 20px;
  }
  .avatar{
    width: 30px;
    height: 30px;
  }

  .segmentation{
    margin-left: 10px;
  }
</style>
