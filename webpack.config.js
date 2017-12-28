const webpack = require('webpack');
const path    = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackLaravelMixManifest = require('webpack-laravel-mix-manifest').default;

module.exports = {
  context: path.resolve(__dirname, 'resources'),
  entry: {
    main: './halcyon/main.js',
    theme_light: './styles/theme_light.scss',
    theme_dark: './styles/theme_dark.scss',
  },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.resolve(__dirname, 'public/packs'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
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
        use: 'file-loader',
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        exclude: /public/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin({
      filename: '[name]-[contenthash].bundle.css',
      allChunks: true,
    }),
    new WebpackLaravelMixManifest({
      filename: 'mix-manifest.json',
    }),
  ],
};
