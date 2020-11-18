const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require("webpack-merge");
const app = require('./wp-config');
const util = require('./wp-config-util');
const baseConfig = require('./webpack.common');

module.exports = merge([
    baseConfig,
    {
        mode: "development",
        resolve: {
            symlinks: false // for yarn link to work
        },
        output: {
            devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
            publicPath: 'http://localhost:4000/'
        },
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',
            // turn on hot module replacement (HMR)
            hot: true,
            compress: true,
            open: true,
            port: app.devServer.port,
            overlay: {
                errors: true,
                warnings: true
            }
        },
        plugins: [
            new ReactRefreshWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin()
        ]
    },
    util.generateSourceMap({ type: 'cheap-module-source-map' }),
    util.loadCSS(false)
]);
