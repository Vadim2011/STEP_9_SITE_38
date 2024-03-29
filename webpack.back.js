const configProd = {
  mode: 'production',
  entry: {
    index: './src/js/index.js',
    vendor: './src/js/vendor.js',
    // about: './src/js/about.js',
  },
  output: {
    filename: '[name].bundle.min.js',
  },
  module: {
    rules: [

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
          plugins: ["@babel/plugin-transform-runtime"]
        },
      }
    ],
  },

  devtool: false,
};

export default configProd;



