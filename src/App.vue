<template>
  <div class="wrapper">
    <Header />
  <div class="columns">
    <div class="column">
      <h1 class="title is-size-3 has-text-centered" v-text="title"> </h1>
    </div>
   </div>
    <Card />
  </div>

</template>

<script>
import Card from './components/Card.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Card,
    Header,
  },
  data() {
    return {
      title: 'Магазин электронной коммерции',
    };
  },
};
</script>

<style>

</style>
