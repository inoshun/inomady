<template>
  <div class="quote_box">
    <prismic-rich-text class="quote" :field="slice.primary.quote" />
    <prismic-rich-text class="quote_source" :field="slice.primary.quotesource" />
  </div>
</template>

<script>
export default {
  name: "slice-quote",
  props: ["slice"],
}
</script>