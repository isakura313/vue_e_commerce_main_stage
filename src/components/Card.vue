<template>
    <div class="column is-one-quarter">

      <div class="card">
        <button class="button is-danger" v-show="canBuy">Нет в наличии</button>
        <img v-bind:src="image" alt="" class="card__img">
        <p class="card__rating">{{rating}} /5 </p>
        <h3 class="card__title is-size-5">   {{ title | formatTitle }} </h3>
        <p class="card__description is-size-5" v-text="description"> </p>
        <p class="card__price is-size-5 has-text-danger has-text-weight-bold"
           v-if="discount" >
          {{ price | formatPrice }} </p>
        <p class="card__price is-size-5" v-else > {{ price | formatPrice }} </p>
        <p class="card__available is-size-6">  В наличии {{ available }} </p>
        <button class="button is-link is-pulled-right"
                v-on:click="addProductToCart"> Добавить в корзину </button>
      </div>

    </div>

</template>

<script>
export default {
  name: 'Card',
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
  margin: 2em;
  padding: 10px 10px 30px 10px;
}
.card__img{
  height: 350px;
  width: auto;
  padding: 40px;
}
.card__title:hover{
  color: blue;
  cursor: pointer;
}
</style>
