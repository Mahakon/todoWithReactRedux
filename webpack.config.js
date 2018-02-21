const path = require('path');

module.exports = {
    entry: './src/scripts/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist/scripts')
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: ['env'],
                        plugins: ['transform-react-jsx']
                    }
                }
            }
        ]
    }

};