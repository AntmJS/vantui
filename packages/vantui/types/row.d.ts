import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
/**
 * @title Row Props
 */
export interface RowProps extends StandardProps {
  /**
   * @description 列元素之间的间距（单位为 px）
   */
  gutter?: number | string
  children: React.ReactNode
}

declare const Row: ComponentClass<RowProps>

export { Row }
