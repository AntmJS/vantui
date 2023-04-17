# Cascader 级联选择器

### 介绍

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

### 引入

在 Taro 文件中引入组件

```js
import { Cascader } from '@antmjs/vantui'
```

## 代码演示

### 基本用法

传入`options`列表。

```jsx
function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value1, setValue1] = react.useState([])
  const [options, setoptions] = react.useState(COMMON.options)
  const change1 = (value, path) => {
    console.log('onChange', value, path)
    setValue1(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value1 ? value1.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisible}
        value={value1}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change1}
        onPathChange={onPathChange}
      />
    </>
  )
}
```

### options 数据

默认的数据结构

```js common
const options = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区', disabled: true },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true,
    children: [
      {
        value: '长沙',
        text: '长沙',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' },
        ],
      },
    ],
  },
]
```

### 自定义属性名称

可通过`textKey`、`valueKey`、`childrenKey`指定属性名。

```js common
const costomOptions = [
  {
    value1: '浙江',
    text1: '浙江',
    items: [
      {
        value1: '杭州',
        text1: '杭州',
        items: [
          { value1: '西湖区', text1: '西湖区' },
          { value1: '余杭区', text1: '余杭区' },
        ],
      },
      {
        value1: '温州',
        text1: '温州',
        items: [
          { value1: '鹿城区', text1: '鹿城区' },
          { value1: '瓯海区', text1: '瓯海区' },
        ],
      },
    ],
  },
  {
    value1: '湖南',
    text1: '湖南',
    items: [
      {
        value1: '长沙',
        text1: '长沙',
        items: [
          { value1: '西湖区', text1: '西湖区' },
          { value1: '余杭区', text1: '余杭区' },
        ],
      },
      {
        value1: '温州',
        text1: '温州',
        items: [
          { value1: '鹿城区', text1: '鹿城区' },
          { value1: '瓯海区', text1: '瓯海区' },
        ],
      },
    ],
  },
  {
    value1: '福建',
    text1: '福建',
    items: [
      {
        value1: '福州',
        text1: '福州',
        items: [
          { value1: '鼓楼区', text1: '鼓楼区' },
          { value1: '台江区', text1: '台江区' },
        ],
      },
    ],
  },
]
```

使用自定义数据结构的数据

```jsx
function Demo() {
  const { costomOptions } = COMMON
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setValue] = react.useState([])
  const [options, setoptions] = react.useState(costomOptions)
  const change = (value, path) => {
    console.log('onChange', value, path)
    setValue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        textKey="text1"
        valueKey="value1"
        childrenKey="items"
        visible={isVisible}
        value={value}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change}
      />
    </>
  )
}
```

### 使用完整的地区数据

使用饿了么开源地区数据, 数据过多的时候会自动滚动到选中元素，由于 tab 的 ScrollView 和垂直的 scrollView 可能冲突，所以垂直的自动滚动存在延迟，如果不需要自动滚动，可以使用`scrollIntoView`false 关闭

```jsx
import { regionData, CodeToText } from 'element-china-area-data'

function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value1, setValue1] = react.useState([])
  const [title, setTitle] = react.useState([])
  const change1 = (value, path) => {
    setValue1(value)
    setTitle([CodeToText[value[0]], CodeToText[value[1]], CodeToText[value[2]]])
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={title.length ? title.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        // scrollIntoView={false}
        childrenKey="children"
        visible={isVisible}
        value={value1}
        textKey="label"
        title="地址选择"
        options={regionData}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change1}
      />
    </>
  )
}
```

### 动态加载

使用`lazy`标识是否需要动态获取数据，此时不传`options`代表所有数据都需要通过`lazyLoad`加载，首次加载通过`root`属性区分，当遇到非叶子节点时会调用`lazyLoad`方法，参数为当前节点和`resolve`方法，注意`resolve`方法必须调用，不传子节点时会被当做叶子节点处理。

```jsx
function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setValue] = react.useState(['A0', 'A12', 'A23', 'A32'])

  const lazyLoad = (node, resolve) => {
    setTimeout(() => {
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' },
        ])
      } else {
        const { value, level } = node
        const text = value.substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        const value3 = `${text}${level + 1}3`
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 },
        ])
      }
    }, 2000)
  }
  const change = (value, path) => {
    setValue(value)
  }
  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisible}
        value={value}
        title="地址选择"
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change}
        lazy
        lazyLoad={lazyLoad}
      />
    </>
  )
}
```

### 部分数据动态加载

```jsx
function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setvalue] = react.useState([])
  const [options, setOptions] = react.useState([
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' },
      ],
    },
    { value: 'C0', text: 'C0' },
  ])

  const lazyLoad = (node, resolve) => {
    setTimeout(() => {
      const { value, level } = node
      const text = value.substring(0, 1)
      const value1 = `${text}${level + 1}1`
      const value2 = `${text}${level + 1}2`
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 },
      ])
    }, 500)
  }
  const change = (value, path) => {
    setvalue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisible}
        value={value}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change}
        lazy
        lazyLoad={lazyLoad}
      />
    </>
  )
}
```

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`convertConfig`告诉组件需要进行自动转换，`convertConfig`接受 4 个参数，`topId`为顶层节点的父级 id，`idKey`为节点唯一 id，`pidKey`为指向父节点 id 的属性名，存在`sortKey`将根据指定字段调用 Array.prototype.sort()进行同层排序。

```jsx
function Demo() {
  const [isVisiblevalue, setIsVisiblevalue] = react.useState(false)
  const [value, setValue] = react.useState(['广东省', '广州市'])
  const [optionsvalue, setOptionsvalue] = react.useState([
    { value: '北京', text: '北京', id: 1, pid: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
    { value: '广东省', text: '广东省', id: 2, pid: null },
    { value: '广州市', text: '广州市', id: 21, pid: 2 },
  ])
  const [convertConfigvalue, setConvertConfigvalue] = react.useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: '',
  })
  const change = (value, path) => {
    setValue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisiblevalue(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisiblevalue}
        value={value}
        title="地址选择"
        options={optionsvalue}
        convertConfig={convertConfigvalue}
        closeable
        onClose={() => {
          setIsVisiblevalue(false)
        }}
        onChange={change}
      />
    </>
  )
}
```

### CascaderProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cascader.d.ts)

| 参数              | 说明                                                    | 类型                                                                                                                                                                  | 默认值 | 必填    |
| ----------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------- |
| visible           | 弹窗是否展示                                            | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                            | -      | `true`  |
| options           | 选择数据                                                | _&nbsp;&nbsp;CascaderOption[]<br/>_                                                                                                                                   | -      | `true`  |
| value             | 当前值                                                  | _&nbsp;&nbsp;string[]<br/>_                                                                                                                                           | -      | `false` |
| title             | -                                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| textKey           | -                                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| valueKey          | -                                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| childrenKey       | -                                                       | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| convertConfig     | 当 options 为可转换为树形结构的扁平结构时，配置转换规则 | _&nbsp;&nbsp;Record<<br/>&nbsp;&nbsp;&nbsp;&nbsp;string,<br/>&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;number&nbsp;&brvbar;&nbsp;null<br/>&nbsp;&nbsp;><br/>_ | -      | `false` |
| closeable         | 是否可以手动关闭                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                            | -      | `false` |
| closeIconPosition | 关闭图标的位置                                          | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| closeIcon         | 关闭图标                                                | _&nbsp;&nbsp;string<br/>_                                                                                                                                             | -      | `false` |
| scrollIntoView    | 数据过多时，选中元素是否滚动到中央                      | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                            | true   | `false` |
| lazy              | 是否开启动态加载                                        | _&nbsp;&nbsp;boolean<br/>_                                                                                                                                            | -      | `false` |
| lazyLoad          | 动态加载方法                                            | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;node:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;resolve:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                    | -      | `false` |
| onClose           | 弹窗关闭                                                | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_                                                                                                                               | -      | `false` |
| onChange          | 选中值改变时触发                                        | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;params:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                    | -      | `false` |
| onPathChange      | 选中项改变时触发                                        | _&nbsp;&nbsp;(<br/>&nbsp;&nbsp;&nbsp;&nbsp;value:&nbsp;any,<br/>&nbsp;&nbsp;&nbsp;&nbsp;params:&nbsp;any<br/>&nbsp;&nbsp;)&nbsp;=>&nbsp;void<br/>_                    | -      | `false` |

### CascaderConfig [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cascader.d.ts)

默认的`options`的格式
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| value | - | _&nbsp;&nbsp;string<br/>_ |
| text | - | _&nbsp;&nbsp;string<br/>_ |
| children | - | _&nbsp;&nbsp;string<br/>_ |

### CascaderOption [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cascader.d.ts)

异步操作时的`options`格式
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| text | - | _&nbsp;&nbsp;string<br/>_ |
| value | - | _&nbsp;&nbsp;number&nbsp;&brvbar;&nbsp;string<br/>_ |
| paneKey | - | _&nbsp;&nbsp;string<br/>_ |
| disabled | 是否可选择 | _&nbsp;&nbsp;boolean<br/>_ |
| children | - | _&nbsp;&nbsp;CascaderOption[]<br/>_ |
| leaf | 是否有下级 | _&nbsp;&nbsp;boolean<br/>_ |
| level | - | _&nbsp;&nbsp;number<br/>_ |
| loading | - | _&nbsp;&nbsp;boolean<br/>_ |
| root | - | _&nbsp;&nbsp;boolean<br/>_ |

### convertConfig [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/cascader.d.ts)

当 options 为可转换为树形结构的扁平结构时，配置转换规则
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| topId | 顶层节点的父级 id | _&nbsp;&nbsp;attr:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;string<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;number<br/>&nbsp;&nbsp;&nbsp;&nbsp;&brvbar;&nbsp;null<br/>_ |
| idKey | 节点唯一 id | _&nbsp;&nbsp;string<br/>_ |
| pidKey | 父节点 id 的属性名 | _&nbsp;&nbsp;string<br/>_ |
| sortKey | 根据指定字段调用 Array.prototype.sort()进行同层排序 | _&nbsp;&nbsp;string<br/>_ |

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考[ConfigProvider 组件](https://antmjs.github.io/vantui/#/config-provider)

| 名称                                 | 默认值             |
| ------------------------------------ | ------------------ |
| --cascader-font-size                 | ` 28px;`           |
| --cascader-line-height               | ` 44px;`           |
| --cascader-tabs-item-padding         | ` 0 20px;`         |
| --cascader-title-padding             | ` 48px 40px 34px;` |
| --cascader-title-font-size           | ` 36px;`           |
| --cascader-title-line-height         | ` 40px;`           |
| --cascader-item-padding              | ` 20px 40px;`      |
| --cascader-item-font-size            | ` 28px;`           |
| --cascader-item-color                | ` #1a1a1a;`        |
| --cascader-item-active-color         | ` @primary-color;` |
| --cascader-pane-height               | ` 684px;`          |
| --cascader-pane-paddingTop           | ` 20px;`           |
| --cascader-icon-checklist-marginLeft | ` 20px;`           |
