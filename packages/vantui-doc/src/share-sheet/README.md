# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

### 引入

在 Taro 文件中引入组件

```js
import { ShareSheet } from "vantui"; 
```

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```jsx
<View>
  <Cell
    title="显示分享面板"
    onClick={ this.onClick }
  />
  <ShareSheet
    show={ this.showShare }
    title="立即分享给好友"
    options={ this.options }
    onSelect={ this.onSelect }
    onClose={ this.onClose }
  />
</View>
 
```

```js
this.state = {
  showShare: false,
  options: [{
    name: '微信',
    icon: 'wechat',
    openType: 'share'
  }, {
    name: '微博',
    icon: 'weibo'
  }, {
    name: '复制链接',
    icon: 'link'
  }, {
    name: '分享海报',
    icon: 'poster'
  }, {
    name: '二维码',
    icon: 'qrcode'
  }]
};

function onClick(event) {
  this.setData({
    showShare: true
  });
}

function onClose() {
  this.setData({
    showShare: false
  });
}

function onSelect(event) {
  Toast(event.detail.name);
  this.onClose();
} 
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```jsx
<View>
  <ShareSheet
    show={ this.showShare }
    title="立即分享给好友"
    options={ this.options }
  />
</View>
 
```

```js
this.state = {
  showShare: false,
  options: [[{
    name: '微信',
    icon: 'wechat'
  }, {
    name: '微博',
    icon: 'weibo'
  }, {
    name: 'QQ',
    icon: 'qq'
  }], [{
    name: '复制链接',
    icon: 'link'
  }, {
    name: '分享海报',
    icon: 'poster'
  }, {
    name: '二维码',
    icon: 'qrcode'
  }]]
}; 
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```jsx
<View>
  <ShareSheet
    show={ this.showShare }
    options={ this.options }
  />
</View>
 
```

```js
this.state = {
  showShare: false,
  options: [{
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/customIconFire.png'
  }, {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/customIconLight.png'
  }, {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/customIconWater.png'
  }]
}; 
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```jsx
<View>
  <ShareSheet
    show={ this.showShare }
    options={ this.options }
    title="立即分享给好友"
    description="描述信息"
  />
</View>
 
```

```js
this.state = {
  showShare: false,
  options: [{
    name: '微信',
    icon: 'wechat'
  }, {
    name: '微博',
    icon: 'weibo'
  }, {
    name: '复制链接',
    icon: 'link',
    description: '描述信息'
  }, {
    name: '分享海报',
    icon: 'poster'
  }, {
    name: '二维码',
    icon: 'qrcode'
  }]
}; 
```
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface ShareSheetOptionItem {
  name: string
  icon: string
  description?: string
  openType?: string
}
export interface ShareSheetOption {
  showBorder?: boolean
  options: ShareSheetOptionItem[]
  onSelect?: (option: ShareSheetOptionItem, index: number) => void
}
export interface ShareSheetProps extends StandardProps {
  show?: boolean
  overlayStyle?: string
  zIndex?: number
  title?: string
  overlay?: boolean
  safeAreaInsetBottom?: boolean
  closeOnClickOverlay?: boolean
  duration?: number | string
  onClickOverlay?: () => void
  onCancel?: () => void
  onSelect?: (event: { detail: ShareSheetOptionItem }) => void
  onClose?: () => void
  renderTitle?: ReactNode
  renderDescription?: ReactNode
  cancelText?: string
  description?: string
  options?: ShareSheetOptionItem[] | ShareSheetOptionItem[][]
}
declare const ShareSheet: ComponentClass<ShareSheetProps>
export { ShareSheet }
```