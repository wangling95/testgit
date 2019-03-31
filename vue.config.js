const merge = require('webpack-merge')
const path = require('path')

module.exports = {
  // 它支持webPack-dev-server的所有选项
  devServer: {
    host: "localhost",
    port: 1111, // 端口号
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
  
    // 配置多个代理
    proxy: {
      "/v3": {
        target: "http://api.douban.com", // http://api.douban.com/v2/movie/top250
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/v3': ''
        }
      },
      "/v1": {
        target: "https://cnodejs.org/api",
        ws: true,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/v5': ''
        // },
        secure: false,
        headers: {
          Referer: 'https://cnodejs.org/api'
        }
      }
    }
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       'vue$': 'vue/dist/vue.esm.js'  // 修改vue运行形式为compiler
  //     }
  //   }
  // },
  // chainWebpack: config => {
  //   config.module
  //   .rule('scss')
  //   .use('sass-loader')
  //   .tap(options => 
  //     merge(options, {
  //       includePaths: [path.resolve(_dirname, 'node_modules')],
  //     })
  //   )
  // }
}