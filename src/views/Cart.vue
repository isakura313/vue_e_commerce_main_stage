<template>
  <h1> {{ cart }} </h1>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart.vue',
  data() {
    return {
      name: 'Базовая страница корзины>',
    };
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>

<style scoped>

</style>
