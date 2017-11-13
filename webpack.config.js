const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractTextPlugin({
        filename: './stylesheet/[name].bundle.css',
        allChunks: true,
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new UglifyJsPlugin({
    extractComments: true,
  }));
} else {
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
  module.exports.devtool = 'source-map';
}
