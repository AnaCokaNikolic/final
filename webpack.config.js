
const path = require(`path`);
const HtmlWebPackPlugin = require(`html-webpack-plugin`);
const FaviconsWebpackPlugin = require(`favicons-webpack-plugin`);

module.exports = {
  entry: {
      main: `./src/index.js`,
    },
    output: {
      path: path.resolve(__dirname, `dist`),
      filename: `[name].bundle.js`,
    },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: `html-loader`,
          options: {minimize: true},
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          `file-loader`,
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          `style-loader`,
          `css-loader`,
          `sass-loader`,
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `./src/index.html`,
      filename: `./index.html`,
    }),
    new FaviconsWebpackPlugin(`./src/images/favicon.png`),
  ],
};
