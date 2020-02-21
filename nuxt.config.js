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
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/style.scss',
    '@/assets/css/common.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/link-resolver.js",
    "~/plugins/html-serializer.js",
    "~/plugins/prismic-vue.js"
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    styleResources: {
      scss: [
        './assets/variables.scss'
      ]
    },
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
