module.exports = {
  presets: [
    [
      require('@antmjs/babel-preset'),
      {
        presets: {
          env: {
            debug: false,

            /**
             * false: 不处理polyfill，自己手动引入【全量】
             * usage: 按需加载 polyfill，且不需要手动引入【按需】
             * entry: 必须手动引入，但会根据设置的目标环境全量导入【按环境全量】
             * 注：在 Babel 7.4.0 之后的版本，Babel官方明确建议了不再使用 @babel/polyfill ，建议使用 core-js/stable 和 regenerator-runtime/runtime。本包已经安装了core-js、@babel/plugin-transform-runtime和@babel/runtime，所以选择false或者entry选项的只需要在主文件顶部引入core-js即可
             */
            useBuiltIns: false,
            modules: false, // 对es6的模块文件不做转译，以便使用tree shaking、sideEffects等
          },
          react: {
            runtime: 'automatic',
          },
          typescript: {
            isTSX: true,
            jsxPragma: 'React',
            allExtensions: true,
            allowNamespaces: true,
          },
        },
        runtime: {
          absoluteRuntime: false,
          corejs: { version: 3, proposals: false },
          helpers: true, // 使用到@babel/runtime
          regenerator: true, // 使用到@babel/runtime
          useESModules: false,
        },
      },
    ],
  ],
}
