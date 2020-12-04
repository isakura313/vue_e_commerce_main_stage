<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-3 has-text-centered" v-text="title"></h1>
      </div>
    </div>
    <div class="columns is-multiline main_wrap">
      <Card v-for='item in info'
            :id='item.id'
            :newPrice='item.new_price'
            :key='item.id'
            :id = 'item.id'
            :image='item.image'
            :rating='item.rating'
            :title='item.title'
            :discount='item.discount'
            :price='item.price'
            :available='item.available'
            v-on:addToCart='addProduct(item)'
      />
    </div>
  </div>

</template>

<script>
<<<<<<< HEAD
=======
// import axios from 'axios';
// import products from '../../public/json/fixtures_books.json';
>>>>>>> 0fd94d3... adas
import Card from '../components/Card.vue';

export default {
  name: 'Books',
  components: {
    Card,
  },
  data() {
    return {
<<<<<<< HEAD
      info: [],
=======
      info: '',
>>>>>>> 0fd94d3... adas
      title: 'Отдел книг',
      cart: [],
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
  },
  computed: {
    cartItemCount() {
      return this.cart.length;
    },
  },
  async created() {
    const response = await fetch('/json/full.json');
    this.info = await response.json();
    this.info = this.info.books;
  },
};
</script>

<style scoped>
.main_wrap {
  margin: 0 10em;
}
<<<<<<< HEAD
@media all and (max-width: 680px){
=======

@media all and (max-width: 680px) {
>>>>>>> 0fd94d3... adas
  .main_wrap {
    margin: 0 1em;
  }
}
</style>
