const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: __dirname + '/src/index.js',
  

  // OUTPUT DIRECTORY
  // output: {
  //   path: path.join(__dirname, 'public'),
  //   filename: 'bundle.js'
  // },
  // output: {
  //   path: __dirname + "/public",
  //   filename: "bundle.js",
  //   chunkFilename: '[name].js'
  // },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // PATH RESOLVE
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ["*", ".js", ".jsx"]
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    // contentBase: path.join(__dirname,'src')
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ],
  },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
};