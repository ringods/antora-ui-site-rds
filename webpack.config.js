const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/site.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
         ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new FileManagerPlugin({
            events: {
                onEnd: [
                    {
                        move: [
                            {
                                source: 'build/main.css',
                                destination: 'build/css/main.css'
                            }
                        ]
                    },
                    {
                        copy: [
                            {
                                source: 'src/**/*.hbs',
                                destination: 'build/'
                            },
                            {
                                source: 'src/helpers/*.js',
                                destination: 'build/helpers'
                            }
                        ]
                    },
                    {
                        archive: [
                            {
                                source: './build',
                                destination: 'ui-bundle.zip',
                                options: { globOptions: { nomount: true } },
                            },
                        ]
                    }
                ]
            }
        }),
        new CleanWebpackPlugin(),
    ]
}
