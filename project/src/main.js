import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import Vant from 'vant';

Vue.use(Vant);


import 'vant/lib/index.css';
import '../public/css/common.css'
import '../public/font/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
