<template>
  <prismic-rich-text :htmlSerializer="HtmlSerializer" :field="slice.primary.text" />
</template>

<script>
import HtmlSerializer from "~/plugins/html-serializer.js"

export default {
  name: "slice-rich-text",
  props: ["slice"],
  data() {
    return {
      HtmlSerializer
    }
  },
}
</script>
