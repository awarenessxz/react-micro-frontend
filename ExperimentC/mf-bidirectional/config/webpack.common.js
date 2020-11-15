const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file, injects the script inside the HTML file and writes this file to dist/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const app = require('./wp-config');
const util = require('./wp-config-util');

// common webpack configuration (used by both development and production config)
module.exports = merge([
    {
        entry: {
            app: ['react-hot-loader/patch', app.paths.src]
        },
        resolve: {
            alias: {
                'react-dom': '@hot-loader/react-dom',
                path: 'path-browserify' // https://medium.com/@sanchit3b/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0
            },
            extensions: ['.tsx', '.ts', ".js"]
        },
        output: {
            path: app.paths.build,
            filename: '[name].js'
        },
        plugins: [
            new ModuleFederationPlugin({
                name: "app_mf_bidirectional",
                library: { type: "var", name: "app_mf_bidirectional" },
                filename: "remoteEntry.js",
                remotes: {},
                exposes: {
                    AllCardsPage: './src/pages/AllCardsPage'
                },
                shared: ['react', 'react-dom', 'react-router-dom']
            }),
            new HtmlWebpackPlugin({
                title: app.title,
                favicon: `${app.paths.assets}/favicon.ico`,
                template: `${app.paths.src}/index.html`,
                hash: true,
            })
        ],
    },
    util.loadJavascript({
        include: [app.paths.src],
        exclude: /node_modules/,
    }),
    util.loadImages({
        include: [app.paths.assets]
    }),
    util.extractBundle()
]);