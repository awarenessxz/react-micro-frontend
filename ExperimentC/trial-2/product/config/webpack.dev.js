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
            publicPath: 'http://localhost:5002/'
        },
        devServer: {
            historyApiFallback: true,
            stats: 'errors-only',
            // turn on hot module replacement (HMR)
            hot: true,
            compress: true,
            open: true,
            openPage: 'productTeam',
            port: app.devServer.port,
            overlay: {
                errors: true,
                warnings: true
            }
        },
        plugins: [
            new ReactRefreshWebpackPlugin({
                overlay: false, // disable error overlay for hot reload
            }),
            new ForkTsCheckerWebpackPlugin()
        ]
    },
    util.generateSourceMap({ type: 'cheap-module-source-map' }),
    util.loadCSS(false)
]);
