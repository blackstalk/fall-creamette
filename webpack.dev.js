const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  // Use the compiler-included build of Vue
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },

  output: {
    publicPath: "http://localhost:8080/"
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            js: "babel-loader"
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  // cheap-module-eval-source-map is faster for development
  devtool: "#cheap-module-eval-source-map"
})
