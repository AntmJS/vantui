import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface GoodsActionProps extends ViewProps {
  safeAreaInsetBottom?: boolean
  children: ReactNode
}

declare const GoodsAction: FunctionComponent<GoodsActionProps>

export { GoodsAction }
