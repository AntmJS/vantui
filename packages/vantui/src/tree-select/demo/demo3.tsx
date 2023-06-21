import { TreeSelect, Image } from '@antmjs/vantui'

export default function Demo() {
  return (
    <TreeSelect
      items={[{ text: '自定义' }]}
      height="55vw"
      mainActiveIndex={0}
      renderContent={<Image src="https://img.yzcdn.cn/vant/apple-1.jpg" />}
    />
  )
}
