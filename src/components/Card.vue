<template>
    <div class="column is-one-quarter">

      <div class="card">
        <div  class='card__img' v-bind:style="{backgroundImage: 'url(' + image + ')'}"></div>
<!--        <p class="card__rating">{{rating}} /5 </p>-->
        <StarRating
          :rating="rating"
          read-only="true"
          star-size="20"
          round-start-rating="false"
          increment="0.01"
          :show-rating="false"
        />
        <h3 class="card__title is-size-5">   {{ title | formatTitle }} </h3>
        <p class="card__description is-size-5" v-text="description"> </p>
        <p class="card__price is-size-5 has-text-danger has-text-weight-bold"
           v-if="discount" >
          {{ price | formatPrice }} </p>
        <p class="card__price is-size-5 has-text-weight-bold"
                  v-else > {{ price | formatPrice }} </p>
        <p class="card__available is-size-6">  В наличии {{ available }} </p>
        <button class="button is-link is-pulled-right"
                v-on:click="addProductToCart" v-if="available"> Добавить в корзину </button>
        <button class="button is-danger" v-show="canBuy">Нет в наличии</button>
      </div>

    </div>

</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'Card',
  components: {
    StarRating,
  },
  data() {
    return {
      img: 'https://cdn1.ozone.ru/s3/multimedia-1/wc1200/6014790889.jpg',
    };
  },
  props: {
    image: String,
    rating: Number,
    title: String,
    description: String,
    discount: Boolean,
    price: Number,
    available: Number,
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) { return ''; }
      if (price > 999) {
        const priceArray = String(price).split('').reverse();
        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse().join('')} ₽`;
      } return `${price} ₽`;
    },
    formatTitle(title) {
      if (title.length > 28) {
        return `${title.slice(0, 28)}...`;
      }
      return `${title}`;
    },
  },
  methods: {
    addProductToCart() {
      this.$emit('addToCart');
    },
  },
  computed: {
    canBuy() {
      if (this.available === 0) {
        return true;
      }
      return false;
    },
  },

};
</script>

<style>
.card{
  margin: 1em;
  padding: 10px 10px 30px 10px;
}
.card__img{
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 200px;
  padding: 40px;
}
.card__title:hover{
  color: blue;
  cursor: pointer;
}
</style>
