const path = require('path')

module.exports = {
  name: '@antmjs/vantui',
  site: {
    simulator: {
      url: {
        development: 'http://localhost:10086',
        production: '/vantui/mobile.html',
      },
      pagePath: path.join(__dirname, '../vantui-demo/src/pages'),
      configPath: path.join(__dirname, '../vantui-demo/src/config.json'),
      appConfigPath: path.join(__dirname, '../vantui-demo/src/app.config.js'),
      withTabPages: ['icon', 'power-scroll-view'],
    },
    title: '@antmjs/vantui',
    logo: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
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
            hideSimulator: false,
          },
          {
            path: 'quickstart',
            title: '快速上手',
            hideSimulator: false,
          },
          {
            path: 'custom-style',
            title: '样式覆盖',
            hideSimulator: false,
          },
          {
            path: 'theme',
            title: '定制主题',
            hideSimulator: false,
          },
          {
            path: 'use-in-react',
            title: '如何在React中使用',
            hideSimulator: false,
          },
          {
            path: 'contributing',
            title: '贡献指南',
            hideSimulator: false,
          },
          {
            path: 'comments',
            title: 'typescript同步到文档',
            hideSimulator: false,
          },
          {
            path: 'premium',
            title: '高级模版功能说明',
            hideSimulator: false,
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'Button 按钮',
          },
          {
            path: 'cell',
            title: 'Cell 单元格',
          },
          {
            path: 'config-provider',
            title: 'ConfigProvider 全局配置',
          },
          {
            path: 'icon',
            title: 'Icon 图标',
          },
          {
            path: 'image',
            title: 'Image 图片',
          },
          {
            path: 'col',
            title: 'Layout 布局',
          },
          {
            path: 'popup',
            title: 'Popup 弹出层',
          },
          {
            path: 'common',
            title: 'Style 内置样式',
          },
          {
            path: 'toast',
            title: 'Toast 轻提示',
          },
          {
            path: 'transition',
            title: 'transition 动画',
          },
        ],
      },
      {
        title: '表单组件',
        items: [
          {
            path: 'calendar',
            title: 'Calendar 日历',
          },
          {
            path: 'cascader',
            title: 'Cascader 级联选择',
          },
          {
            path: 'checkbox',
            title: 'Checkbox 复选框',
          },
          {
            path: 'datetime-picker',
            title: 'DatetimePicker 时间选择',
          },
          {
            path: 'field',
            title: 'Field 输入框',
          },
          {
            path: 'form',
            title: 'Form 表单',
          },
          {
            path: 'picker',
            title: 'Picker 选择器',
          },
          {
            path: 'radio',
            title: 'Radio 单选框',
          },
          {
            path: 'rate',
            title: 'Rate 评分',
          },
          {
            path: 'search',
            title: 'Search 搜索',
          },
          {
            path: 'slider',
            title: 'Slider 滑块',
          },
          {
            path: 'stepper',
            title: 'Stepper 步进器',
          },
          {
            path: 'switch',
            title: 'Switch 开关',
          },
          {
            path: 'uploader',
            title: 'Uploader 文件上传',
          },
        ],
      },
      {
        title: '反馈组件',
        items: [
          {
            path: 'action-sheet',
            title: 'ActionSheet 动作面板',
          },
          {
            path: 'dialog',
            title: 'Dialog 弹出框',
          },
          {
            path: 'dropdown-menu',
            title: 'DropdownMenu 下拉菜单',
          },
          {
            path: 'loading',
            title: 'Loading 加载',
          },
          {
            path: 'notify',
            title: 'Notify 消息通知',
          },
          {
            path: 'overlay',
            title: 'Overlay 遮罩层',
          },
          {
            path: 'share-sheet',
            title: 'ShareSheet 分享面板',
          },
          {
            path: 'swipe-cell',
            title: 'SwipeCell 滑动单元格',
          },
          {
            path: 'signature',
            title: 'Signature 签名',
          },
        ],
      },
      {
        title: '展示组件',
        items: [
          {
            path: 'table',
            title: 'Table 表格',
          },
          {
            path: 'swiper',
            title: 'Swiper 轮播',
          },
          {
            path: 'circle',
            title: 'Circle 环形进度条',
          },
          {
            path: 'collapse',
            title: 'Collapse 折叠面板',
          },
          {
            path: 'count-down',
            title: 'CountDown 倒计时',
          },
          {
            path: 'divider',
            title: 'Divider 分割线',
          },
          {
            path: 'empty',
            title: 'Empty 空状态',
          },
          {
            path: 'ellipsis',
            title: 'Ellipsis 文本省略',
          },
          {
            path: 'notice-bar',
            title: 'NoticeBar 通知栏',
          },
          {
            path: 'progress',
            title: 'Progress 进度条',
          },
          {
            path: 'skeleton',
            title: 'Skeleton 骨架屏',
          },
          {
            path: 'steps',
            title: 'Steps 步骤条',
          },
          {
            path: 'sticky',
            title: 'Sticky 粘性布局',
          },
          {
            path: 'tag',
            title: 'Tag 标签',
          },
          {
            path: 'water-mark',
            title: 'WaterMark 水印',
          },
          {
            path: 'power-scroll-view',
            title: 'PowerScrollView 滚动列表',
          },
          {
            path: 'number-keyboard',
            title: 'NumberKeyboard 数字键盘',
          },
        ],
      },
      {
        title: '导航组件',
        items: [
          {
            path: 'pagination',
            title: 'Pagination 分页',
          },
          {
            path: 'grid',
            title: 'Grid 宫格',
          },
          {
            path: 'index-bar',
            title: 'IndexBar 索引栏',
          },
          {
            path: 'nav-bar',
            title: 'NavBar 导航栏',
          },
          {
            path: 'sidebar',
            title: 'Sidebar 侧边导航',
          },
          {
            path: 'tab',
            title: 'Tab 标签页',
          },
          {
            path: 'tabbar',
            title: 'Tabbar 标签栏',
          },
          {
            path: 'tree-select',
            title: 'TreeSelect 分类选择',
          },
        ],
      },
      {
        title: '业务组件',
        items: [
          {
            path: 'area',
            title: 'Area 省市区选择',
          },
          {
            path: 'sku',
            title: 'Sku 商品规格选择',
          },
          {
            path: 'card',
            title: 'Card 商品卡片',
          },
          {
            path: 'submit-bar',
            title: 'SubmitBar 提交订单栏',
          },
          {
            path: 'goods-action',
            title: 'GoodsAction 商品导航',
          },
        ],
      },
      {
        title: '有赞Vant-Weapp小程序文档',
        items: [
          {
            path: 'index',
            title: '参考',
            hideSimulator: false,
          },
        ],
      },
    ],
  },
}
