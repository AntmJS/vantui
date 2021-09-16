import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { RowProps } from '../../../types/row'
import * as computed from './wxs'

export default function Index(props: RowProps): JSX.Element {
  const { gutter, children, className, style, ...others } = props

  return (
    <View
      className={`van-row custom-class ${className}`}
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
