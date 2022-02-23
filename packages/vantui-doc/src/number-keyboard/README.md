# NumberKeyboard

数字键盘，可以配合密码输入框组件或自定义的输入框组件使用
### 基础用法

```jsx
import { Component } from 'react'
import { showToast as Toast } from '@tarojs/taro'
import { Input } from '@tarojs/components'
import { NumberKeyboard, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'

export default class Index extends Component {
  constructor() {
    super()

    this.state = {
      visible: '',
      value: '',
    }

    this.actions = {
      onClose: () => {
        Toast({ title: 'close' })
        this.setState({ visible: '' })
      },
      onInput: (key) => {
        Toast({ title: key })
      },
      onDelete: () => {
        Toast({ title: 'delete' })
      },
    }
  }

  onInput = (value) => {
    this.setState({
      value: this.state.value + value,
    })
  }

  onDelete = () => {
    const { value } = this.state
    this.setState({
      value: value.slice(0, value.length - 1),
    })
  }

  openKeyboard = (name) => {
    this.setState({
      visible: name,
    })
  }

  render() {
    return (
      <DemoPage title="NumberKeyboard 数字键盘">
        <>
          <DemoBlock title="基础用法">
            <Cell
              title="默认键盘"
              onClick={() => this.openKeyboard('demo1')}
            ></Cell>
            <Cell
              title="带标题键盘"
              onClick={() => this.openKeyboard('demo2')}
            ></Cell>
            <Cell
              title="带确认键盘"
              onClick={() => this.openKeyboard('demo3')}
            ></Cell>
            <Cell
              title="带自定义键盘"
              onClick={() => this.openKeyboard('demo4')}
            ></Cell>
            <Cell
              title="乱序键盘"
              onClick={() => this.openKeyboard('demo5')}
            ></Cell>
            <Cell
              title="弹窗内展示键盘"
              onClick={() => this.openKeyboard('demo6')}
            ></Cell>
            <Cell onClick={() => this.openKeyboard('demo7')}>
              <Input value={this.state.value} placeholder="数字键盘结果" />
            </Cell>
          </DemoBlock>
          <NumberKeyboard
            visible={this.state.visible === 'demo1'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo2'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
            title="数字键盘"
            customKey="-"
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo3'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
            showCloseButton={false}
            confirmText="确定"
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo4'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
            customKey="."
            showCloseButton={false}
            confirmText="确定"
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo5'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
            randomOrder
            customKey="X"
            confirmText="确定"
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo6'}
            onClose={this.actions.onClose}
            onInput={this.actions.onInput}
            onDelete={this.actions.onDelete}
          />
          <NumberKeyboard
            visible={this.state.visible === 'demo7'}
            onClose={this.actions.onClose}
            onInput={this.onInput}
            onDelete={this.onDelete}
            customKey="X"
          />
        </>
      </DemoPage>
    )
  }
}


```
### NumberKeyboardProps [[详情]](https://github.com/AntmJS/vantui/tree/main/packages/vantui/types/number-keyboard.d.ts)   

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| --- | --- | --- | --- | --- |
| visible | 是否展示 | _&nbsp;&nbsp;boolean<br/>_ | - | `false` |
| title | 键盘标题 | _&nbsp;&nbsp;string<br/>_ | - | `false` |
| confirmText | 完成按钮文案，null 不展示 | _&nbsp;&nbsp;string&nbsp;&brvbar;&nbsp;null<br/>_ | null | `false` |
| customKey | 自定义按钮 | _&nbsp;&nbsp;"-"&nbsp;&brvbar;&nbsp;"."&nbsp;&brvbar;&nbsp;"X"<br/>_ | - | `false` |
| randomOrder | 是否乱序键盘 | _&nbsp;&nbsp;boolean<br/>_ | false | `false` |
| showCloseButton | 是否展示收起键盘箭头 | _&nbsp;&nbsp;boolean<br/>_ | true | `false` |
| onInput | 输入内容回调 | _&nbsp;&nbsp;(v:&nbsp;string)&nbsp;=>&nbsp;void<br/>_ | true | `false` |
| onDelete | 删除内容回调 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onClose | 点击关闭时触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| onConfirm | 点击确定按钮时触发 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| afterClose | 键盘完全收起回调 | _&nbsp;&nbsp;()&nbsp;=>&nbsp;void<br/>_ | - | `false` |
| closeOnConfirm | 是否在点击确定按钮时自动关闭 | _&nbsp;&nbsp;boolean<br/>_ | true | `false` |

