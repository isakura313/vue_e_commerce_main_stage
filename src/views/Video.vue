<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-3 has-text-centered" v-text="title"> </h1>
      </div>
    </div>
    <div class="columns is-multiline main_wrap">
      <Card v-for='item in info'
            :id = 'item.id'
            :newPrice = 'item.new_price'
            :key='item.id'
            :id = 'item.id'
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
<<<<<<< HEAD
=======
import axios from 'axios';
>>>>>>> 0fd94d3... adas
import Card from '../components/Card.vue';

export default {
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
<<<<<<< HEAD
      info: [],
      title: 'Отдел книг',
=======
      info: '',
      title: 'Видеокарты по выгодным ценам',
>>>>>>> 0fd94d3... adas
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
<<<<<<< HEAD
  async created() {
    const response = await fetch('/json/full.json');
    this.info = await response.json();
    this.info = this.info.video;
=======
  created() {
    axios
      .get('/json/full.json')
      .then((response) => {
        this.info = response.data.video;
      });
>>>>>>> 0fd94d3... adas
  },
};
</script>

<style scoped>
.main_wrap {
  margin: 0 10em;
}
@media all and (max-width: 680px){
  .main_wrap {
    margin: 0 1em;
  }
}
</style>
