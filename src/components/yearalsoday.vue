<template>
    <div id="yearalsoday">
      <progress :percent="percent" activeColor="#EA5A49" ></progress>
      <p>{{year}}已经过去了{{date}}天,{{percent}}%</p>
    </div>
</template>

<script>
export default{
  methods: {
    isLeapYear () {
      const runNian = new Date().getFullYear()
      if (runNian % 400 === 0) {
        return true
      } else if (runNian % 4 === 0 && runNian % 100 !== 0) {
        return true
      } else {
        return false
      }
    },
    getDayOfYear () {
      return this.isLeapYear() ? 365 : 366
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    },
    date () {
      let start = new Date()
      start.setMonth(0)
      start.setDate(1)
      let offset = new Date().getTime() - start.getTime()
      return parseInt(offset / 1000 / 60 / 60 / 24) + 1
    },
    percent () {
      return (this.date * 100 / this.getDayOfYear()).toFixed(1)
    }
  }
}
</script>

<style scoped>

</style>
