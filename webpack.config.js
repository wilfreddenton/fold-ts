const path = require('path')

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.browser.json'
        }
      }],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'fold.js',
    library: 'fold',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true
  }
}
