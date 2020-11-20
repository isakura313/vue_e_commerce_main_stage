<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-3 has-text-centered" v-text="title"> </h1>
      </div>
    </div>
    <div class="columns is-multiline main_wrap">
      <Card v-for='item in info'
            :newPrice = 'item.new_price'
            :key='item.id'
            :image='item.image'
            :rating='item.rating'
            :title='item.title'
            :discount='item.discount'
            :price='item.price'
            :available='item.available'
            v-on:addToCart='addProduct(item.id)'
      />
    </div>
  </div>

</template>

<script>
import products from '../fixtures_video.json';
import Card from '../components/Card.vue';

export default {
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
      info: products.products,
      title: 'Отдел книг',
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
