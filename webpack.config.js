const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '/resources/'),
  // TODO: ExtractTextWebpackPlugin genelates empty .JS file on ./public/stylesheet
  entry: {
    app: './javascript/app.jsx',
    theme_light: './stylesheet/theme_light.scss',
    theme_dark: './stylesheet/theme_dark.scss',
  },
  output: {
    path: path.join(__dirname, '/public/'),
    filename: './javascript/[name].bundle.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },{
        test: /\.json$/,
        use: 'json-loader'
      },{
        test: /\.(js|es6|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },{
        test: /\.css$/,
        exclude: /public/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.es6', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery'
    }),
    new ExtractTextPlugin(
      './stylesheet/[name].bundle.css',{
      allChunks: true
    })
  ]
}

/*--------------------------------------------
  Production environment (Defualt)
--------------------------------------------*/
if ( process.env.NODE_ENV === 'production' ) {
  module.exports.plugins.push(
    new UglifyJsPlugin({
      filename: '[name].bundle.js',
      extractComments: true,
    })
  );
  module.exports.module.rules.push(
    {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader?minimize',
          'sass-loader'
        ],
      })
    }
  );

/*--------------------------------------------
  Development environment
--------------------------------------------*/
} else if ( process.env.NODE_ENV === 'development' ) {
  module.exports.devtool = 'source-map';
  module.exports.module.rules.push(
    {
      test: /\.(scss|sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ],
      })
    }
  );
}
