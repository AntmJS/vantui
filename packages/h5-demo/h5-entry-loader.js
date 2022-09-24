module.exports = function (source) {
  this.cacheable = false
  const callback = this.async()

  source = source.replace(`'@antmjs/vantui'`, `'@antmjs/vantui/es/h5-index.js'`)

  callback(null, source)
}
