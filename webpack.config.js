const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const pkg = require('./package.json');

const { name, version, description, homepage } = pkg;
const isProd = process.env.NODE_ENV === 'production';

const banner = `
${name} - ${version}
Responsive scroll slider

${homepage}
`;

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    'scroll.carousel': ['./src/js/index.js', './src/scss/main.scss']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].min.js' : '[name].js',
    publicPath: '/dist',
    clean: true
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].min.css' : '[name].css'
    }),
    new webpack.BannerPlugin({
      banner
    })
  ],
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: ['babel-plugin-add-module-exports']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Extract CSS
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false
            }
          },
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin({
        include: /\.min\.css/,
        parallel: true,
        minify: CssMinimizerPlugin.cleanCssMinify,
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      }),
      new TerserPlugin({
        include: /\.min\.js/,
        parallel: true,
        minify: TerserPlugin.terserMinify,
        terserOptions: {
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  devtool: isProd ? false : 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'example')
    },
    watchFiles: ['./src/**/*'],
    open: true,
    hot: true
  }
};

