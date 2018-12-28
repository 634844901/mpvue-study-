<template>
    <div class="swiper">
      <swiper :indicator-dots="true" indicator-color="#EA5A49" :autoplay="true"
              :interval="6000" :circular="true" :duration="1000">
        <block  :key="imgindex" v-for="(top ,imgindex) in tops">
          <swiper-item>
            <img class="slide-image" mode="aspectFit" :src="top.image"/>
          </swiper-item>
        </block >
      </swiper>
    </div>
</template>

<script>
	export default {
  props: ['tops']
	}
</script>

<style scoped>

</style>
