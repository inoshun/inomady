<template>
  <div class="gist" v-html="gistCode"></div>
</template>

<script>
import PrismicDOM from "prismic-dom";

export default {
  name: "slice-gist",
  props: ["slice"],
  data() {
    return {
      gistCode: ""
    };
  },
  methods: {
    runScript() {
      const scripts = this.$el.querySelectorAll("script");
      scripts.forEach(script => {
        const parentNode = script.parentNode;
        let alternativeNode;
        if (script.src.indexOf("https://gist.github.com/") !== -1) {
          alternativeNode = document.createElement("iframe");
          alternativeNode.src = URL.createObjectURL(
            new Blob(["<!DOCTYPE html><title></title>" + script.outerHTML], {
              type: "text/html"
            })
          );
          alternativeNode.onload = () => {
            alternativeNode.height =
              alternativeNode.contentDocument.body.scrollHeight;
          };
        } else {
          alternativeNode = document.createElement("script");
          alternativeNode.src = script.src;
        }
        parentNode.replaceChild(alternativeNode, script);
      });
    }
  },
  mounted() {
    this.gistCode = PrismicDOM.RichText.asText(this.slice.primary.gistcode);
    this.runScript();
  },
  updated() {
    this.runScript();
  }
};
</script>

<style lang="scss">
.gist {
  margin-bottom: 10px;
  iframe {
    width: 100%;
    border: none;
  }
}
</style>
