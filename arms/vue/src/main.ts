import { createApp } from 'vue';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

const app = createApp(App);
app.use(store, key).use(router).mount('#app');
