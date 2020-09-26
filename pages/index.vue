<template>
  <BlogListLayout :blogPosts="blogPosts" />
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import BlogListLayout from "~/components/pages/blog-list/BlogListLayout";

export default {
  components: {
    BlogListLayout
  },
  async asyncData({ context, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const blogPosts = await api.query(
        Prismic.Predicates.at("document.type", "blog_post"),
        { orderings: "[my.blog_post.date desc]", pageSize: 10 }
      );

      return {
        blogPosts,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
