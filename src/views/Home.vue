<template>
  <div class="main_home">
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ promo_title }}
        </h1>
        <h2 class="subtitle">
          {{ promo_second }}
        </h2>
      </div>
    </div>
  </section>
    <div class="columns is-centered">
      <Card
            :id = 'video_items[0].id'
            :newPrice = 'video_items[0].new_price'
            :key='video_items[0].id'
            :image='video_items[0].image'
            :rating='video_items[0].rating'
            :title='video_items[0].title'
            :discount='video_items[0].discount'
            :price='video_items[0].price'
            :available='video_items[0].available'
            v-on:addToCart='addProduct(video_items[0].id)'
      />
      <Card
            :id = 'books_items[0].id'
            :newPrice = 'books_items[0].new_price'
            :key='books_items[0].id'
            :image='books_items[0].image'
            :rating='books_items[0].rating'
            :title='books_items[0].title'
            :discount='books_items[0].discount'
            :price='books_items[0].price'
            :available='books_items[0].available'
            v-on:addToCart='addProduct(books_items[0].id)'
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card.vue';

export default {
  name: 'Home.vue',
  components: {
    Card,
  },
  data() {
    return {
      info: '',
      name: 'E-commerce Project',
      promo_title: 'Невероятные скидки на E-commerce',
      promo_second: 'Купите свою мечту',
      video_items: '',
      books_items: '',
    };
  },
  created() {
    axios
      .get('/json/full.json')
      .then((response) => {
        this.video_items = response.data.video;
        this.books_items = response.data.books;
      });
  },
};
</script>

<style scoped>

</style>
