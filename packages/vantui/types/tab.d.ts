import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabProps extends StandardProps {
  dot?: boolean
  info?: string | number
  title?: string
  disabled?: boolean
  titleStyle?: string
  name?: string | number
  children: ReactNode
}

declare const Tab: ComponentClass<TabProps>

export { Tab }
