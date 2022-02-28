import { Component } from 'react'
import { showToast as Toast } from '@tarojs/taro'
import { Input } from '@tarojs/components'
import { NumberKeyboard, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

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
    console.info('onInput action')
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
