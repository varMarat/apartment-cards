
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/styles.scss";`
      }
    }
  },
  publicPath: "/apartment-cards/"
};