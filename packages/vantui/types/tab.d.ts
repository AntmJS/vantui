import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabProps extends StandardProps {
  dot?: boolean
  info: string | null
  title?: string
  disabled?: boolean
  titleStyle?: string
  name?: string | null
  children: ReactNode
}

declare const Tab: ComponentClass<TabProps>

export { Tab }
