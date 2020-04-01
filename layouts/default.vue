<template>
  <div>
    <Header />
    <main class="common_layout">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/layouts/Header";
import Footer from "~/components/layouts/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped>
main {
  padding-top: 70px;
}

@media screen and (max-width: 768px) {
  main {
    padding-top: 50px;
  }
}
</style>
