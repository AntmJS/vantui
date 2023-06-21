# Collapse 折叠面板

### 介绍

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

### 引入

在 Taro 文件中引入组件

```js
import { Collapse, CollapseItem } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

通过`value`控制展开的面板列表，`activeNames`为数组格式。

::: $demo1 :::

### 手风琴

通过`accordion`可以设置为手风琴模式，最多展开一个面板，此时`activeName`为字符串格式。

::: $demo2 :::

### 事件监听

`vanCollapse` 提供了 `change`, `open` 和 `close` 事件。`change` 事件在面板切换时触发，`open` 事件在面板展开时触发，`close` 事件在面板关闭时触发。

::: $demo2 :::

### 自定义标题内容

::: $demo3 :::

### CollapseProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/collapse.d.ts)

| 参数      | 说明 | 类型                                                                                                                                                                                                                                                      | 默认值 | 必填    |
| --------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| value     | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |
| accordion | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                | -      | `false` |
| border    | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                | -      | `false` |
| children  | -    | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;Array<ReactNode><br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ReactNode<br/>_                                                                                                                   | -      | `false` |
| onChange  | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                               | -      | `false` |
| onOpen    | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                               | -      | `false` |
| onClose   | -    | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;any<br/>_                                                                                                                                               | -      | `false` |

### CollapseItemProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/collapse.d.ts)

| 参数            | 说明                | 类型                                                | 默认值 | 必填    |
| --------------- | ------------------- | --------------------------------------------------- | ------ | ------- |
| name            | -                   | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| title           | -                   | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| value           | -                   | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number<br/>_ | -      | `false` |
| icon            | 对应 Icon 的 name   | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| label           | -                   | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| disabled        | -                   | _&nbsp;&nbsp;boolean<br/>_                          | false  | `false` |
| clickable       | -                   | _&nbsp;&nbsp;boolean<br/>_                          | false  | `false` |
| border          | -                   | _&nbsp;&nbsp;boolean<br/>_                          | true   | `false` |
| isLink          | -                   | _&nbsp;&nbsp;boolean<br/>_                          | true   | `false` |
| children        | -                   | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| renderTitle     | -                   | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| renderIcon      | -                   | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| renderRightIcon | isLink 设置为 false | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| renderValue     | -                   | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| size            | -                   | _&nbsp;&nbsp;"large"<br/>_                          | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                     | 默认值      |
| ---------------------------------------- | ----------- |
| --collapse-item-transition-duration      | ` 0.3s;`    |
| --collapse-item-content-padding          | ` 30px;`    |
| --collapse-item-content-font-size        | ` 26px;`    |
| --collapse-item-content-line-height      | ` 1.5;`     |
| --collapse-item-content-text-color       | ` @gray-6;` |
| --collapse-item-content-background-color | ` @white;`  |
| --collapse-item-title-disabled-color     | ` @gray-5;` |
