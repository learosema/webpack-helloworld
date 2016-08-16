var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
            { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { cacheDirectory: true, presets: ['es2015'], plugins: ['transform-runtime']}}
        ]
    },
    postcss: function() { return [autoprefixer] }
}