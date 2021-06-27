import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import router from './routes/index';
import Vuex from 'vuex'

Vue.use(Vuex);


// console.log('JavaScript on');
// Vue.config.devtools = false;
// Vue.config.debug = false;

 new Vue({
   store,router,
    render: h => h(App)
}).$mount('#app');
