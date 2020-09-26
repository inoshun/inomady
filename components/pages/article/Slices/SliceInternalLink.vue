<template>
  <nuxt-link class="internal_link" :to="'/' + uid">{{ title }}</nuxt-link>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";

export default {
  name: "slice-internal-link",
  props: ["slice"],
  data() {
    return {
      uid: "",
      title: ""
    };
  },
  mounted() {
    this.uid = this.slice.primary.internallink.uid;

    Prismic.getApi(PrismicConfig.apiEndpoint)
      .then(api => {
        return api.getByUID("blog_post", this.uid);
      })
      .then(post => {
        this.title = PrismicDOM.RichText.asText(post.data.title);
      });
  }
};
</script>

<style lang="scss">
.article_slice a.internal_link {
  display: inline-block;
  margin-bottom: 25px;
  padding: 20px 25px;
  background-color: $darkBlue;
  border-radius: 10px;
  text-decoration: none;
  color: #fff;
}

@media screen and (max-width: 768px) {
  .article_slice a.internal_link {
    margin-bottom: 15px;
    padding: 10px 15px;
  }
}
</style>
