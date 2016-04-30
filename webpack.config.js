var path = require('path');
var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, "./"),
  entry: {
    "sgdd-app": ["./sgdd-app/index.js"],
    "default": ["./src/config/default/index.js"]
  },  
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].entry.js"
  },
  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: path.join(__dirname, "build")
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'sgdd-app'),
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: "babel-loader",
        query: {
            presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.styl/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!stylus-loader'
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),    
    new CopyWebpackPlugin([
      { from: 'src/', to: 'src/' },
    ])
  ]
}