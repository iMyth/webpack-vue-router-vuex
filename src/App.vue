<template>
  <div id="app">
    <title-bar></title-bar>
  </div>
</template>

<script>
import TitleBar from 'components/TitleBar'

window.app = {}

export default {
  name: 'app',
  components: { TitleBar },
  mounted () {
    console.log('all systems go')
  }
}
</script>

<style lang="less">
@import './assets/less/main.less';
@import './assets/less/sprite.less';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
</style>
