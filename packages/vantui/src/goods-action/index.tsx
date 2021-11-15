import { cloneElement, isValidElement } from 'react'
import { View } from '@tarojs/components'
import toArray from 'rc-util/lib/Children/toArray'
import * as utils from '../wxs/utils'
import { GoodsActionProps } from '../../types/goods-action'
import { GoodsActionButtonProps } from '../../types/goods-action-button'

function parseTabList(children: React.ReactNode): any[] {
  return toArray(children)
    .map((node: React.ReactElement<GoodsActionButtonProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter((tab) => tab)
}

export function GoodsAction(props: GoodsActionProps) {
  const {
    safeAreaInsetBottom = true,
    style,
    children,
    className,
    ...others
  } = props

  const tabs = parseTabList(children)
  const newChildren: any = tabs.map((tab, index) => {
    const isGAB = tab.node?.type?.displayName === 'GoodsActionButton'
    const preIsGAB =
      tabs[index - 1]?.node?.type?.displayName === 'GoodsActionButton'
    const nextIsGAB =
      tabs[index + 1]?.node?.type?.displayName === 'GoodsActionButton'
    return cloneElement(tab.node, {
      key: index,
      index,
      isFirst: !preIsGAB && isGAB,
      isLast: !nextIsGAB && isGAB,
    })
  })

  return (
    <View
      className={
        ' ' +
        utils.bem('goods-action', {
          safe: safeAreaInsetBottom,
        }) +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}

export default GoodsAction
