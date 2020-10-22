import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload';
import { Button, Select ,Form,FormItem} from 'element-ui';
import toast from 'components/common/toast'
import FastClick from 'fastclick'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component('el-button', Button);
Vue.component('el-select', Select);
Vue.component('el-form', Form);
Vue.component('el-formitem', FormItem);

Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()
Vue.use(toast)
// Vue.use(VueAxios,axios)
// 使用vue懒加载
Vue.use(VueLazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})

// 解决移动客户端300ms的延迟
FastClick.attach(document.body)

new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')
