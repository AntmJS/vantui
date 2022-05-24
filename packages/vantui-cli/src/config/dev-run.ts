import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
// eslint-disable-next-line import/no-named-as-default
import webpack from 'webpack'
import Server from 'webpack-dev-server'
import getBase from './webpack.base.config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const devServer = {
  port: 7777,
  host: 'localhost',
  historyApiFallback: true,
  open: true,
  hot: true,
  static: {
    directory: path.join(__dirname, './dist'),
  },
}

export default async function run() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.env.NODE_ENV === 'development'
  const baseConfig = await getBase()
  const devConfig = Object.assign(baseConfig, {
    mode: 'development',
    devtool: 'eval',
    devServer,
  })

  const compiler = webpack(devConfig as any)
  const app = new Server(devServer, compiler)

  await app.start()
}
