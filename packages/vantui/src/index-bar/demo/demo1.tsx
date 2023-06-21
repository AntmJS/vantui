import { Block } from '@tarojs/components'
import { IndexBar, IndexAnchor, Cell } from '@antmjs/vantui'

const arr: string[] = []
const charCodeOfA = 'A'.charCodeAt(0)
for (let i = 0; i < 26; i++) {
  arr.push(String.fromCharCode(charCodeOfA + i))
}
export default function Demo() {
  return (
    <IndexBar>
      {arr.map((item) => (
        <Block key={item}>
          <IndexAnchor index={item}></IndexAnchor>
          <Cell title="文本"></Cell>
          <Cell title="文本"></Cell>
          <Cell title="文本"></Cell>
        </Block>
      ))}
    </IndexBar>
  )
}
