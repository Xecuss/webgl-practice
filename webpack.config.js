let path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve('./src/main.ts'),
    output: {
        filename: 'index.js',
        path: path.resolve('./dist/')
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.glsl$/,
            loader: 'text-loader'
        }]
    }
}