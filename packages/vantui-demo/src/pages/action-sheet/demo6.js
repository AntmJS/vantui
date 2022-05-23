/* eslint-disable */
import react from 'react'
import { ActionSheet, Button } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [actions, setActions] = react.useState([
    {
      name: '获取用户信息',
      color: '#07c160',
      openType: 'getUserInfo',
    },
  ])

  return (
    <>
      <ActionSheet
        show={show}
        actions={actions}
        onClose={() => setShow(false)}
        onGetuserinfo={(e) => console.info(e.detail)}
      />
      <Button type="primary" onClick={() => setShow(true)}>
        弹出菜单
      </Button>
    </>
  )
}
