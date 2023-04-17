# 定制主题

### 背景知识

Taro3 的架构摒弃了小程序自定义组件带来的复杂性，所以 @antmjs/vantui 使用与之配套的 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties) 来实现定制主题。链接中的内容可以帮助你对这两个概念有基本的认识，避免许多不必要的困扰。

CSS 变量 的兼容性要求可以在 [这里](https://caniuse.com/#feat=css-variables) 查看。对于不支持 CSS 变量 的设备，定制主题将不会生效，不过不必担心，默认样式仍会生效。

### 样式变量

定制使用的 CSS 变量 与 Less 变量 同名，下面是一些基本的样式变量，所有可用的颜色变量请参考 [配置文件](https://github.com/AntmJS/vantui/blob/main/packages/vantui/src/style/var.less)，你可以覆盖其变量达到定制主题的目的。

```less
// Component Colors
@text-color: #323233;
@border-color: #ebedf0;
@active-color: #f2f3f5;
@background-color: #f7f8fa;
@background-color-light: #fafafa;
```

## 定制方法

### 步骤一 引入样式源文件

定制主题时，需要引入组件对应的 Less 样式文件，支持按需引入和手动引入两种方式。

#### 按需引入样式（推荐）

在 babel.config.js 中配置按需引入样式源文件，注意 babel 6 不支持按需引入样式，请手动引入样式。

```js
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: '@antmjs/vantui',
        libraryDirectory: 'es',
        // 指定样式路径，建议这里样式按需引入不开启，直接在app.less引入全局样式
        style: (name) => `${name}/style/less`,
      },
      '@antmjs/vantui',
    ],
  ],
}
```

#### 手动引入样式

```js
// 引入全部样式
import '@antmjs/vantui/lib/index.less'

// 引入单个组件样式
import '@antmjs/vantui/lib/button/style/less'
```

### 步骤二 修改样式变量

#### 通过覆盖 less 主题方式修改

使用 Less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 即可对变量进行修改，下面是参考的 webpack 配置。

```js
// webpack.config.js
module.exports = {
  rules: [
    {
      test: /\.less$/,
      use: [
        // ...其他 loader 配置
        {
          loader: 'less-loader',
          options: {
            // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
            lessOptions: {
              modifyVars: {
                // 直接覆盖变量
                'text-color': '#111',
                'border-color': '#eee',
                // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                hack: `true; @import "your-less-file-path.less";`,
              },
            },
          },
        },
      ],
    },
  ],
}
```

#### 通过 css 变量形式修改

##### 定制单个组件的主题样式

> 在 less 中为组件设置 CSS 变量

```jsx
export default Index () {
  return <Button className="my-button">
    默认按钮
  </Button>
}
```

```less
.my-button {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
}
```

> 或通过 style 属性来设置 CSS 变量，这使你能够轻松实现主题的动态切换

```jsx
export default Index () {
  const [buttonStyle, setButtonStyle] = useState({buttonStyle: "--button-border-radius: 10px;--button-default-color: green;"})
  useEffect(functon () {
    setTimeout(function () {
      setButtonStyle({buttonStyle: "--button-border-radius: 2px;--button-default-color: pink;"})
    }, 2000)
  }, [])
  return <Button style={buttonStyle}>
    默认按钮
  </Button>
}
```

##### 定制多个组件的主题样式

> 与单个组件的定制方式类似，只需用一个 container 节点包裹住需要定制的组件，并将 CSS 变量 设置在 container 节点上

```jsx
export default Index () {
  return <View classsName="container">
    <Button className="my-button">
      默认按钮
    </Button>
    <Toast id="van-toast" />
  </View>
}
```

```less
.container {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
  --toast-max-width: 100px;
  --toast-background-color: pink;
}
```

##### 定制全局主题样式

> 在 app.less 中，写入 CSS 变量，即可对全局生效

```less
page {
  --button-border-radius: 10px;
  --button-default-color: #f2f3f5;
  --toast-max-width: 100px;
  --toast-background-color: pink;
}
```
