module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  terser: {
    enable: false,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    },
  },
  csso: {
    enable: false,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    },
  },
  defineConstants: {},
  mini: {},
  h5: {},
}
