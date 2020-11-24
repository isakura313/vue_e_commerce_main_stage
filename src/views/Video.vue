<template>
  <div class="wrapper">
    <div class="columns">
      <div class="column">
        <h1 class="title is-size-3 has-text-centered" v-text="title"></h1>
      </div>
    </div>
    <div class="columns is-multiline main_wrap">
      <Card v-for='item in video'
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
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
      title: 'Видеокарты по выгодным ценам',
      cart: [],
      bulma_width_class: 'column is-one-quarter-desktop is-full-mobile',
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
    ...mapGetters([
      'video', 'cart',
    ]),
  },
  created() {
    this.$store.dispatch('initVideo');
  },
};
</script>

<style scoped>
.main_wrap {
  margin: 0 10em;
}

@media all and (max-width: 680px) {
  .main_wrap {
    margin: 0 1em;
  }
}
</style>
