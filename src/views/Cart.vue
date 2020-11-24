<template>
  <div class="cart_wrapper">
    <div class="columns">
      <div class="column">
        <h1>{{ name }}</h1>
      </div>
    </div>
    <div class="columns is-multiline">
      <Card v-for='item in cart'
            :id='item.id'
            :newPrice='item.new_price'
            :key='item.id'
            :image='item.image'
            :rating='item.rating'
            :title='item.title'
            :discount='item.discount'
            :price='item.price'
            :available='item.available'
            :bulma_width="bulma_width_class"
            v-on:addToCart='addProduct(item)'
      />

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../components/Card.vue';

export default {
  name: 'Cart.vue',
  components: {
    Card,
  },
  data() {
    return {
      name: 'Базовая страница корзины',
      bulma_width_class: 'column is-four-fifths-desktop is-full-mobile',
    };
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    },
    ...mapGetters([
      'cart',
    ]),
  },
};
</script>

<style scoped>
.cart_wrapper {
  min-height: 55vh;
  margin: 0 3em;
}
</style>
