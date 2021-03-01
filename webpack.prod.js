const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    resolve: {
        extensions: ['.jsx', '.js']
    },
    mode: 'production',
    // entry point for sources
    entry: {
        main: "./src/index.jsx",
        //   contact: "./src/contact.js"
    },
    output: {
        filename: "[name].js", // output files
        path: path.resolve(__dirname, "dist") // absolute path from current folder(__dirname)
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Production',
        templateContent: `
        <html>
          <body>
            <div id=target></div>
          </body>
        </html>
      `
    })],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {
        // LOADERS ARE HERE!
        rules: [
            // Each is an object with tree main properties:
            {
                test: /\.js$/, // file type to accept
                exclude: /(node_modules)/, // stay away
                use: { // loader from node_modules
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            generator: (content) => svgToMiniDataURI(content.toString()),
                        }
                    }
                ]
            }
        ]
    }
}