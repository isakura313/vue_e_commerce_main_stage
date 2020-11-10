<template>
  <div class="columns">
    <div class="column is-one-quarter">

      <div class="card">
        <img v-bind:src="product.img" alt="" class="card__img">
        <h3 class="card__h3 is-size-3" v-text="product.title"> </h3>
        <p class="card__desription is-size-5" v-text="product.desription"> </p>
        <p class="card__price is-size-5"> {{ product.price | formatPrice }} </p>
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
        img: 'https://cdn1.ozone.ru/s3/multimedia-l/wc1200/6018492861.jpg',
        title: 'Смартфон Huawei P40 lite E 4/64GB, черный',
        desription: 'Данный смартфон Huawei работает с фирменными мобильными сервисами (Huawei Mobile Services) ',
        price: 10000000,
      },
    };
  },
  filters: {
    formatPrice(price) {
      console.log(price);
      if (!parseInt(price, 10)) { return ''; }
      if (price > 999) {
        const priceArray = String(price).split('').reverse();
        let separator = 3;
        for (let i = 0; i < priceArray.length; i += separator) {
          priceArray.splice(separator += 3, 0, ',');
          separator += 4;
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
