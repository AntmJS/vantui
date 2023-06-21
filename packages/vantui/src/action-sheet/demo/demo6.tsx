/* eslint-disable */
import react from 'react'
import { ActionSheet, Button } from '@antmjs/vantui'
import type { ActionSheetItem } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [actions] = react.useState<ActionSheetItem[]>([
    {
      name: '获取用户信息',
      color: '#07c160',
      openType: 'getUserInfo',
      onGetUserInfo: (e) => console.info(e.detail),
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
