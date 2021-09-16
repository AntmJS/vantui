import React, { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface RowProps extends StandardProps {
  gutter?: number | string
  children: React.ReactNode
}

declare const Row: ComponentClass<RowProps>

export { Row }
