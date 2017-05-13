// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Mojs from 'mojs'
import VueParticles from 'vue-particles'
import VueScrollTo from 'vue-scrollto'
import App from './App'
import router from './router'
import store from './store/store'
import ScrollMagic from 'scrollmagic'

Vue.use(Mojs)
Vue.use(VueParticles)
Vue.use(VueScrollTo)
Vue.use(Vuex)
Vue.use(ScrollMagic)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
