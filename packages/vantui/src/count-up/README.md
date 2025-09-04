# CountUp 数字滚动

### 介绍

一般用于需要滚动数字到某一个值的场景。请升级 `@antmjs/vant` 到 `>= 3.6.3` 版本来使用该组件。

### 引入

在 Taro 文件中引入组件

```js
import { CountUp } from '@antmjs/vantui'
```

## 代码演示

### 基本用法

通过`startVal`设置开始值，`endVal`设置结束值

::: $demo1 :::

### 设置滚动相关参数

- 通过`duration`设置从开始直到结束值整个滚动过程所需的时间，单位毫秒
- 通过`useEasing`设置在滚动快结束的时候，是否放慢滚动的速度，给用户更好的视觉效果

::: $demo2 :::

### 是否显示小数位

通过`decimals`设置显示的小数位，在滚动过程中，小数位会一起变化。如果`startVal`和`endVal`是带小数的，应该设置`decimals`为`startVal`和`endVal`一样的小数位数值，如`endVal`为 `500.55`，那么`decimals`应该设置为`2`。

::: $demo3 :::

### 千分位分隔符

通过`separator`配置千分位分隔符，默认为空字符串，可以设置英文逗号`","`，此参数表现为`endVal`值超过`1000`时，比如为`"1234"`，那么会变成`"1,234"`。

::: $demo4 :::

### 手动控制

通过 `ref` 选择器获取到组件实例后，可以调用`start`、`pause`、`resume`、`reset`方法。

::: $demo5 :::

### ICountUpRef [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-up.d.ts)

| 参数   | 说明                                     | 类型                                    |
| ------ | ---------------------------------------- | --------------------------------------- |
| start  | autoplay 为 false 时，通过此方法启动滚动 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| pause  | 暂停滚动                                 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| resume | 暂停后重新开始滚动(从暂停前的值开始滚动) | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |
| reset  | 重设至初始值                             | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ |

### CountUpProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/count-up.d.ts)

| 参数      | 说明                         | 类型                                                                                                                                                                   | 默认值 | 必填    |
| --------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| startVal  | 滚动开始值                   | _&nbsp;&nbsp;number<br/>_                                                                                                                                              | 0      | `false` |
| endVal    | 滚动结束值                   | _&nbsp;&nbsp;number<br/>_                                                                                                                                              | 0      | `false` |
| duration  | 滚动过程所需的时间，单位毫秒 | _&nbsp;&nbsp;number<br/>_                                                                                                                                              | 3000   | `false` |
| autoStart | 是否自动开始滚动             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             | true   | `false` |
| decimals  | 要显示的小数位数             | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_                                                                                                                    | 0      | `false` |
| decimal   | 十进制分隔                   | _&nbsp;&nbsp;string<br/>_                                                                                                                                              | .      | `false` |
| prefix    | 前缀                         | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;ReactNode<br/>_                                                                                                                 | -      | `false` |
| suffix    | 后缀                         | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;ReactNode<br/>_                                                                                                                 | -      | `false` |
| useEasing | 是否缓动结束滚动             | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                             | true   | `false` |
| separator | 千分位分隔符                 | _&nbsp;&nbsp;string<br/>_                                                                                                                                              | -      | `false` |
| onFinish  | 滚动结束时触发               | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                                | -      | `false` |
| ref       | 数字滚动实例                 | _&nbsp;&nbsp;React.MutableRefObject<<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;ICountUpRef<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;undefined<br/>&nbsp;&nbsp;><br/>_ | -      | `false` |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                   | 默认值            |
| ---------------------- | ----------------- |
| --count-up-text-color  | ` @text-color;`   |
| --count-up-font-size   | ` @font-size-md;` |
| --count-up-line-height | ` 40px;`          |
