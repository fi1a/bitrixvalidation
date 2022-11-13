import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import Table from './components/Table.vue';
import Rules from './components/Rules.vue';
import './assets/main.css'

const app = createApp(App);

app.component('Table', Table);
app.component('Rules', Rules);

app.use(i18n);

app.mount('#app');
