const path = require('path');

const config = {
 entry: './source/app.js',
 output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js'
 },
 module: {
  rules: [
   {
    test: /\.js$/,
    use: {
     loader: 'babel-loader'
    }
   }
  ]
 }
}

module.exports = config;