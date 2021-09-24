import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'

export interface TransitionPropsCom extends TransitionProps, StandardProps {
  children?: ReactNode
  customStyle?: string
  customClass?: string
}

declare const Transition: ComponentClass<TransitionPropsCom>

export { Transition }
