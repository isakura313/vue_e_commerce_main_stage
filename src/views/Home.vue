<template>
  <div class="home">
    <section class="hero is-link">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"> {{ name }} </h1>
          <h2 class="subtitle">
            Огромные скидки на все
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home.vue',
  data() {
    return {
      name: 'E-commerce Project',
    };
  },
};
</script>

<style scoped>

</style>
