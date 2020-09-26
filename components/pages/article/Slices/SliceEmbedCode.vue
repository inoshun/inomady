<template>
  <div class="embed_code" v-html="embedCode"></div>
</template>

<script>
import PrismicDOM from "prismic-dom";

export default {
  name: "slice-embed-code",
  props: ["slice"],
  data() {
    return {
      embedCode: ""
    };
  },
  mounted() {
    this.embedCode = PrismicDOM.RichText.asText(this.slice.primary.embedcode);
  }
};
</script>
