const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  publicPath: '/313devgrp/vue/dist/',
  transpileDependencies: true,
  assetsDir: 'assets',
  productionSourceMap: false,
  chainWebpack: config => {
    config.output.chunkFilename(`[id].[chunkhash:8].js`);
    config.plugins.delete('prefetch');
    config.resolve.alias.set('@', path.resolve(__dirname, 'src/'));
    config.module.rule('images').set('parser', {
      dataUrlCondition: {
        maxSize: 4 * 1024,
      },
    });
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
				@import "@/assets/scss/reset.scss";
				@import "@/assets/scss/common.scss";
				`,
      },
    },
  },
});
