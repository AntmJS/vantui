import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'
/**
 * @description Highlight Props
 */
export interface HighlightProps extends ViewProps {
  /**
   * @description 是否自动转义
   * @default true
   */
  autoEscape?: boolean
  /**
   * @description 是否区分大小写
   * @default false
   */
  caseSensitive?: boolean
  /**
   * @description 高亮元素的类名
   */
  highlightClass?: string
  /**
   * @description 期望高亮的文本
   */
  keywords: string | string[]
  /**
   * @description 源文本
   */
  sourceString: string
  /**
   * @description 非高亮元素的类名
   */
  unhighlightClass?: string
}

declare const Highlight: FunctionComponent<HighlightProps>

export { Highlight }
