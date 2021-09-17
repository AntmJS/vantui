
# @antmjs/vantui

> 一套适用于Taro3的vantui组件库

## 为什么需要

基于VantUI改造的Taro组件库

## 安装

```bash
yarn add @antmjs/vantui
```

## 使用

src/style/index.less

```css
@import 'node_modules/@antmjs/vantui/dist/style/index';
```

```js
import { Button } from '@antmjs/vantui'
```

yarn

npx lerna bootstrap

cd packages/vantui -> npx rollup -c ./rollup.watch.config.js -w

cd packages/vantui-demo -> yarn watch:weapp

注意事项：

customClass -> className

追加calssName和style和others

```
className={
  utils.bem('nav-bar', {
    fixed,
  }) +
  ' custom-class ' +
  (border ? 'van-hairline--bottom' : '') +
  ` ${className}`
}
style={utils.style([
  computed.barStyle({
    zIndex,
    statusBarHeight,
    safeAreaInsetTop,
  }) +
    '; ' +
    customStyle,
  style,
])}
{...others}
```

slot代码的转换是通过传递render函数

$emit 相当于子组件触发props的函数

https://github.com/youzan/vant-weapp/commits/dev 

本仓库是从1.8.4的版本迁移出来，所以1.8.4以后的commit需要修复

getRect getAllRect的第一个参数传null就行




织夏：
Toast
Style

Divider
Empty
NoticeBar
Collapse
Circle

Checkbox
Radio
Switch
Uploader


空镜
Image
Layout

DropdownMenu
Loading
Notify
Cell
SwipeCell
Slider

Calendar
Picker
DatetimePicker
Grid
Sidebar


蓝根
Popup

ActionSheet
Dialog
Overlay
ShareSheet
Steps
Stepper

IndexBar
TreeSelect
Area

三少
Button[完成]
Icon[完成]

Progress[完成]
Skeleton[完成]
CountDown[完成]
Tag[完成]
Sticky[完成]
Rate[完成]
Search[完成]
NavBar[完成]
Tab
TabBar