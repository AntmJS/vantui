# Progress 进度条

### 介绍

用于展示操作的当前进度。

### 引入

在 Taro 文件中引入组件

```js
import { Progress } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用`percentage`属性来设置当前进度。

```jsx
function Demo() {
  return <Progress percentage="50" />
}
```

### 线条粗细

通过`strokeWidth`可以设置进度条的粗细。

```jsx
function Demo() {
  return <Progress percentage="50" strokeWidth="8" />
}
```

### 置灰

设置`inactive`属性后进度条将置灰。

```jsx
function Demo() {
  return <Progress inactive={true} percentage="50" />
}
```

### 样式定制

可以使用`pivotText`属性自定义文字，`color`属性自定义进度条颜色。

```jsx
function Demo() {
  return (
    <View>
      <Progress pivotText="橙色" color="#f2826a" percentage="25" />
      <Progress pivotText="红色" color="#ee0a24" percentage="50" />
      <Progress
        percentage="75"
        pivotText="紫色"
        pivotColor="#7232dd"
        color="linearGradient(to right, #be99ff, #7232dd)"
      />
    </View>
  )
}
```

### ProgressProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/progress.d.ts)

| 参数        | 说明 | 类型                                                | 默认值 | 必填    |
| ----------- | ---- | --------------------------------------------------- | ------ | ------- |
| inactive    | -    | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| percentage  | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `true`  |
| pivotText   | -    | _&nbsp;&nbsp;ReactNode<br/>_                        | -      | `false` |
| pivotColor  | -    | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| trackColor  | -    | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| showPivot   | -    | _&nbsp;&nbsp;boolean<br/>_                          | -      | `false` |
| color       | -    | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| textColor   | -    | _&nbsp;&nbsp;string<br/>_                           | -      | `false` |
| strokeWidth | -    | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                              | 默认值                   |
| --------------------------------- | ------------------------ |
| --progress-height                 | ` 8px;`                  |
| --progress-background-color       | ` @gray-3;`              |
| --progress-pivot-padding          | ` 0 10px;`               |
| --progress-color                  | ` var(--primary-color);` |
| --progress-pivot-font-size        | ` @font-size-xs;`        |
| --progress-pivot-line-height      | ` 1.6;`                  |
| --progress-pivot-background-color | ` var(--primary-color);` |
| --progress-pivot-text-color       | ` @white;`               |
