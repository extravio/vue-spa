import Vue from 'vue';
import AppLayout from '../theme/Layout.vue';
import router from './router';

// Vue.component('app', {
//   template:
// })

const app = new Vue({
    router,
    ...AppLayout
});

export {
    app,
    router
}