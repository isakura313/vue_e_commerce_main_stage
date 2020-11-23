<template>
  <div class="columns">
    <div class="column is-half cart_wrapper">
      <h1> {{ name }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart.vue',
  data() {
    return {
      name: 'Базовая страница корзины',
    };
  },
};
</script>

<style scoped>
.cart_wrapper{
  min-height: 55vh;
}
</style>
