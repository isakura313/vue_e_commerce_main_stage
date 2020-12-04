<template>
<<<<<<< HEAD
  <h1> {{ cart }} </h1>
=======
  <div class="columns">
    <div class="column is-half cart_wrapper">
      <h1> {{ name }} </h1>
    </div>
  </div>
>>>>>>> 0fd94d3... adas
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Cart.vue',
  data() {
    return {
      name: 'Базовая страница корзины',
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
.cart_wrapper{
  min-height: 55vh;
}
</style>
