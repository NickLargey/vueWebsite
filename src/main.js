import Vue from "vue";
import App from "./App.vue";
import Lightbox from "vue-easy-lightbox";
import router from "./router/index.js";

Vue.use(Lightbox);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
