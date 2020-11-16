const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './main.js',
    devtool: 'source-map',
    output: {
        filename: './bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}