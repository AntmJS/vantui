# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Tabbar } from "vantui";
import { TabbarItem } from "vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    onChange={ this.onChange }
  >
    <TabbarItem icon="homeO">
      标签
    </TabbarItem>
    <TabbarItem icon="search">
      标签
    </TabbarItem>
    <TabbarItem icon="friendsO">
      标签
    </TabbarItem>
    <TabbarItem icon="settingO">
      标签
    </TabbarItem>
  </Tabbar>
</View>
 
```

```js
this.state = {
  active: 0
};

function onChange(event) {
  // event.detail 的值为当前选中项的索引
  this.setData({
    active: event.detail
  });
} 
```

### 通过名称匹配

在标签指定`name`属性的情况下，`vModel`的值为当前标签的`name`。

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    onChange={ this.onChange }
  >
    <TabbarItem
      name="home"
      icon="homeO"
    >
      标签
    </TabbarItem>
    <TabbarItem
      name="search"
      icon="search"
    >
      标签
    </TabbarItem>
    <TabbarItem
      name="friends"
      icon="friendsO"
    >
      标签
    </TabbarItem>
    <TabbarItem
      name="setting"
      icon="settingO"
    >
      标签
    </TabbarItem>
  </Tabbar>
</View>
 
```

```js
this.state = {
  active: 'home'
};

function onChange(event) {
  this.setData({
    active: event.detail
  });
} 
```

### 显示徽标

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    onChange={ this.onChange }
  >
    <TabbarItem icon="homeO">
      标签
    </TabbarItem>
    <TabbarItem
      icon="search"
      dot={ true }
    >
      标签
    </TabbarItem>
    <TabbarItem
      icon="friendsO"
      info="5"
    >
      标签
    </TabbarItem>
    <TabbarItem
      icon="settingO"
      info="20"
    >
      标签
    </TabbarItem>
  </Tabbar>
</View>
 
```

### 自定义图标

可以通过 slot 自定义图标，其中 icon slot 代表未选中状态下的图标，iconActive slot 代表选中状态下的图标。

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    onChange={ this.onChange }
  >
    <TabbarItem info="3">
      <Image
        slot="icon"
        src={ `${ icon.normal }` }
        mode="aspectFit"
        style="width: 30px; height: 18px;"
      />
      <Image
        slot="iconActive"
        src={ `${ icon.active }` }
        mode="aspectFit"
        style="width: 30px; height: 18px;"
      /> 自定义
    </TabbarItem>
    <TabbarItem icon="search">
      标签
    </TabbarItem>
    <TabbarItem icon="settingO">
      标签
    </TabbarItem>
  </Tabbar>
</View>
 
```

```js
this.state = {
  active: 0,
  icon: {
    normal: 'https://img.yzcdn.cn/vant/userInactive.png',
    active: 'https://img.yzcdn.cn/vant/userActive.png'
  }
};

function onChange(event) {
  this.setData({
    active: event.detail
  });
} 
```

### 自定义颜色

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    activeColor="#07c160"
    inactiveColor="#000"
    onChange={ this.onChange }
  >
    <TabbarItem icon="homeO">
      标签
    </TabbarItem>
    <TabbarItem icon="search">
      标签
    </TabbarItem>
    <TabbarItem icon="friendsO">
      标签
    </TabbarItem>
    <TabbarItem icon="settingO">
      标签
    </TabbarItem>
  </Tabbar>
</View>
 
```

```js
this.state = {
  active: 0
};

function onChange(event) {
  this.setData({
    active: event.detail
  });
} 
```

### 切换标签事件

```jsx
<View>
  <Tabbar
    active={ `${ this.active }` }
    onChange={ this.onChange }
  >
    <TabbarItem icon="homeO">
      标签1
    </TabbarItem>
    <TabbarItem icon="search">
      标签2
    </TabbarItem>
    <TabbarItem icon="friendsO">
      标签3
    </TabbarItem>
    <TabbarItem icon="settingO">
      标签4
    </TabbarItem>
  </Tabbar>
</View>
 
```

```js
this.state = {
  active: 0
};

function onClick(event) {
  wx.showToast({
    title: `点击标签 ${event.detail + 1}`,
    icon: 'none'
  });
} 
```

### 结合自定义 tabBar

请参考 [微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/customTabbar.html) 与 [代码片段](https://developers.weixin.qq.com/s/vaXgTsmQ7hnm)。
### TS信息
```ts 
import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabbarProps extends StandardProps {
  active?: number
  activeColor?: string
  inactiveColor?: string
  fixed?: boolean
  placeholder?: boolean
  border?: boolean
  zIndex?: number
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  onChange?: (event: { detail: string | number }) => void
}

declare const Tabbar: ComponentClass<TabbarProps>

export { Tabbar }
```