const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const basedir = path.join(__dirname, 'playground');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    bristles: path.join(__dirname, 'src', 'index.ts'),
    playground: path.join(__dirname, 'playground', 'playground.js'),
  },
  output: {
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          { loader: 'ts-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.html'],
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./playground/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
};