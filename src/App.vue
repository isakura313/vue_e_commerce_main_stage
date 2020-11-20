<template>
  <div id="app">
    <Header v-bind:countOfProduct="cartItemCount"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './layouts/Header.vue';

export default {
  name: 'App',
  components: {
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

<style scoped>
.main_wrap {
  margin: 0 10em;
}
</style>
