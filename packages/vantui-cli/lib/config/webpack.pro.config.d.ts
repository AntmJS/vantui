export default function getPro(): Promise<
  {
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
    plugins: (
      | import('html-webpack-plugin')
      | import('mini-css-extract-plugin')
    )[]
  } & {
    mode: string
    devtool: string
  }
>
