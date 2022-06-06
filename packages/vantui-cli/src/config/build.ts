import Webpack from 'webpack'
import { WebpackConfiguration } from 'webpack-dev-server'
import getPro from './webpack.pro.config.js'

export default async function build() {
  process.env.NODE_ENV === 'production'
  const Con = await getPro()
  const compile = Webpack(Con as WebpackConfiguration)

  compile.run((err, stats) => {
    if (err) console.info(err)
    console.info(stats)
  })
}
