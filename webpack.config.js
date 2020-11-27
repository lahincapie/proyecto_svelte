const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ["*", ".mjs", ".js", ".svelte"],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
                },
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: "svelte-loader",
                },
            },
            {
                test: /\.(png|jpe?g|jpg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[hash].[ext]',
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
};
