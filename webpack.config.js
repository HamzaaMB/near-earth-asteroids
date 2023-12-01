const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[contenthash].bundle.js",
    publicPath: "/",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      favicon: false,
      cache: true
    }),
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      publicPath: "/",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: "IE 11" }],
            ],
          },
        },
      },

      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json", ".wasm"],
  },
};
