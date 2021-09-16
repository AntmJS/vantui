import { View } from '@tarojs/components'
import { RowProps } from '../../../types/row'
import * as computed from './wxs'

export default function Index(props: RowProps): JSX.Element {
  const { gutter, children, className, ...others } = props

  return (
    <View
      className={`van-row custom-class ${className}`}
      style={computed.rootStyle({
        gutter,
      })}
      {...others}
    >
      {children}
    </View>
  )
}
