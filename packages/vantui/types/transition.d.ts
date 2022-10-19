import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'

export interface TransitionPropsCom extends TransitionProps, ViewProps {
  children?: ReactNode
}

declare const Transition: FunctionComponent<TransitionPropsCom>

export { Transition }
