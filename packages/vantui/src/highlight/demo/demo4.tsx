/* eslint-disable */
import { Highlight, Toast } from '@antmjs/vantui'

export default function Demo() {
  const text = '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。'
  const keywords = ['生活', '答案']

  const onHighlightClick = (text: string) => {
    Toast.show(`点击的文本为“${text}”`)
  }

  return (
    <Highlight
      keywords={keywords}
      sourceString={text}
      onHighlightClick={onHighlightClick}
    />
  )
}
