import { join } from 'path'
import { defineConfig, IDocMenuNavs } from '@antmjs/types'

const CWD = process.cwd()

// 在根目录创建".webhooks.js", 向Git管理者获取webhooks的token, 设置 module.exports = 'xxxxxxxxxxxxxxxxxxx'

export default defineConfig({
  warning: {
    monitorFiles: ['./packages/**/package.json', './package.json'],
    webhooks: {
      url: `https://oapi.dingtalk.com/robot/send?access_token=${require('./.webhooks.js')}`,
    },
  },
  docs: {
    title: 'antmjs',
    src: join(CWD, './packages'),
    globalStyles: [join(process.cwd(), './doc.less')],
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    route: {
      level: 1,
      exclude: [join(CWD, './packages/doc/**/*.md')],
    },
    headerLinks: [
      {
        title: 'https://b.yzcdn.cn/vant/logo/github.svg',
        url: 'https://github.com/AntmJS/antm/',
        type: 'img',
      },
      {
        title: '更多',
        type: 'select',
        options: [
          {
            title: 'antmjs Doc',
            url: 'https://antmjs.github.io/antm/antm-doc/',
          },
          {
            title: 'antmjs Vantui',
            url: 'https://antmjs.github.io/vantui',
          },
        ],
      },
    ],
    menu: getMenus(),
  },
})

function getMenus(): IDocMenuNavs {
  return [
    {
      name: '编译相关',
      items: [
        {
          path: 'babel-preset',
          title: 'babel-preset 转译js',
        },
        {
          path: 'eslint',
          title: 'eslint 代码规范',
        },
        {
          path: 'stylelint',
          title: 'stylelint 样式规范',
        },
        {
          path: 'plugin-icestark',
          title: 'plugin-icestark 微应用&Taro',
        },
        {
          path: 'plugin-vantui',
          title: 'plugin-vantui 适配组件库',
        },
        {
          path: 'plugin-mini-fix',
          title: 'plugin-mini-fix 异常处理&Taro',
        },
        {
          path: 'plugin-global-fix',
          title: 'plugin-global-fix 支付宝polyfill',
        },
      ],
    },
    {
      name: '运行时相关',
      items: [
        {
          path: 'cache',
          title: 'cache 缓存',
        },
        {
          path: 'unite',
          title: 'unite 简化hooks&Taro',
        },
        {
          path: 'utils',
          title: 'utils 通用工具',
        },
        {
          path: 'trace',
          title: 'trace 埋点&异常',
        },
        {
          path: 'api',
          title: 'api 接口&数据',
        },
      ],
    },
    {
      name: 'cli工具',
      items: [
        {
          path: 'iconfont',
          title: 'iconfont 图标样式',
        },
        {
          path: 'warning',
          title: 'warning 文件监控',
        },
        {
          path: 'upload-tencent',
          title: 'upload-tencent 腾讯云上传',
        },
      ],
    },
  ]
}
