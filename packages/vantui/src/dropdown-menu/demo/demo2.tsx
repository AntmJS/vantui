/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import {
  DropdownMenu,
  DropdownItem,
  Cell,
  Switch,
  Button,
  IDropdownItemInstance,
} from '@antmjs/vantui'

export default function Demo() {
  const it = react.useRef<IDropdownItemInstance>(null)
  const [state, setState] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
    ],
    value1: 0,
    switch: false,
    result: '',
  })

  const changeState = react.useCallback(
    function (type, value) {
      setState({
        ...state,
        [type]: value,
      })
    },
    [state],
  )

  const onConfirm = react.useCallback(
    function () {
      it.current?.toggle()
      changeState('result', state.switch ? '打开状态' : '关闭状态')
    },
    [it, changeState],
  )

  return (
    <DropdownMenu>
      <DropdownItem value={state.value1} options={state.option1} />
      <DropdownItem ref={it} title={state.result}>
        <Cell
          title="选择开关"
          renderRightIcon={
            <Switch
              size="24px"
              style="height: 26px"
              checked={state.switch}
              activeColor="#ee0a24"
              onChange={() => changeState('switch', !state.switch)}
            />
          }
        ></Cell>
        <View style="padding: 5px 16px;">
          <Button type="danger" block round onClick={onConfirm}>
            确认
          </Button>
        </View>
      </DropdownItem>
    </DropdownMenu>
  )
}
