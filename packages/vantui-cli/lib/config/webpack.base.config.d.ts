import htmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
export default function base(): Promise<{
  entry: {
    vant: string
    index: {
      import: string
      dependOn: string
    }
  }
  output: {
    filename: string
    path: string
  }
  stats: string
  resolve: {
    extensions: string[]
  }
  module: {
    rules: (
      | {
          test: RegExp
          loader: string
          exclude: RegExp
          options: {
            presets: (
              | string
              | (
                  | string
                  | {
                      targets: {
                        esmodules: boolean
                      }
                    }
                )[]
            )[]
          }
          use?: undefined
        }
      | {
          test: RegExp
          use: (
            | string
            | {
                loader: string
                options: {
                  postcssOptions: {
                    plugins: () => void
                  }
                }
              }
          )[]
          loader?: undefined
          exclude?: undefined
          options?: undefined
        }
      | {
          test: RegExp
          loader: string
          exclude?: undefined
          options?: undefined
          use?: undefined
        }
    )[]
  }
  plugins: (htmlWebpackPlugin | MiniCssExtractPlugin)[]
}>
