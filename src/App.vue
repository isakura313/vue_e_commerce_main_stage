<template>
  <div class="wrapper">
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

export default {
  name: 'App',
  components: {
    Card,
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
