/* eslint-disable */
import react from 'react'
import { Dialog, Switch } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(false)

  const action = (e) => {
    Dialog.confirm({
      selector: '#switch-demo',
      title: '提示',
      message: '是否切换开关？',
    })
      .then(() => {
        setValue(e.detail)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <Dialog id="switch-demo" />
      <Switch checked={value} onChange={action} />
    </>
  )
}
