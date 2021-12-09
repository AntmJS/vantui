# Tabbar 标签栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Tabbar } from "@antmjs/vantui";
import { TabbarItem } from "@antmjs/vantui"; 
```

## 代码演示

### 基础用法

```jsx
<View>
  <Tabbar
    active={ this.state.active }
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
  this.setState({
    active: event.detail
  });
} 
```

### 通过名称匹配

在标签指定`name`属性的情况下，`vModel`的值为当前标签的`name`。

```jsx
<View>
  <Tabbar
    active={ this.state.active }
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
  this.setState({
    active: event.detail
  });
} 
```

### 显示徽标

```jsx
<View>
  <Tabbar
    active={ this.state.active }
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

```jsx
<View>
  <Tabbar
    active={ this.state.active }
    onChange={ this.onChange }
  >
  <TabbarItem
    info="3"
    renderIcon={
      <Block>
        <Image
          src={this.state.icon.normal}
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        ></Image>
      </Block>
    }
    renderIconactive={
      <Block>
        <Image
          src={this.state.icon.active}
          mode="aspectFit"
          style="width: 30px; height: 18px;"
        ></Image>
      </Block>
    }
  >
    自定义
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
  this.setState({
    active: event.detail
  });
} 
```

### 自定义颜色

```jsx
<View>
  <Tabbar
    active={ this.state.active }
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
  this.setState({
    active: event.detail
  });
} 
```

### 切换标签事件

```jsx
<View>
  <Tabbar
    active={ this.state.active }
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
### TabbarProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/tabbar.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| active | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| activeColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| inactiveColor | - | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| fixed | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| placeholder | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| border | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| zIndex | - | _&nbsp;&nbsp;number<br/>_ | - | `false` |
| safeAreaInsetBottom | - | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| children | - | _&nbsp;&nbsp;ReactNode<br/>_ | - | `false` |
| onChange | - | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_ | - | `false` |

