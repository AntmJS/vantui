# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

在 Taro 文件中引入组件

```js
import { ShareSheet } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```jsx
const options = [
  {
    name: '微信',
    icon: 'wechat',
    openType: 'share',
  },
  {
    name: '微博',
    icon: 'weibo',
  },
  {
    name: '复制链接',
    icon: 'link',
  },
  {
    name: '分享海报',
    icon: 'poster',
  },
  {
    name: '二维码',
    icon: 'qrcode',
  },
]
function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        title="立即分享给好友"
        options={options}
        onSelect={(e) => Toast.show(e.detail.name)}
        onClose={() => setShow(false)}
      />
      <Toast />
    </View>
  )
}
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```jsx
const options = [
  [
    {
      name: '微信',
      icon: 'wechat',
    },
    {
      name: '微博',
      icon: 'weibo',
    },
    {
      name: 'QQ',
      icon: 'qq',
    },
  ],
  [
    {
      name: '复制链接',
      icon: 'link',
    },
    {
      name: '分享海报',
      icon: 'poster',
    },
    {
      name: '二维码',
      icon: 'qrcode',
    },
  ],
]
function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        title="立即分享给好友"
        options={options}
        onSelect={(e) => Toast.show(e.detail.name)}
        onClose={() => setShow(false)}
      />
      <Toast />
    </View>
  )
}
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```jsx
const options = [
  {
    name: 'URL图标1',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: 'URL图标2',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
]
function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        title="立即分享给好友"
        options={options}
        onSelect={(e) => Toast.show(e.detail.name)}
        onClose={() => setShow(false)}
      />
      <Toast />
    </View>
  )
}
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```jsx
const options = [
  {
    name: '微信',
    icon: 'wechat',
  },
  {
    name: '微博',
    icon: 'weibo',
  },
]
function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        description="描述信息......"
        title="立即分享给好友"
        options={options}
        onClose={() => setShow(false)}
      />
    </View>
  )
}
```

### ShareSheetOptionItem [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

[object Object]
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| name | - | _&nbsp;&nbsp;string<br/>_ |
| icon | - | _&nbsp;&nbsp;string<br/>_ |
| description | - | _&nbsp;&nbsp;string<br/>_ |
| openType | - | _&nbsp;&nbsp;string<br/>_ |

### ShareSheetOptionItem [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数        | 说明 | 类型                      |
| ----------- | ---- | ------------------------- |
| name        | -    | _&nbsp;&nbsp;string<br/>_ |
| icon        | -    | _&nbsp;&nbsp;string<br/>_ |
| description | -    | _&nbsp;&nbsp;string<br/>_ |
| openType    | -    | _&nbsp;&nbsp;string<br/>_ |

### ShareSheetOption [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数       | 说明 | 类型                                                                                                                                                                   |
| ---------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showBorder | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             |
| options    | -    | _&nbsp;&nbsp;ShareSheetOptionItem[]<br/>_                                                                                                                              |
| onSelect   | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;option:&nbsp;ShareSheetOptionItem,<br/>&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_ |

### ShareSheetProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/share-sheet.d.ts)

| 参数                | 说明 | 类型                                                                                                                                                         | 默认值 | 必填    |
| ------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------- |
| show                | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| overlayStyle        | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| zIndex              | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                    | -      | `false` |
| title               | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| overlay             | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| safeAreaInsetBottom | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| closeOnClickOverlay | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                   | -      | `false` |
| duration            | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                          | -      | `false` |
| onClickOverlay      | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| onCancel            | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| onSelect            | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;ShareSheetOptionItem<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                         | -      | `false` |
| onClose             | -    | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                      | -      | `false` |
| renderTitle         | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                 | -      | `false` |
| renderDescription   | -    | _&nbsp;&nbsp;ReactNode<br/>_                                                                                                                                 | -      | `false` |
| cancelText          | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| description         | -    | _&nbsp;&nbsp;string<br/>_                                                                                                                                    | -      | `false` |
| options             | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ShareSheetOptionItem[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ShareSheetOptionItem[][]<br/>_ | -      | `false` |
