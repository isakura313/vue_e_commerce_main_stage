<template>
  <div class="columns">
    <div class="column is-one-quarter">

      <div class="card">
        <img v-bind:src="product.img" alt="" class="card__img">
        <p class="card__rating">{{product.rating}} /5 </p>
        <h3 class="card__h3 is-size-3" v-text="product.title"> </h3>
        <p class="card__desription is-size-5" v-text="product.desription"> </p>
        <p class="card__price is-size-5 has-text-danger has-text-weight-bold"
           v-if="product.discount" >
          {{ product.price | formatPrice }} </p>
        <p class="card__price is-size-5" v-else > {{ product.price | formatPrice }} </p>
        <button class="button is-danger" v-on:click="addToCart"> Добавить в корзину </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      product: {
        id: 1002,
        img: 'https://cdn1.ozone.ru/s3/multimedia-l/wc1200/6018492861.jpg',
        title: 'Смартфон Huawei P40 lite E 4/64GB, черный',
        desription: 'Данный смартфон Huawei работает с фирменными мобильными сервисами (Huawei Mobile Services) ',
        price: 1000000000000,
        discount: true,
        count: 10,
        rating: 4,
      },
      cart: [],
    };
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
