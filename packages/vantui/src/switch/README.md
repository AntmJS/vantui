# Switch 开关

### 介绍

用于在打开和关闭状态之间进行切换。

### 引入

在 Taro 文件中引入组件

```js
import { Switch } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

::: $demo1 :::

### 禁用状态

::: $demo2 :::

### 加载状态

::: $demo3 :::

### 自定义大小

::: $demo4 :::

### 自定义颜色

::: $demo5 :::

### 异步控制

::: $demo6 :::

### SwitchProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/switch.d.ts)

| 参数          | 说明 | 类型                                                                                                        | 默认值 | 必填    |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------- | ------ | ------- |
| checked       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| loading       | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| disabled      | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                  | -      | `false` |
| activeColor   | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| inactiveColor | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| size          | -    | _&nbsp;&nbsp;string<br/>_                                                                                   | -      | `false` |
| activeValue   | -    | _&nbsp;&nbsp;any<br/>_                                                                                      | -      | `false` |
| inactiveValue | -    | _&nbsp;&nbsp;any<br/>_                                                                                      | -      | `false` |
| onChange      | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                           | 默认值                              |
| ------------------------------ | ----------------------------------- |
| --switch-width                 | ` 2em;`                             |
| --switch-height                | ` 1em;`                             |
| --switch-node-size             | ` 1em;`                             |
| --switch-node-z-index          | ` 1;`                               |
| --switch-node-background-color | ` @white;`                          |
| --switch-node-box-shadow       | ` 0 6px 2px 0 rgba(0, 0, 0, 0.05),` |
| --switch-background-color      | ` @white;`                          |
| --switch-on-background-color   | ` var(--primary-color);`            |
| --switch-transition-duration   | ` 0.3s;`                            |
| --switch-disabled-opacity      | ` 0.4;`                             |
| --switch-border                | ` 2px solid rgba(0, 0, 0, 0.1);`    |
