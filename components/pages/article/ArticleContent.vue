<template>
  <div>
    <div
      class="article_slice"
      v-for="(slice, index) in slices"
      :key="'slice-' + index"
    >
      <SliceRichText v-if="slice.slice_type === 'text'" :slice="slice" />
      <SliceQuote v-if="slice.slice_type === 'quote'" :slice="slice" />
      <SliceInternalLink
        v-if="slice.slice_type === 'internal_link'"
        :slice="slice"
      />
      <SliceGist v-if="slice.slice_type === 'githubgist'" :slice="slice" />
      <SliceEmbedCode v-if="slice.slice_type === 'embed_code'" :slice="slice" />
    </div>
  </div>
</template>

<script>
import SliceRichText from "./Slices/SliceRichText";
import SliceQuote from "./Slices/SliceQuote";
import SliceInternalLink from "./Slices/SliceInternalLink";
import SliceGist from "./Slices/SliceGist";
import SliceEmbedCode from "./Slices/SliceEmbedCode";

export default {
  name: "article-content",
  props: ["slices"],
  components: {
    SliceRichText,
    SliceQuote,
    SliceInternalLink,
    SliceGist,
    SliceEmbedCode
  }
};
</script>

<style lang="scss">
.article_slice {
  p {
    margin-bottom: 25px;
    line-height: 2.2;
  }
  a {
    font-style: italic;
    text-decoration: underline;
    color: #000;
  }
  h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-decoration: underline;
    font-style: italic;
    font-size: 28px;
    font-weight: bold;
  }
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
    text-decoration: underline;
    font-size: 24px;
    font-weight: 500;
  }
  .block-img img {
    width: auto;
    max-width: 100%;
    height: auto;
  }
  ul {
    margin-bottom: 25px;
    li {
      line-height: 2;
      &::before {
        content: "・";
      }
    }
  }
  ol {
    margin-bottom: 25px;
    counter-reset: number 0;
    li {
      line-height: 2;
      &::before {
        counter-increment: number 1;
        content: counter(number);
        padding-right: 5px;
        font-weight: 700;
      }
    }
  }

  .quote_box {
    position: relative;
    margin-bottom: 25px;
    padding: 20px;
    background-color: lightgrey;

    &::before,
    &::after {
      position: absolute;
      font-size: 30px;
    }

    &::before {
      top: 0px;
      left: 10px;
      content: "“";
    }

    &::after {
      bottom: -15px;
      right: 7px;
      content: "”";
    }

    .quote p {
      font-style: italic;
    }

    .quote_source p {
      margin-bottom: 0;
    }
  }

  .embed_code {
    margin-bottom: 25px;

    iframe {
      max-width: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .article_slice {
    p {
      margin-bottom: 10px;
    }
    h2 {
      margin-top: 20px;
      font-size: 18px;
    }
    h2 {
      margin-top: 20px;
      font-size: 17px;
    }
    ul {
      margin-bottom: 10px;
    }
    ol {
      margin-bottom: 10px;
    }

    .quote_box {
      margin-bottom: 10px;
      padding: 10px 15px;

      &::before {
        top: -7px;
        left: 5px;
      }

      &::after {
        bottom: -22px;
        right: 4px;
      }
    }

    .embed_code {
      margin-bottom: 10px;
    }
  }
}
</style>
