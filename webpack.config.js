const webpack = require("webpack");

module.exports = {
  entry: {
    main: './src/index.tsx'
  },

  output: {
    path: __dirname + '/app/build',
    publicPath: 'build/',
    filename: 'bundle.js'
  },
  watch: true,
  target: 'electron-renderer',
  mode: "production",
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  plugins: [
    new webpack.ExternalsPlugin('commonjs', [
      'electron'
    ])
  ],

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          }
        ]
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
};