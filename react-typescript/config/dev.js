module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      // host: 'localhost',
      port: 10086,
      proxy: {
        '/api': {
          target: 'http://localhost:8382',  // 服务端地址
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    },
  }
}
