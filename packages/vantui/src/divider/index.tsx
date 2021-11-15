import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { DividerProps } from '../../types/divider'
import * as computed from './wxs'

export function Divider(props: DividerProps) {
  const {
    dashed = false,
    hairline = false,
    contentPosition,
    borderColor,
    textColor,
    fontSize,
    style,
    className,
    children,
    ...others
  } = props

  return (
    <View
      className={
        ' ' +
        utils.bem('divider', [
          {
            dashed,
            hairline,
          },
          contentPosition,
        ]) +
        ` ${className || ''}`
      }
      style={utils.style([
        computed.rootStyle({
          borderColor,
          textColor,
          fontSize,
        }),
        style,
      ])}
      {...others}
    >
      {children}
    </View>
  )
}
export default Divider
