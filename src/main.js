import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';
import store from './store';

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

// какие пути, или страницы должны быть в магазине
// cart
// страница продукта product
//  главная страница + страница книг + страница видеокарт TODO = login и register
