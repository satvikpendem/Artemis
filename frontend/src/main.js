import Vue from "vue";
import App from "./App.vue";
import moment from "moment";
import duration from "./plugins/duration.js";

Object.defineProperty(Vue.prototype, "$moment", { value: moment });

Vue.use(duration);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
