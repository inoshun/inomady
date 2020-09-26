<template>
  <div>
    <ul v-if="posts.length !== 0" class="flex">
      <BlogWidget v-for="post in posts" :key="post.id" :post="post" />
    </ul>
    <p v-else class="no_posts">記事が存在しません</p>
  </div>
</template>

<script>
import BlogWidget from "~/components/pages/blog-list/BlogWidget";

export default {
  name: "blog-list",
  props: ["posts"],
  components: {
    BlogWidget
  }
};
</script>

<style lang="scss" scoped>
ul {
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;

  li {
    width: 46.5%;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 768px) {
  ul {
    margin-bottom: 20px;
    
    li {
      width: 100%;
      margin-bottom: 35px;
    }
  }
}
</style>
