const webpack = require('webpack');
const path    = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/resources/'),
  entry: {
    main: './javascript/main.js',
  },
  output: {
    path: path.join(__dirname, '/public/assets/'),
    filename: '[name].bundle.js',
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
        exclude: /public\/assets/,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /public\/assets/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.es6', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      filename: '../dev.html',
      template: path.resolve(__dirname, 'resources/template.html'),
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(new UglifyJsPlugin({
    extractComments: true,
  }));
} else if (process.env.NODE_ENV === 'development') {
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
  module.exports.devtool = 'source-map';
  module.exports.devServer = {
    hot: true,
    open: true,
    inline: true,
    index: 'dev.html',
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: {
      rewrites: [
        {
          from: /\.*/,
          to() {
            return 'dev.html';
          },
        },
      ],
    },
  };
}
