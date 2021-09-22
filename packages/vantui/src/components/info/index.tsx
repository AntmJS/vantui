import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { InfoProps } from '../../../types/info'

export default function Index(props: InfoProps) {
  const { dot, info = null, customStyle, style, className, ...others } = props

  return (
    <>
      {(info || info === 0 || dot) && (
        <View
          className={
            'van-info ' +
            utils.bem('info', {
              dot,
            }) +
            ' custom-class ' +
            className
          }
          style={utils.style([customStyle, style])}
          {...others}
        >
          {dot ? '' : info}
        </View>
      )}
    </>
  )
}
