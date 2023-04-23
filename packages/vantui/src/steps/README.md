# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

在 Taro 文件中引入组件

```js
import { Steps } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

```jsx
const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
  },
  {
    text: '步骤二',
    desc: '描述信息',
  },
  {
    text: '步骤三',
    desc: '描述信息',
  },
  {
    text: '步骤四',
    desc: '描述信息',
  },
]
function Demo() {
  return <Steps steps={steps} active={2} />
}
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```jsx
const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
  },
  {
    text: '步骤二',
    desc: '描述信息',
  },
  {
    text: '步骤三',
    desc: '描述信息',
  },
  {
    text: '步骤四',
    desc: '描述信息',
  },
]
function Demo() {
  return (
    <Steps steps={steps} active={1} activeIcon="success" activeColor="#38f" />
  )
}
```

### 自定义图标

可以通过 `inactiveIcon` 和 `activeIcon` 属性分别设置每一项的图标。

```jsx
const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
    inactiveIcon: 'location-o',
    activeIcon: 'success',
  },
  {
    text: '步骤二',
    desc: '描述信息',
    inactiveIcon: 'like-o',
    activeIcon: 'plus',
  },
  {
    text: '步骤三',
    desc: '描述信息',
    inactiveIcon: 'star-o',
    activeIcon: 'cross',
  },
]
function Demo() {
  return <Steps steps={steps} active={2} />
}
```

### 竖向步骤条

可以通过设置`direction`属性来改变步骤条的显示方式。

```jsx
const steps = [
  {
    text: '步骤一',
    desc: '描述信息',
  },
  {
    text: '步骤二',
    desc: '描述信息',
  },
  {
    text: '步骤三',
    desc: '描述信息',
  },
]
function Demo() {
  return (
    <Steps
      steps={steps}
      active={1}
      direction="vertical"
      activeColor="#ee0a24"
    />
  )
}
```

### StepsProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/steps.d.ts)

| 参数            | 说明                                              | 类型                                                                                                                                                                                                                                                                                                      | 默认值       | 必填    |
| --------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| iconClassPrefix | icon 统一 class 的前缀                            | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                 | -            | `false` |
| steps           | Step 配置项数组                                   | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;index?:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;desc:&nbsp;React.ReactNode<br/>&nbsp;&nbsp;&nbsp;&nbsp;text:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;activeIcon?:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;inactiveIcon?:&nbsp;string<br/>&nbsp;&nbsp;}[]<br/>_ | -            | `false` |
| active          | 当前步骤                                          | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                 | 0            | `false` |
| direction       | 显示方向                                          | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"horizontal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;"vertical"<br/>_                                                                                                                                                                      | `horizontal` | `false` |
| activeColor     | 激活颜色                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                 | `#07c160`    | `false` |
| inactiveColor   | 未激活颜色                                        | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                 | `#969799`    | `false` |
| activeIcon      | 激活图标                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                 | `#checked`   | `false` |
| inactiveIcon    | 未激活图标                                        | _&nbsp;&nbsp;string<br/>_                                                                                                                                                                                                                                                                                 | `#checked`   | `false` |
| onClickStep     | 点击步骤时触发的事件，event.detail 当前步骤的索引 | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;event:&nbsp;ITouchEvent&nbsp;&&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                                                                                      | -            | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                     | 默认值     |
| ------------------------ | ---------- |
| --steps-background-color | ` @white;` |
