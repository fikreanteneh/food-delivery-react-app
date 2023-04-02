const path = require('path');

module.exports = {
    mode: "development", 
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },

    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true,

    },
    resolve:{
        extensions: [".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
        
            {
                test: /\.css?$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png)$/,
                use: "file-loader"
            }
            ],
    }

}