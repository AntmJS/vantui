/* eslint-disable */
import { Highlight } from '@antmjs/vantui'
import './demo.less'

export default function Demo() {
  const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'
  const keywords = '生活'

  return (
    <Highlight
      keywords={keywords}
      sourceString={text}
      highlightClass="demo-custom-highlight-class"
    />
  )
}
