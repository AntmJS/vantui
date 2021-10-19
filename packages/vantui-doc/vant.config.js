module.exports = {
  name: 'vantui-doc',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/vantui/',
      searchConfig: {},
    },
  },
  site: {
    title: 'vantui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    links: [
      {
        logo: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/antmjs/vantui',
      },
    ],
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
            hideSimulator: true,
          },
          {
            path: 'quickstart',
            title: '快速上手',
            hideSimulator: true,
          },
          {
            path: 'custom-style',
            title: '样式覆盖',
            hideSimulator: true,
          },
          {
            path: 'theme',
            title: '定制主题',
            hideSimulator: true,
          },
          {
            path: 'use-in-react',
            title: '如何在React中使用',
            hideSimulator: true,
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'index',
            title: '参考',
            hideSimulator: true,
          },
        ],
      },
    ],
  },
}
