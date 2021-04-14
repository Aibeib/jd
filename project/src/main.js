import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import Vuex from 'vuex'
import axios from "axios";
import url from "../src/utils/url";
import store from './store'
import { Icon } from 'vant';
import { Lazyload } from 'vant';
Vue.use(Vuex)
Vue.use(Icon);

Vue.use(Lazyload);

Vue.use(Vant);

import 'vant/lib/index.css';
import '../public/css/common.css'
import '../public/font/iconfont.css'
import '../public/font_1xxhzenvgf3/iconfont.css'
Vue.config.productionTip = false
Vue.prototype.$http = axios; // 把axios挂在到原型上面
Vue.prototype._URL = url; // 把url挂在到圆形上面
new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
