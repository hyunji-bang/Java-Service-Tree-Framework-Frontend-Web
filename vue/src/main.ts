import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { store, key } from './store';
import axios from 'axios';

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(store, key).use(router).mount('#app');
