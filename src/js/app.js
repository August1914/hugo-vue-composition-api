console.log('hello world');
import { createApp } from 'vue';
import card from "./../vue/card.vue";
// import { createApp } from 'vue/dist/vue.esm-bundler';
import cardJson from "./../../data/card.json";
console.log(cardJson)

const x = ['a', 'b'];
x.forEach(y => console.log(y));
// console.log(Vue.version);
const app = createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            label: 'All Issues!',
            label1: 'All Issues!',
        }
    },
})
// app.component('Comp', Comp)
// app.component('App', App)
app.component('card', card)
app.mount('#app');
