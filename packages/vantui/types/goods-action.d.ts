import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface GoodsActionProps extends StandardProps {
  safeAreaInsetBottom?: boolean
  children: ReactNode
}

declare const GoodsAction: FunctionComponent<GoodsActionProps>

export { GoodsAction }
