<template>
  <div class="wrapper">
    <Header v-bind:countOfProducts="cartItemCount"/>
  <div class="columns">
    <div class="column">
      <h1 class="title is-size-3 has-text-centered" v-text="title"> </h1>
    </div>
   </div>
    <div class="columns is-multiline main_wrap">
    <Card v-for="item in info"
          v-bind:key="item.id"
          v-bind:image="item.image"
          v-bind:rating="item.rating"
          v-bind:title="item.title"
          v-bind:discount="item.discount"
          v-bind:price="item.price"
          v-bind:available="item.available"
          v-on:addToCart="addProduct(item.id)"
    />
    </div>
  </div>

</template>

<script>
import products from './fixtures_video.json';
import Card from './components/Card.vue';
import Header from './layouts/Header.vue';

export default {
  name: 'App',
  components: {
    Card,
    Header,
  },
  data() {
    return {
      info: products.products,
      title: 'Магазин  e - коммерции',
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
.main_wrap{
  margin: 0 10em;
}
</style>
