import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import Edit from './views/Edit.vue';
import List from './views/List.vue';
import './assets/main.css'

const app = createApp(App);

app.component('Edit', Edit);
app.component('List', List);

app.use(i18n);

app.mount('#app');
