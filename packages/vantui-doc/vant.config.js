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
        title: '基本介绍',
        items: [
          {
            path: 'home',
            title: '简介',
            hideSimulator: true,
          },
        ],
      },
    ],
  },
}
