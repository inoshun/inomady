<template>
  <div>
    <BlogArticle v-if="post" :post="post" />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDOM from "prismic-dom";
import PrismicConfig from "~/prismic.config.js";
import BlogArticle from "~/components/pages/article/BlogArticle";

export default {
  components: {
    BlogArticle
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        }
      ]
    };
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      const post = await api.getByUID("blog_post", params.uid);

      console.log(post);

      return {
        post: post
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {
    description() {
      if (this.post) {
        return this.post.data.description;
      } else {
        return "Page not found";
      }
    },
    title() {
      if (this.post) {
        return PrismicDOM.RichText.asText(this.post.data.title);
      } else {
        return "Page not found";
      }
    }
  }
};
</script>
