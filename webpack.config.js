const path = require("path")
module.exports = {
    entry: {
        employee:'./JS/index.js',
        addEmployee:'./JS/script1.js'
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "webpack-output")
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js)$/,
                use: ["babel-loader"]

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    mode:"development",

}