<template>
  <div>
    <BlogArticle :post="post" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import BlogArticle from "~/components/pages/article/BlogArticle";

export default {
  components: {
    BlogArticle
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const post = await api.getByUID("blog_post", params.uid);

      return {
        post: post
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
