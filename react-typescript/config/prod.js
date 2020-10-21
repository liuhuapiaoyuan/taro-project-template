module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    publicPath: '/',
    //防止缓存
    output: {
      filename: 'js/[name].[hash:3].js',
      chunkFilename: 'js/[name].[chunkhash:3].js'
    },
    imageUrlLoaderOption: {
      limit: 5000,
      name: 'static/images/[name].[hash:3].[ext]'
    },
    miniCssExtractPluginOption: {
      filename: 'css/[name].[hash:3].css',
      chunkFilename: 'css/[name].[chunkhash:3].css',
    },
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
