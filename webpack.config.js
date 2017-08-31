const path = require("path"),
ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
    {
        entry: {
            main: "./app/javascript/main.jsx",
        },
        output: {
            path: path.join(__dirname, "/public/javascript/"),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    enforce: "pre",
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: "eslint-loader"
                },{
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                }
            ],
        },
        devtool: "source-map",
    },{
        entry: {
            theme_halcyon: "./app/stylesheet/theme_halcyon.scss",
            theme_mastodon: "./app/stylesheet/theme_mastodon.scss"
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
                        use: [
                            "css-loader",
                            "sass-loader?outputStyle=expanded"
                        ],
                        fallback: "style-loader"
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
]
