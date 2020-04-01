<template>
  <li>{{ name }}</li>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  name: "category-list-item",
  props: ["id"],
  data() {
    return {
      name: ""
    };
  },
  mounted() {
    Prismic.getApi(PrismicConfig.apiEndpoint)
      .then(api => {
        return api.getByID(this.id);
      })
      .then(document => {
        this.name = document.data.name;
      });
  }
};
</script>

<style lang="scss" scoped>
li {
  opacity: .7;
  margin-right: 3px;
  font-style: italic;
  font-size: 14px;

  &::after {
    content: ",";
  }

  &:last-of-type::after {
    content: "";
  }
}
</style>
