<style lang="less" scoped>
.title-bar {
  display: flex; font-size: 18px; height: 64px; line-height: 64px;
  color: #222226; background: rgba(250,250,250,0.90);
  box-shadow: 0 1px 0 #DBDBDB; justify-content: flex-end;
}
.title {
  flex: 1;
}
.icon {
  position: absolute; top: 0; right: 0; cursor: pointer;
}

</style>

<template>
  <div class="title-bar">
    <div class="title">{{title}}</div>
    <span class="icon icon-close"></span>
  </div>
</template>

<script>
import strings from 'strings'

export default {
  name: 'title-bar',
  data () {
    return {
      title: strings.TITLE
    }
  }
}
</script>

