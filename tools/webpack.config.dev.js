var path = require('path');

module.exports = {
  module: {
    loaders: [{
        test: /\.tsx?$/,
        exclude: /(bower_components|node_modules)/,
        loader: 'ts'
    }],
  },
  entry: { app: './src/fb_frontend.tsx' },
  output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/src/",
      filename: "bundle.js"
  },
  ts: {
    configFileName: "tsconfig.json"
  },
  // See: https://github.com/hapijs/joi/issues/665
  node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty'
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.ts',
      '.tsx'
    ],
  },
  devServer: {
    historyApiFallback: {
      index: 'default.html',
    }
  }
};
