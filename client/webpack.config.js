const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      //Generate HTML file and inject bundles
      new HtmlWebpackPlugin({
        template:'./index.html',
        title: 'Notes'
      }),

      //Inject Service Worker
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js'
      }),

      //Create Manifest
      new WebpackPwaManifest({
        fingerprints: false, 
        inject:true, 
        name: 'Notes',
        description: 'Create Some Notes',
        background_color:'#fff',
        theme_color:'#000',
        start_url:'./',
        publicPath:'./',
        icons: [
          {
            src: '',
            sizes:[],
            destination: ''
          }
        ]
      })
      
    ],

    module: {
      //CSS Loaders
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          //Babel
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            option: {
              presets:['@babel/preset-env'],
              plugins:['@babel/plugin-proposal-object-rest-spread','@babel/transform-runtime']
            },
          },
        }, 
      ],
    },
  };
};
