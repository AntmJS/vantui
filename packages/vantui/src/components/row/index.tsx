import { View } from '@tarojs/components'
import { RowProps } from '../../../types/row'
import * as computed from './wxs'

export default function Index(props: RowProps): JSX.Element {
  const { gutter, children, ...others } = props

  return (
    <View
      className="van-row custom-class"
      style={computed.rootStyle({
        gutter,
      })}
      {...others}
    >
      {children}
    </View>
  )
}
