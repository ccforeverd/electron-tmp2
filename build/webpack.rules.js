module.exports = [
  // Add support for native node modules
  {
    test: /\.node$/,
    use: 'node-loader'
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules'
      }
    }
  },
  // {
  //   test: /\.tsx?$/,
  //   exclude: /(node_modules|\.webpack)/,
  //   use: {
  //     loader: 'ts-loader',
  //     options: {
  //       transpileOnly: true
  //     }
  //   }
  // },
  {
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.s(c|a)ss$/,
    use: [
      // 'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          }
        }
      }
    ]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096 * 1024,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        }
        // loader: 'file-loader',
        // options: {
        //   name: 'fonts/[name].[ext]'
        // }
      }
    ]
  }
]
