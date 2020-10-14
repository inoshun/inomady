const PrismicConfig = require("./prismic.config");

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "当ブログ「inomady」では、主にヨーロッパを旅しながらリモートで働く僕が、現地での体験や働き方など様々なテーマで記事を書いています。ヨーロッパでの生活やリモートワークに興味のある方はぜひ読んでみてください。"
      }
    ],
    link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "' +
          PrismicConfig.apiEndpoint +
          '"} }'
      },
      { src: "//static.cdn.prismic.io/prismic.min.js" }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: false,
  /*
   ** Global CSS
   */
  css: ["@/assets/style/style.scss", "@/assets/style/common.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/link-resolver.js",
    "~/plugins/html-serializer.js",
    "~/plugins/prismic-vue.js",
    "~/plugins/set-min-height.client.js",
    "~/plugins/fit-img.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-149531425-1'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  styleResources: {
    scss: ["@/assets/style/variables.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  },
  /*
  ** 301redirect
   */
  serverMiddleware: [
    '~/redirect-to-inoshunnomad.com.js',
    'redirect-ssl'
  ]

};
