<template>
  <div id="app">
    <Header v-bind:countOfProduct="cartItemCount"/>
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './layouts/Header.vue';
import Footer from './layouts/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    addProduct(id) {
      this.cart.push(id);
    },
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    },
  },
};
</script>

<style>

</style>
