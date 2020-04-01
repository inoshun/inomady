<template>
  <li>
    <nuxt-link :to="link">
      <div class="thumbnail">
        <img class="cover_img" :src="thumbnailUrl" />
      </div>
      <div class="article_info flex">
        <h2>{{ title }}</h2>
        <p class="date">{{ date }}</p>
        <CategoryList :categories="categories" />
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import PrismicDOM from "prismic-dom";
import LinkResolver from "~/plugins/link-resolver.js";
import CategoryList from "./CategoryList";

export default {
  name: "blog-widget",
  components: {
    CategoryList
  },
  props: ["post"],
  data() {
    return {
      link: "",
      title: "",
      date: "",
      categories: [],
      thumbnailUrl: ""
    };
  },
  created() {
    this.link = LinkResolver(this.post);
    this.title = PrismicDOM.RichText.asText(this.post.data.title);
    this.date = this.post.data.date;
    this.categories = this.post.data.categories;
    this.thumbnailUrl = this.post.data.thumbnail.url;
  }
};
</script>

<style lang="scss" scoped>
a {
  display: block;
  width: 100%;
}

.thumbnail {
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
}

.article_info {
  color: #000;

  h2 {
    width: 100%;
    margin-bottom: 8px;
    font-size: 20px;
  }

  .date {
    margin-right: 10px;
    letter-spacing: 0;
  }
}

@media screen and (max-width: 768px) {
  .thumbnail {
    height: 200px;
    margin-bottom: 10px;
  }

  .article_info {
    h2 {
      margin-bottom: 5px;
      font-size: 18px;
    }

    .date {
      margin-right: 5px;
    }
  }
}
</style>
