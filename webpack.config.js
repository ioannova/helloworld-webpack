const path = require('path')

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: {
        main: './src/index.js',
        segundo: './src/js/segundo.js'
    },
    output: {
        filename: '[name]-bundle.js',
        path: path.resolve(__dirname, 'site')
    },
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|gif|png|svg)$/,
                use: ['file-loader']
            }
        ]
    },
    devServer: {
        contentBase: './site',
        port: 8080
    }
}