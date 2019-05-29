import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview);
import Axios from 'axios';

// import store from './storeall/store'
Vue.use(ElementUI);

Vue.config.productionTip = false;
// Axios.defaults.baseURL = 'https://xilai99.com/';
Vue.prototype.$axios = Axios;
// Vue.prototype.$store = store;

Vue.prototype.request = request;//封装axios请求

//自定义指令1
Vue.directive('marginRight', {
  bind(el, binding) {
    el.style.marginRight = parseInt(binding.value) + 'px'
  }
});
//自定义指令2
Vue.directive('myHeight', {
  bind(el, binding) {
    el.style.height = parseInt(binding.value) + 'px'
  }
});

//全局注册组件:
import dropSelect from './components/homePage/calendar/dropSelect'
Vue.component('dropSelect',dropSelect);


// //自定义滚动事件指令
// Vue.directive('loadmore', {
//   bind(el, binding) {
//     const selectWrap = el.querySelector('.el-table__body-wrapper');
//     selectWrap.addEventListener('scroll', function () {
//       const scrollDistance = this.scrollHeight - this.scrollTop - this.clientHeight;
//       binding.value(scrollDistance, this.scrollTop)
//     })
//   }
// });

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>',

});

/**
 *封装axios
 * @param 传进的method、url、data等对象
 */
function request(param) {
  let method = param.method;
  let url = param.url;
  let dataObj = param.data;
  if (method == 'GET' || method == 'get') {
    let dataObjArr = [];
    for (var key in dataObj) {
      if (dataObj.hasOwnProperty(key)) {
        dataObjArr.push(key);
        if (dataObjArr.length == 1) {
          url = url + '?' + key + '=' + dataObj[key];
        } else {
          url = url + '&' + key + '=' + dataObj[key];
        }
      }
    }
    this.$axios({
      method: method,
      url: url,
      headers: {
        Authorization: 'http://211.149.163.185:8090/|1|2|xlhl|http://171.211.126.122:8091/|http://171.211.126.122:8092/|1,1|http://192.168.1.253:8095|https://xilai99.com'
      }
    }).then(res => {
      param.success(res);
    }).catch(err => {
      param.error(err);
    });
  } else if (method == 'POST') {
    this.$axios({
      method: method,
      url: url,
      data: dataObj,
      headers: {
        Authorization: 'http://211.149.163.185:8090/|1|2|xlhl|http://171.211.126.122:8091/|http://171.211.126.122:8092/|1,1|http://192.168.1.253:8095|https://xilai99.com'
      }
    }).then(res => {
      param.success(res);
    }).catch(err => {
      param.error(err);
    });
  }
}


