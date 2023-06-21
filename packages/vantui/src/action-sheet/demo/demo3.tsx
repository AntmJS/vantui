/* eslint-disable */
import react from 'react'
import { ActionSheet, Button } from '@antmjs/vantui'
import type { ActionSheetItem } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [actions] = react.useState<ActionSheetItem[]>([
    {
      name: '选项',
    },
    {
      name: '选项',
    },
    {
      name: '选项',
      subname: '描述信息',
      openType: 'share',
    },
  ])

  return (
    <>
      <ActionSheet
        show={show}
        actions={actions}
        cancelText="取消"
        onClose={() => setShow(false)}
      />
      <Button type="primary" onClick={() => setShow(true)}>
        弹出菜单
      </Button>
    </>
  )
}
