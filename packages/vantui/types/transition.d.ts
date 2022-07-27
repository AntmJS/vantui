import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'

export interface TransitionPropsCom extends TransitionProps, StandardProps {
  children?: ReactNode
}

declare const Transition: FunctionComponent<TransitionPropsCom>

export { Transition }
