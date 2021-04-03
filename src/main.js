import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from '@/views/Index.vue'
import Gingorm from '@/views/Gingorm.vue'
import Hopper from '@/views/Hopper.vue'
import Baxter from '@/views/Baxter.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  "routes": [
    { path: "/", component: Index },
    { path: "/gingorm", component: Gingorm},
    { path: "/hopper", component: Hopper},
    { path: "/baxter", component: Baxter}
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
