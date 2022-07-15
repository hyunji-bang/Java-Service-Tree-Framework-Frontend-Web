import { createApp } from "vue";
import BootstrapVue3 from "bootstrap-vue-3";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(store).use(router).mount("#app");
