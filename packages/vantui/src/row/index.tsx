import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { RowProps } from '../../types/col'
import * as computed from './wxs'

export function Row(props: RowProps): JSX.Element {
  const { gutter, children, className, style, ...others } = props

  return (
    <View
      className={`van-row  ${className}`}
      style={utils.style([
        computed.rootStyle({
          gutter,
        }),
        style,
      ])}
      {...others}
    >
      {children}
    </View>
  )
}

export default Row
