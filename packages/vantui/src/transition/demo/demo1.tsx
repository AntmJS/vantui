/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Transition } from '@antmjs/vantui'

const animations = [
  'fade',
  'fade-up',
  'fade-down',
  'fade-left',
  'fade-right',
  'slide-up',
  'slide-down',
  'slide-left',
  'slide-right',
]
export default function Demo() {
  const [show, setShow] = react.useState('')
  const animationAction = (ss) => {
    setShow(ss)
    setTimeout(() => {
      setShow('')
    }, 1000)
  }

  return (
    <View>
      {animations.map((item) => (
        <Cell
          title={item}
          key={item}
          onClick={() => animationAction(item)}
        ></Cell>
      ))}
      {animations.map((item) => (
        <Transition
          duration={{ enter: 300, leave: 1000 }}
          className="center-x"
          enterClass="vanEnterClass"
          enterActiveClass="vanEnterActiveClass"
          leaveActiveClass="vanLeaveActiveClass"
          leaveToClass="vanLeaveToClass"
          key={`${item}tran`}
          show={show === item}
          name={item}
        />
      ))}
    </View>
  )
}
