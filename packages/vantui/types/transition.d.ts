import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'

export interface TransitionPropsCom extends TransitionProps, StandardProps {
  children?: JSX.Element | JSX.Element[] | string
  customStyle?: string
  customClass?: string
}

declare const Transition: ComponentClass<TransitionPropsCom>

export { Transition }
