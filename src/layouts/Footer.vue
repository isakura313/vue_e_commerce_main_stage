<template>
  <footer class="footer has-background-black has-text-white" id="footer_main">
    <div class="content has-text-centered">
      <p>
        <a v-bind:href="path"> {{ name }}</a>

      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer.vue',
  data() {
    return {
      path: 'https://ozonns.ru/',
      name: 'Ozon New Skills',
    };
  },
};
</script>

<style scoped>
#footer_main {
  margin-top: 20em;
  padding-bottom: 1em;
}
</style>
