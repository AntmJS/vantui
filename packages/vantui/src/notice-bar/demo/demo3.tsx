import { NoticeBar } from '@antmjs/vantui'

export default function Demo() {
  return (
    <NoticeBar
      wrapable={true}
      scrollable={false}
      text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
    />
  )
}
