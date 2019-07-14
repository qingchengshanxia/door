import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/index";
import Base from "./utils/base.js"; //引入封装公共方法
import "./directive/directive.js"; //引入全局指令
import "./axios/index.js"; //引入axios的封装
import filters from "./filters/filters.js";
import "./plugins/element.js";
import i18n from "./i18n";

Vue.use(Base);

// 导出的是对象，可以直接通过 key 和 value 来获得过滤器的名和过滤器的方法
for (let key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
