const HtmlWebpackPlugin = require('html-webpack-plugin'); // generates an HTML file, injects the script inside the HTML file and writes this file to dist/index.html
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const app = require('./wp-config');
const util = require('./wp-config-util');

// common webpack configuration (used by both development and production config)
module.exports = merge([
    {
        entry: `${app.paths.src}/index.tsx`,
        resolve: {
            alias: {
                path: 'path-browserify' // https://medium.com/@sanchit3b/how-to-polyfill-node-core-modules-in-webpack-5-905c1f5504a0
            },
            extensions: ['.tsx', '.ts', '.js', '.json']
        },
        output: {
            path: app.paths.build
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'app_purchase',
                library: { type: 'var', name: 'app_purchase' },
                filename: 'remoteEntry.js',
                remotes: {
                    app_home: 'app_home'
                },
                exposes: {
                    './routes': `${app.paths.src}/utils/routes`,
                    './AddItemToCartButton': `${app.paths.src}/components/AddItemToCartButton`,
                    './CartButton': `${app.paths.src}/components/CartButton`,
                    './reduxStore': `${app.paths.src}/redux/redux-store`,
                    './reduxReducer': `${app.paths.src}/redux/root-reducer`
                },
                shared: [{ react: { 'singleton': true } }, 'react-dom', 'react-router-dom', 'react-redux', 'redux-thunk']
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
        exclude: /node_modules/
    }),
    util.loadImages({
        include: [app.paths.assets]
    })
]);