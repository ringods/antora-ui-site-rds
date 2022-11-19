const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/site.js'
    },
    plugins: [
        new FileManagerPlugin({
            events: {
                onEnd: [
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
        })
    ]
}
