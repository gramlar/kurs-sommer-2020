const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

module.exports = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: `${packageJson.name}.js`,
    jsonpFunction: `${packageJson.name}Jsonp`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
