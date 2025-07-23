# Highlight 高亮文本

### 介绍

高亮指定文本内容。请升级 `@antmjs/vant` 到 `>= 3.6.6` 版本来使用该组件。

### 引入

在 Taro 文件中引入组件

```js
import { Highlight } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

你可以通过 `keywords` 指定需要高亮的关键字，通过 `sourceString` 指定源文本。

::: $demo1 :::

### 多字符匹配

如果需要指定多个关键字，可以以数组的形式传入 `keywords`。

::: $demo2 :::

### 设置高亮标签类名

通过 `highlightClass` 可以设置高亮标签的类名，以便自定义样式。

::: $demo3 :::

### HighlightProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/highlight.d.ts)

| 参数             | 说明             | 类型                                                  | 默认值 | 必填    |
| ---------------- | ---------------- | ----------------------------------------------------- | ------ | ------- |
| autoEscape       | 是否自动转义     | _&nbsp;&nbsp;boolean<br/>_                            | true   | `false` |
| caseSensitive    | 是否区分大小写   | _&nbsp;&nbsp;boolean<br/>_                            | false  | `false` |
| highlightClass   | 高亮元素的类名   | _&nbsp;&nbsp;string<br/>_                             | -      | `false` |
| keywords         | 期望高亮的文本   | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;string[]<br/>_ | -      | `true`  |
| sourceString     | 源文本           | _&nbsp;&nbsp;string<br/>_                             | -      | `true`  |
| unhighlightClass | 非高亮元素的类名 | _&nbsp;&nbsp;string<br/>_                             | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                   | 默认值                   |
| ---------------------- | ------------------------ |
| --highlight-text-color | ` var(--primary-color);` |
