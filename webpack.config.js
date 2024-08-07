// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.js',
  // disabling cache in watch mode 
  cache: false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'public/[name][ext]',
  },
  devServer: {
    open: true,
    host: 'localhost',
    static: {                               
      directory: path.join(__dirname, './'),  
      watch: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler,'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
        sideEffects: true,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|pdf|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
