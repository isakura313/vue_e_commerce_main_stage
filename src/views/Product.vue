<template>
    <div class="columns">
        <div class="column is-half">
            <button @click="goBack"> Вернуться назад</button>
            <h1> {{ $route.params.id }} </h1>
            <div class="card">
                <div class="card__img" :style="{backgroundImage: `url(${image})`}">
                    <button class="button is-danger btn_discount" v-show="discount">
                        {{
                        discount ? `${Math.round((price - newPrice) /
                            (price / 100))}%` : ''
                        }}
                    </button>
                </div>
                <StarRating
                        increment=0.1
                        read-only="true"
                        star-size=20
                        active-color="#ff8970"
                        :show-rating=false
                        :rating="rating"
                />
                <h3 class="card__title is-size-6"> {{ title }} </h3>
                <p class="card__description is-size-5" v-text="description"></p>
                <p class="card__price is-size-5"
                   v-if="discount">
          <span class="has-text-danger has-text-weight-bold">{{
              newPrice |
                  formatPrice
              }} </span>
                    <del class="has-text-grey">{{ price | formatPrice }}</del>
                </p>
                <p class="card__price is-size-5 has-text-weight-bold" v-else>
                    {{ price | formatPrice }} </p>
                <p class="card__available is-size-6"> В наличии {{ available }} </p>
                <button class="button is-link is-pulled-right"
                        v-on:click="addProductToCart" v-if="available"> Добавить в корзину
                </button>
                <button class="button" v-show="canBuy">Нет в наличии</button>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import StarRating from 'vue-star-rating';

export default {
  name: 'Product.vue',
  components: {
    StarRating,
  },
  data() {
    return {
      name: 'Полная информация о продукте',
      info: '',
      image: String,
      title: String,
      description: String,
      newPrice: Number,
      price: Number,
      available: Boolean,
      rating: Number,
      discount: Boolean,
    };
  },
  async created() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    this.info = await response.json();
    this.info = [...this.info.video, ...this.info.books].filter((data) => data.id
      === Number(this.$route.params.id));
    // this.info = data.filter((data) => data.id
  },
  // created() {
  //   axios
  //     .get('/json/full.json')
  //     .then((response) => {
  //       this.info = [...response.data.video, ...response.data.books].filter((data) => data.id
  //         === Number(143923030));
  //       [this.info] = this.info;
  //       this.image = this.info.image;
  //       this.title = this.info.title;
  //       this.description = this.info.description;
  //       this.available = this.info.available;
  //       this.newPrice = this.info.new_price;
  //       this.price = this.info.price;
  //       this.rating = this.info.rating;
  //       this.discount = this.info.discount;
  //     });
  // },
  methods: {
    goBack() {
      this.$router.push({ name: 'Books' });
    },
  },
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) {
        return '';
      }
      if (price > 999) {
        const priceArray = String(price)
          .split('')
          .reverse();
        for (let i = 0; i < priceArray.length; i += 1) {
          if (i % 4 === 0) {
            priceArray.splice(i, 0, ' ');
          }
        }
        return `${priceArray.reverse()
          .join('')} ₽`;
      }
      return `${price} ₽`;
    },
  },
};

</script>

<style scoped>

</style>
