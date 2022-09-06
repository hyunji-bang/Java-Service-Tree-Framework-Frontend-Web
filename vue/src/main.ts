import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { store, key } from './store';
import ApiPlugin from './plugins/api';

const app = createApp(App);
app.use(ApiPlugin);
app.use(store, key).use(router).mount('#app');
