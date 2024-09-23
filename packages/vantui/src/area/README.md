# Area 省市区选择

### 介绍

省市区选择组件通常与 [弹出层](#/popup) 组件配合使用。

> `v3.5`由于`picker`新增`mode=content`模式，当前 DatetimePicker 版本做了相应适配，这个模式下面 onInput 再确认的时候触发，value 支持数组字符串/数字. 对之前版本平铺模式存在的影响

### 引入

在 Taro 文件中引入组件

```js
import { Area } from '@antmjs/vantui'
```

## 代码演示

### 基础用法

初始化省市区组件时，需要通过 `areaList` 属性传入省市区数据。

::: $demo1 :::

### areaList 格式

areaList 为对象结构，包含 `province_list`、`city_list`、`county_list` 三个 key。

每项以地区码作为 key，省市区名字作为 value。地区码为 6 位数字，前两位代表省份，中间两位代表城市，后两位代表区县，以 0 补足 6 位。比如北京的地区码为 `11`，以 0 补足 6 位，为 `110000`。

示例数据如下：

```js
const areaList = {
  province_list: {
    110000: '北京市',
    120000: '天津市',
  },
  city_list: {
    110100: '北京市',
    120100: '天津市',
  },
  county_list: {
    110101: '东城区',
    110102: '西城区',
    // ....
  },
}
```

### 选中省市区

Vant 官方提供了一份默认的省市区数据，可以通过 [@vant/area-data](https://github.com/youzan/vant/tree/dev/packages/vant-area-data) 引入。

```bash
yarn add @vant/area-data
```

如果想选中某个省市区，需要传入一个`value`属性，绑定对应的省市区`code`。

::: $demo2 :::

### 和 Form 使用

::: $demo3 :::

### AreaProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/area.d.ts)

| 参数               | 说明 | 类型                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | 默认值 | 必填    |
| ------------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| showToolbar        | -    | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -      | `false` |
| value              | -    | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;string[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| areaList           | -    | _&nbsp;&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;province_list:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;city_list:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;&nbsp;&nbsp;county_list:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x:&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]:&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;}<br/>_ | -      | `false` |
| columnsNum         | -    | _&nbsp;&nbsp;number<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -      | `false` |
| columnsPlaceholder | -    | _&nbsp;&nbsp;string[]<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | -      | `false` |
| onChange           | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;values:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;picker:&nbsp;IPickerInstance<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index:&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                                                      | -      | `false` |
| onInput            | -    | _&nbsp;&nbsp;(event:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;detail:&nbsp;{<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string[]<br/>&nbsp;&nbsp;&nbsp;&nbsp;}<br/>&nbsp;&nbsp;})&nbsp;=>&nbsp;void<br/>_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -      | `false` |
