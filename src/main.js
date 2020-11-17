import Vue from 'vue';
import App from './App.vue';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// какие пути, или страницы должны быть в магазине
// cart
// страница продукта product
//  главная страница + страница книг + страница видеокарт TODO = login и register
