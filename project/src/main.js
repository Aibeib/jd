import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import axios from "axios";
import url from "../src/utils/url";
Vue.use(Vant);


import 'vant/lib/index.css';
import '../public/css/common.css'
import '../public/font/iconfont.css'
import '../public/font_lt1e2yzwco9/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios; // 把axios挂在到原型上面
Vue.prototype._URL = url; // 把url挂在到圆形上面
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
