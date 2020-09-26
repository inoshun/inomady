<template>
  <article>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="flex article_info">
        <p class="date">{{ date }}</p>
        <CategoryList :categories="categories" />
      </div>
      <div class="thumbnail">
        <img class="cover_img" :src="thumbnailUrl" />
      </div>
      <ArticleContent :slices="slices" />
    </div>
  </article>
</template>

<script>
import PrismicDOM from "prismic-dom";
import LinkResolver from "~/plugins/link-resolver.js";
import CategoryList from "./CategoryList";
import ArticleContent from "./ArticleContent";

export default {
  name: "blog-article",
  components: {
    CategoryList,
    ArticleContent
  },
  props: ["post"],
  data() {
    return {
      title: "",
      date: "",
      categories: [],
      thumbnailUrl: "",
      slices: []
    };
  },
  created() {
    this.title = PrismicDOM.RichText.asText(this.post.data.title);
    this.date = this.post.data.date;
    this.categories = this.post.data.categories;
    this.thumbnailUrl = this.post.data.thumbnail.url;
    this.slices = this.post.data.body;
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 15px;
  border-bottom: 2px solid;
  font-size: 28px;
  font-weight: 500;
}
.article_info {
  width: 100%;
  margin-bottom: 20px;
  .date {
    margin-right: 15px;
  }
}
.thumbnail {
  width: 100%;
  height: 500px;
  margin-bottom: 40px;
}

@media screen and (max-width: 768px) {
  h1 {
    margin-bottom: 10px;
    font-size: 20px;
  }
  .article_info {
    margin-bottom: 15px;
  }
  .thumbnail {
    height: 200px;
    margin-bottom: 25px;
  }
}
</style>
