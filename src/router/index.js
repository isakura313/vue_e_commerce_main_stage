import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Books from '../views/Books.vue';
import Video from '../views/Video.vue';
import Cart from '../views/Cart.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/books',
    name: 'Books',
    component: Books,
  },
  {
    path: '/videocards',
    name: 'video',
    component: Video,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;