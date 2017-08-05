const path = require("path");
const webpack = require("webpack");
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    entry: "./otp.js",
    output: {
        filename: "otp.min.js"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [ path.resolve(__dirname, "src"), ],
                test: /\.js$/,
                query: { presets: ['es2016'] }
            },
        ]
    },
    plugins: [
        new BabiliPlugin({})
    ]
};