const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/resources/'),
  entry: {
    main: './javascript/main.js',
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: './javascript/[name].bundle.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /public/,
        use: 'url-loader',
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /public/,
        use: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.es6', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      axios: 'axios',
    }),
    new ExtractTextPlugin(
      './stylesheet/[name].bundle.css',
      {
        allChunks: true,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    inline: true,
    hot: true,
    open: true,
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: {
      rewrites: [
        {
          from: /\.*/,
          to() {
            return 'index.html';
          },
        },
      ],
    },
  },
};
