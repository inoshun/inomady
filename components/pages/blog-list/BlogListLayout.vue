<template>
  <section>
    <div class="container">
      <BlogList :posts="postsData" />
      <Pagenation :posts="blogPosts" />
    </div>
  </section>
</template>

<script>
import BlogList from "~/components/pages/blog-list/BlogList";
import Pagenation from "~/components/pages/blog-list/Pagenation";

export default {
  name: "blog-list-layout",
  props: ["blogPosts"],
  components: {
    BlogList,
    Pagenation
  },
  data() {
    return {
      postsData: null,
    }
  },
  created() {
    this.postsData = this.blogPosts.results;
  }
}
</script>
