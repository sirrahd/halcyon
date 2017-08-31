const path = require("path");
/* const webpack = require("webpack"); */
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
maintener note:
entry
*/

module.exports = {
    entry: [
        "./app/javascript/main.jsx",
        /* "./app/stylesheet/theme_halcyon.scss"
        "./app/stylesheet/theme_mastodon.scss" */
    ],
    output: {
        path: path.join(__dirname, "/public"),
        filename: "./javascript/[name].js"
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
            },{
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
            filename: "./stylesheet/[name].css",
            allChunks: true
        })
    ]
};
