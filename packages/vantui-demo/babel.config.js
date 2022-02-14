/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: [
    [
      'import',
      {
        libraryName: '@antmjs/vantui',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`,
        // style: true,
      },
      '@antmjs/vantui',
    ],
  ],
}
