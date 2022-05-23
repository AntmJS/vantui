/* eslint-disable */
import react from 'react'
import { Input } from '@tarojs/components'
import { Cell, NumberKeyboard, Toast } from '@antmjs/vantui'

export default function Demo() {
  const [visible, setVisible] = react.useState('')
  const [value, setValue] = react.useState('')

  const actions = {
    onClose: () => {
      Toast.show('close')
      setVisible('')
    },
    onInput: (key) => {
      Toast.show(key)
    },
    onDelete: () => {
      Toast.show('delete')
    },
  }

  const onDelete = () => {
    setValue(value.slice(0, value.length - 1))
  }

  const onInput = (value_) => {
    setValue(value + value_)
  }

  return (
    <>
      <Cell title="默认键盘" onClick={() => setVisible('demo1')}></Cell>
      <Cell title="带标题键盘" onClick={() => setVisible('demo2')}></Cell>
      <Cell title="带确认键盘" onClick={() => setVisible('demo3')}></Cell>
      <Cell title="带自定义键盘" onClick={() => setVisible('demo4')}></Cell>
      <Cell title="乱序键盘" onClick={() => setVisible('demo5')}></Cell>
      <Cell title="弹窗内展示键盘" onClick={() => setVisible('demo6')}></Cell>
      <Cell onClick={() => setVisible('demo7')}>
        <Input value={value} placeholder="数字键盘结果" />
      </Cell>
      <NumberKeyboard
        visible={visible === 'demo1'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
      />
      <NumberKeyboard
        visible={visible === 'demo2'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        title="数字键盘"
        customKey="-"
      />
      <NumberKeyboard
        visible={visible === 'demo3'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        showCloseButton={false}
        confirmText="确定"
      />
      <NumberKeyboard
        visible={visible === 'demo4'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        customKey="."
        showCloseButton={false}
        confirmText="确定"
      />
      <NumberKeyboard
        visible={visible === 'demo5'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
        randomOrder
        customKey="X"
        confirmText="确定"
      />
      <NumberKeyboard
        visible={visible === 'demo6'}
        onClose={actions.onClose}
        onInput={actions.onInput}
        onDelete={actions.onDelete}
      />
      <NumberKeyboard
        visible={visible === 'demo7'}
        onClose={actions.onClose}
        onInput={onInput}
        onDelete={onDelete}
        customKey="X"
      />
      <Toast />
    </>
  )
}
