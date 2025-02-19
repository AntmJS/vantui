module.exports = {
  name: 'antmjs.vantui',
  compiler: 'babel',
  build: {
    srcDir: 'src',
    namedExport: true,
    skipInstall: ['lazyload'],
    packageManager: 'yarn',
  },
}
