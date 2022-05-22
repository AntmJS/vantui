/* eslint-disable */
import react from 'react'
import { ActionSheet, Button } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [actions, setActions] = react.useState([
    {
      name: '着色选项',
      color: '#ee0a24',
    },
    {
      loading: true,
    },
    {
      name: '禁用选项',
      disabled: true,
    },
  ])

  return (
    <>
      <ActionSheet
        show={show}
        actions={actions}
        onClose={() => setShow(false)}
      />
      <Button type="primary" onClick={() => setShow(true)}>
        弹出菜单
      </Button>
    </>
  )
}
