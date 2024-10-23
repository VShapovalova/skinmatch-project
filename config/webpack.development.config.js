const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config');

const config = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]',
                                namedExport: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
    },
};

module.exports = merge(baseConfig, config);
