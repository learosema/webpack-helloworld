module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.js$/, loader: 'babel', exclude: /(node_modules|bower_components)/, query: { presets: ['es2015'], plugins: ['transform-runtime']}}
        ]
    }
    
}