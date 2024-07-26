import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// main.js o main.ts
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
// Importa estilos de Bootstrap y BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
}).$mount('#app');

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
