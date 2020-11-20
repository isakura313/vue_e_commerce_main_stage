<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img v-bind:src="logo_src" width="200">
      </a>
      <a role="button" class="navbar-burger burger" aria-label="menu"
         aria-expanded="false" data-target="navbar_ecommerce">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbar_ecommerce" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
        <router-link to="/">
          Главная
        </router-link>
        </div>
        <div class="navbar-item">
        <router-link to="/books">
          Книги
        </router-link>
        </div>
        <div class="navbar-item">
        <router-link to="/videocards">
          Видеокарты
        </router-link>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <input type="text" class="input">
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Поиск</strong>
            </a>
            <router-link to="/cart">
            <button class="button is-light">
              Корзина
              <ion-icon name="cart-outline" size="large"></ion-icon>
              {{countOfProducts}}
            </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header.vue',
  props: {
    countOfProducts: String,
  },
  data() {
    return {
      logo_src: 'https://cdn1.ozone.ru/s3/cms/8c/t22/ozon_logo_bf.svg',
    };
  },
};
</script>

<style scoped>

</style>
