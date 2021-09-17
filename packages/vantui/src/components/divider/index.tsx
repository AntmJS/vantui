import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { DividerProps } from '../../../types/divider'
import * as computed from './wxs'

export default function Index(props: DividerProps) {
  const {
    dashed,
    hairline,
    contentPosition,
    borderColor,
    textColor,
    fontSize,
    customStyle,
    style,
    className,
    children,
    ...others
  } = props

  return (
    <View
      className={
        'custom-class ' +
        utils.bem('divider', [
          {
            dashed,
            hairline,
          },
          contentPosition,
        ]) +
        ` ${className}`
      }
      style={utils.style([
        computed.rootStyle({
          borderColor,
          textColor,
          fontSize,
          customStyle,
        }),
        style,
      ])}
      {...others}
    >
      {children}
    </View>
  )
}
