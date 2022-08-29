import { View } from '@tarojs/components'
import { useMemo, cloneElement } from 'react'
import toArray from 'rc-util/lib/Children/toArray'
import classNames from 'classnames'
import * as utils from '../wxs/utils'
import { RowProps } from '../../types/col'
import * as computed from './wxs'

export function Row(props: RowProps): JSX.Element {
  const { gutter, children, className, style, ...others } = props

  const newChildren: React.ReactElement[] = useMemo(() => {
    return toArray(children).map((node: React.ReactElement, i) =>
      cloneElement(node, {
        key: i,
        gutter: gutter,
      }),
    )
  }, [children, gutter])

  return (
    <View className="van-row-wrapper">
      <View
        className={classNames(`van-row`, className)}
        style={utils.style([
          computed.rootStyle({
            gutter,
          }),
          style,
        ])}
        {...others}
      >
        {newChildren}
      </View>
    </View>
  )
}

export default Row
