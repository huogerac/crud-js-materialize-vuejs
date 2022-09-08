import Vue from "vue";
import HomeTarefa from "./pages/HomeTarefa.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(HomeTarefa),
}).$mount("#app");
