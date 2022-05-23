/* eslint-disable */
import react from 'react'
import { SwipeCell, Button, CellGroup, Cell } from '@antmjs/vantui'

export default function Demo() {
  const it = react.useRef()

  react.useEffect(() => {
    it.current.open()
  }, [])

  return (
    <SwipeCell
      ref={it}
      rightWidth={65}
      leftWidth={65}
      asyncClose
      renderLeft={<Button>选择</Button>}
      renderRight={<Button>删除</Button>}
    >
      <CellGroup>
        <Cell title="单元格" value="内容" />
      </CellGroup>
    </SwipeCell>
  )
}
