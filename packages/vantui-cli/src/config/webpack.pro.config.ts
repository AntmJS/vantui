import getBase from './webpack.base.config.js'

export default async function getPro() {
  const baseConfig = await getBase('production')

  const proConfig = Object.assign(baseConfig, {
    mode: 'production',
    devtool: 'hidden-source-map',
  })

  return proConfig
}
