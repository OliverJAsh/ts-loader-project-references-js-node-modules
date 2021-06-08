module.exports = {
  entry: "./app/index.ts",
  resolve: {
    extensions: ['.ts']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            projectReferences: true,
            logLevel: 'info',
          },
        },
      },
    ],
  },
};
