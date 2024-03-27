const { defineConfig } = require('@vue/cli-service')
const fs = require('fs');
module.exports = defineConfig({
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  devServer: {
 // using proxy for CROCS localhost issue  
    proxy: {
      '^/api/auth': {
        target: 'http://localhost:5000/',
        ws: true,
        changeOrigin: true
      },
    }
  },
  transpileDependencies: true,
  lintOnSave: false,
})
