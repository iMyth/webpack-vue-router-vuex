import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default new Router({
  // mode: 'abstract',
  routes: [
    { path: '/index', component: App },
    { path: '/', redirect: '/index' }
  ]
})
