<template>
  <ul v-if="posts.results.length !== 0" id="pagenation" class="flex">
    <li>
      <nuxt-link v-if="posts.prev_page" :to="'/page/' + prevPageNumber">prev</nuxt-link>
      <span v-else>prev</span>
    </li>
    <li>
      <nuxt-link v-if="posts.next_page" :to="'/page/' + nextPageNumber">next</nuxt-link>
      <span v-else>next</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagenation",
  props: ["posts"],
  data() {
    return {
      currentPageNumber: null,
      nextPageNumber: null,
      prevPageNumber: null,
    };
  },
  created() {
    this.currentPageNumber = this.posts.page;
    this.nextPageNumber = this.currentPageNumber + 1;
    this.prevPageNumber = this.currentPageNumber - 1;
  }
}
</script>

<style lang="scss" scoped>
  ul#pagenation {
    justify-content: center;

    li {
      margin: 0 30px;
      letter-spacing: 0;
      font-size: 20px;

      a {
        text-decoration: underline;
        color: #000;
      }

      span {
        opacity: .5;
      }
    }
  }
</style>