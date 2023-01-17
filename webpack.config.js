const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: './js/main.js', //어디에서부터 파일을 읽는지(경로,주의점은 js를 경로로 한다.)
  output: { //결과물을 반환하는 설정, 주석처리해도 같은 결과가 나오는건 디폴트로 설정되어있어서임. 
    // path: path.resolve(__dirname, 'dist'), //상대경로는 읽지 못하기때문에 절대경로로 해줘야한다.
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test:/\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ]
}