
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


织夏：
Toast
Style

Divider
Empty
NoticeBar
Collapse
Circle

Checkbox
Field
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

Calendar
Picker
DatetimePicker
Grid
Sidebar


蓝根
Popup[完成]


Overlay[完成]
ShareSheet
Steps[完成]
Stepper[完成]

Slider
IndexBar

TreeSelect
Area
ActionSheet
Dialog


三少
Button
Icon

Progress
Skeleton
CountDown
Tag
Sticky
Rate
Search
NavBar
Tab
TabBar