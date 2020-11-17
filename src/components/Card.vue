<template>
    <div class="column is-one-quarter">

      <div class="card">
        <img v-bind:src="img" alt="" class="card__img">
        <p class="card__rating">{{rating}} /5 </p>
        <h3 class="card__h3 is-size-3" v-text="title"> </h3>
        <p class="card__description is-size-5" v-text="description"> </p>
        <p class="card__price is-size-5 has-text-danger has-text-weight-bold"
           v-if="discount" >
          {{ price | formatPrice }} </p>
        <p class="card__price is-size-5" v-else > {{ price | formatPrice }} </p>
        <button class="button is-danger" v-on:click="addToCart"> Добавить в корзину </button>
      </div>

    </div>

</template>

<script>
export default {
  name: 'Card',
  props: {
    img: String,
    rating: Number,
    title: String,
    description: String,
    discount: Boolean,
    price: Number,
  },
  methods: {
    addToCart() {
      this.cart.push(this.product.id);
    },
  },
  computed: {
    cartItemCount() {
      return this.cart.length || 0;
    },
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
  },

};
</script>

<style scoped>
.card{
  margin: 2em;
}
.card__img{
  height: 350px;
  padding: 40px;
}
</style>
