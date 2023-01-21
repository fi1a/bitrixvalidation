import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n.js'
import Edit from './views/Edit.vue';
import List from './views/List.vue';
import './assets/main.css'

const app = createApp(App);

app.config.globalProperties.$scrollTop = (top) => {
    this.intervalId = setInterval(() => {
        if (window.scrollY <= top) {
            clearInterval(this.intervalId)

            return;
        }
        window.scroll(0, window.scrollY - 25)
    }, 20)
}

String.prototype.strtr = function ( dic ) {
    const str = this.toString(),
        makeToken = ( inx ) => `{{###~${ inx }~###}}`,

        tokens = Object.keys( dic )
            .map( ( key, inx ) => ({
                key,
                val: dic[ key ],
                token: makeToken( inx )
            })),

        tokenizedStr = tokens.reduce(( carry, entry ) =>
            carry.replace( new RegExp( entry.key, "g" ), entry.token ), str );

    return tokens.reduce(( carry, entry ) =>
        carry.replace( new RegExp( entry.token, "g" ), entry.val ), tokenizedStr );
}

app.config.globalProperties.$toMomentFormat = (format) => {
    const replacements = {
        'd': 'DD',
        'D': 'ddd',
        'j': 'D',
        'l': 'dddd',
        'N': 'E',
        'S': 'o',
        'w': 'e',
        'z': 'DDD',
        'W': 'W',
        'F': 'MMMM',
        'm': 'MM',
        'M': 'MMM',
        'n': 'M',
        't': '',
        'L': '',
        'o': 'YYYY',
        'Y': 'YYYY',
        'y': 'YY',
        'a': 'a',
        'A': 'A',
        'B': '',
        'g': 'h',
        'G': 'H',
        'h': 'hh',
        'H': 'HH',
        'i': 'mm',
        's': 'ss',
        'u': 'SSS',
        'e': 'zz',
        'I': '',
        'O': '',
        'P': '',
        'T': '',
        'Z': '',
        'c': '',
        'r': '',
        'U': 'X',
    };

    return format.strtr(replacements);
}

app.config.globalProperties.$right = document.getElementById('app').dataset.right;

app.component('Edit', Edit);
app.component('List', List);

app.use(i18n);

app.mount('#app');
