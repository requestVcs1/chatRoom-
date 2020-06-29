const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 100, //基准大小 baseSize，需要和rem.js中相同
})
module.exports = {
  devServer: {
    proxy: 'http://localhost:7001',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '@/assets/sass/index.scss';`,
      },
      postcss: {
        plugins: [postcss],
      },
    },
  },
}
