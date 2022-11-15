import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import Edit from './views/Edit.vue';
import List from './views/List.vue';
import './assets/main.css'

const app = createApp(App);

app.config.globalProperties.$scrollTop = () => {
    this.intervalId = setInterval(() => {
        if (window.scrollY === 0) {
            clearInterval(this.intervalId)
        }
        window.scroll(0, window.scrollY - 25)
    }, 20)
}

app.component('Edit', Edit);
app.component('List', List);

app.use(i18n);

app.mount('#app');
