<template>
    <div class="columns">
        <div class="column is-half">
            <div class="card">
                <div class="card__img" :style="{backgroundImage: `url(${info[0].image})`}">
                    <button class="button is-danger btn_discount" v-show="info[0].discount">
                        {{
                        info[0].discount ? `${Math.round((info[0].price - info[0].new_price) /
                            (info[0].price / 100))}%` : ''
                        }}
                    </button>
                </div>
                <StarRating
                        increment=0.1
                        read-only="true"
                        star-size=20
                        active-color="#ff8970"
                        :show-rating=false
                        :rating="info[0].rating"
                />
                <h3 class="card__title is-size-6"> {{ info[0].title }} </h3>
                <p class="card__description is-size-5"> {{ info[0].description }}</p>
                <p class="card__price is-size-5"
                   v-if="info[0].discount">
          <span class="has-text-danger has-text-weight-bold">{{
              info[0].new_price |
                  formatPrice
              }} </span>
                    <del class="has-text-grey">{{ info[0].price | formatPrice }}</del>
                </p>
                <p class="card__price is-size-5 has-text-weight-bold" v-else>
                    {{ info[0].price | formatPrice }} </p>
                <p class="card__available is-size-6"> В наличии {{ info[0].available }} </p>
                <button class="button is-link is-pulled-right"
                        v-on:click="addProductToCart" v-if="info[0].available"> Добавить в корзину
                </button>
                <button class="button" v-show="info[0].canBuy">Нет в наличии</button>
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

    };
  },
  async created() {
    const response = await fetch('/json/full.json');
    this.info = await response.json();
    this.info = [...this.info.video, ...this.info.books].filter((data) => data.id
      === Number(this.$route.params.id));
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
