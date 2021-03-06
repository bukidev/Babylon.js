const path = require('path');

module.exports = {
    entry: {
        'test': __dirname + '/src/index.ts'
    },
    output: {
        libraryTarget: 'umd',
        library: 'BabylonViewer',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "babylonjs": __dirname + '/../../../dist/preview release/babylon.max.js',
            "babylonjs-materials": __dirname + '/../../../dist/preview release/materialsLibrary/babylonjs.materials.js',
            "babylonjs-loaders": __dirname + '/../../../dist/preview release/loaders/babylonjs.loaders.js',
            "pep": __dirname + '/../../assets/pep.min.js'
        }
    },
    externals: {
        // until physics will be integrated in the viewer, ignore cannon
        cannon: 'CANNON',
        oimo: 'OIMO',
        './Oimo': 'OIMO',
        "earcut": true
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        },
        {
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }
        },
        {
            test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            use: 'base64-image-loader?limit=1000&name=[name].[ext]'
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        //open: true,
        port: 9000
    }
}