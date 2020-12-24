const path = require('path');

// contains configuration required for webpack to run
module.exports = {
    title: 'Purchase',
    paths: {
        // various sources and build paths
        src: path.join(__dirname, '../src'), // source path
        build: path.join(__dirname, '../build'), // dist or build output path
        assets: path.join(__dirname, '../assets') // assets path
    },
    devServer: {
        // rapid development related / setting for webpack dev server (link between webpack and embedded tomcat in springboot)
        port: 5002,
        contextPath: '/purchase',
        publicPath: 'http://0.0.0.0:5002/purchase'
    }
};