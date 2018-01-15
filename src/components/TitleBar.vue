<style lang="less" scoped>
.title-bar {
  display: flex; font-size: 12px; height: 20px; line-height: 20px;
  margin-top: -8px; color: #424242;
}

</style>

<template>
  <div class="title-bar">{{title}}</div>
</template>

<script>
import strings from 'strings'

export default {
  name: 'title-bar',
  mounted () {
    console.log(this.setCurrentIndex)
    this.setCurrentIndex(1)
  },
  data () {
    return {
      title: strings.TITLE
    }
  }
}
</script>

