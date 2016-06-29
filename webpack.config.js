const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    path: './assets',
    filename: 'solder.js'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' + 'less?sourceMap'
        )
      }
    ]
  },

  externals: {
    'immutable': 'Immutable',
    'moment': 'moment',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    'redux': 'Redux',
    'superagent': 'superagent'
  },

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },

  plugins: [
    new ExtractTextPlugin(
      'solder.css'
    )
  ]
};
