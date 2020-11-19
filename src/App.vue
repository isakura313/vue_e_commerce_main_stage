<template>
  <div id="app">
    <Header v-bind:countOfProducts="cartItemCount"/>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from '@/layouts/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      cart: [],
    };
  },
};
</script>

<style>

</style>
