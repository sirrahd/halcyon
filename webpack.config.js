const path = require("path"),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      UglifyJsPlugin = require("uglifyjs-webpack-plugin");

/*--------------------------------------------
    Production environment (Defualt)
--------------------------------------------*/

if ( process.env.NODE_ENV === "production" ) {
    module.exports = [
        /* JS configure */
        {
            context: path.join(__dirname, "/resources/javascript/"),
            entry: {
                main: "./app.jsx",
            },
            output: {
                path: path.join(__dirname, "/public/javascript/"),
                filename: "[name].bundle.js"
            },
            module: {
                rules: [
                    {
                        enforce: "pre",
                        test: /\.(js|es6|jsx)$/,
                        exclude: /node_modules/,
                        use: "eslint-loader"
                    },{
                        test: /\.(js|es6|jsx)$/,
                        exclude: /node_modules/,
                        use: "babel-loader"
                    },{
                        test: /\.json$/,
                        loader: "json-loader"
                    }
                ],
            },
            plugins: [
                // JavaScript の Minify
                new UglifyJsPlugin({
                    filename: "[name].bundle.js",
                    extractComments: true,
                })
            ]
        /* CSS configure */
        },{
            context: path.join(__dirname, "/resources/stylesheet/"),
            entry: {
                theme_halcyon: "./theme_halcyon.scss",
                theme_mastodon: "./theme_mastodon.scss"
            },
            output: {
                path: path.join(__dirname, "/public/stylesheet/"),
                filename: "[name].bundle.css"
            },
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                "css-loader?minimize",
                                "sass-loader"
                            ],
                        })
                    }
                ],
            },
            plugins: [
                // CSS を output to the file
                new ExtractTextPlugin({
                    filename: "[name].bundle.css",
                    allChunks: true
                })
            ]
        }
    ];

/*--------------------------------------------
    Development environment
--------------------------------------------*/

} else if ( process.env.NODE_ENV === "development" ) {
    module.exports = [
        /* JS configure */
        {
            context: path.join(__dirname, "/resources/javascript/"),
            entry: {
                main: "./main.jsx",
            },
            output: {
                path: path.join(__dirname, "/public/javascript/"),
                filename: "[name].bundle.js"
            },
            module: {
                rules: [
                    {
                        enforce: "pre",
                        test: /\.(js|es6|jsx)$/,
                        exclude: /node_modules/,
                        use: "eslint-loader"
                    },{
                        test: /\.(js|es6|jsx)$/,
                        exclude: /node_modules/,
                        use: "babel-loader"
                    },{
                        test: /\.json$/,
                        loader: "json-loader"
                    }
                ],
            },
            devtool: "source-map",
        /* CSS configure */
        },{
            context: path.join(__dirname, "/resources/stylesheet/"),
            entry: {
                theme_halcyon: "./theme_halcyon.scss",
                theme_mastodon: "./theme_mastodon.scss"
            },
            output: {
                path: path.join(__dirname, "/public/stylesheet/"),
                filename: "[name].bundle.css"
            },
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                "css-loader?sourceMap",
                                "sass-loader?outputStyle=expanded"
                            ],
                        })
                    }
                ],
            },
            devtool: "source-map",
            plugins: [
                new ExtractTextPlugin({
                    filename: "[name].bundle.css",
                    allChunks: true
                })
            ]
        }
    ];
}
