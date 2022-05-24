import Webpack from 'webpack'
import getPro from './webpack.pro.config.js'

export default async function build() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  process.env.NODE_ENV === 'production'
  const Con = await getPro()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const compile = Webpack(Con as any)

  compile.run((err, stats) => {
    if (err) console.info(err)
    console.info(stats)
  })
}
