import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './components/Helpers/Routes.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './components/Store';
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);
app.config.globalProperties.hostname = 'https://localhost:7282';
app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.use(VueAxios, axios);
app.mount('#app');
