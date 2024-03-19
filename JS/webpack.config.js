let path = require("path")
const HTML = require("html-webpack-plugin")
module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: "./index.js",
        contact: "./contact.js"
    },  
      output: {
        filename: "./js/[name].js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true,
    devServer: {
        hot: true,
        static: {
            directory: "./dist",
            watch: true 
        }
    },
    plugins : [
        new HTML(),
        new HTML({
            title: 'Test',
            assets: "./index.html",
            filename: "./dist/index.html"
        })
    ],
    module: {
        loaders: [
            {test : /\.html%}
        ]
    }

}