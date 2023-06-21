/* eslint-disable */
import react from 'react'
import {
  SwipeCell,
  Button,
  CellGroup,
  Cell,
  ISwiperCellInstance,
} from '@antmjs/vantui'

export default function Demo() {
  const it = react.useRef<ISwiperCellInstance>()
  const closeAction = () => {
    setTimeout(() => {
      it.current?.close()
    }, 2000)
  }

  return (
    <SwipeCell
      ref={it}
      rightWidth={75}
      leftWidth={75}
      asyncClose
      onClose={closeAction}
      renderLeft={<Button>选择</Button>}
      renderRight={<Button>删除</Button>}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  )
}
