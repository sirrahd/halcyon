const path = require("path"),
ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        context: path.join(__dirname, "/resources/javascript/"),
        entry: {
            main: "./main.jsx",
        },
        output: {
            path: path.join(__dirname, "/public/javascript/"),
            filename: "[name].js"
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
                }
            ],
        },
        devtool: "source-map",
    },{
        context: path.join(__dirname, "/resources/stylesheet/"),
        entry: {
            theme_halcyon: "./theme_halcyon.scss",
            theme_mastodon: "./theme_mastodon.scss"
        },
        output: {
            path: path.join(__dirname, "/public/stylesheet/"),
            filename: "[name].css"
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
                filename: "[name].css",
                allChunks: true
            })
        ]
    }
];

/**

if ( KANKYOU === "production" ) {
    module.exports.plugins.push(
        new UglifyJsPlugin({
          extractComments: true,
        })
    )
} else {
    module.export.devtool = "source-map" // これ配列
}

**/
