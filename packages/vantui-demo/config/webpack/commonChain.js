module.exports = function (chain) {
  // taro内部的配置：scriptRule.exclude = [filename => /css-loader/.test(filename) || (/node_modules/.test(filename) && !(/taro/.test(filename)))];
  // 下面重写exclude的配置，部分三方包需要babel，包括taro、@antmjs等
  // 根据exclude可以看出，千万不要在项目名称上面带上taro字样，否则所有引用到node_modules的包都会重新被编译一次
  // 以下配置将不再使用usage配置，因为根据小程序官方描述，ios9开始基本都已支持了，浏览器可以使用polyfill.io 国内可以用阿里云版的，index.html有引用

  /*
   * 如果babel.config.js设置useBuiltIns:usage
   * /tarojs[\\/](runtime|shared|plugin-platform|components)/.test(filename) 应该被exculde
   * /tarojs[\\/](runtime|shared|plugin-platform)/.test(filename) 应该单独babel 且设置useBuiltIns:false
   */
  chain.module
    .rule('script')
    .exclude.clear()
    .add(
      (filename) =>
        /css-loader/.test(filename) ||
        (/node_modules/.test(filename) &&
          !/(taro)|(@antmjs)|(react-spring)|(recoil)|(buffer)|(qrcode)/.test(
            filename,
          )),
    )
}
