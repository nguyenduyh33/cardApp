module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: `http://localhost:3000/dist/`,
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0']
                }
            }
        ]
    },
    devServer: {
        port: 3000,
    }
};
