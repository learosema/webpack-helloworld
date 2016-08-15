var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { cacheDirectory: true, presets: ['es2015'], plugins: ['transform-runtime']}}
        ]
    }
    
}