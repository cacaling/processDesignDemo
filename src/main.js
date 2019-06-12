import Vue from 'vue'
import './plugins/axios'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import cable1 from './components/CableOf1.vue'
import cable2 from './components/CableOf2.vue'
import cable3 from './components/CableOf3.vue'
import process from './components/Process.vue'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Router);

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/cable1', component: cable1 },
  { path: '/cable2', component: cable2 },
  { path: '/cable3', component: cable3 },
  { path: '/process', component: process }
]

const router = new Router({
  routes,
  mode: 'history'
})

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})
