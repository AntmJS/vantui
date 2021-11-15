import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { InfoProps } from '../../types/info'

export function Info(props: InfoProps) {
  const { dot, info = null, style, className, ...others } = props

  return (
    <>
      {(info || info === 0 || dot) && (
        <View
          className={
            'van-info ' +
            utils.bem('info', {
              dot,
            }) +
            '  ' +
            className
          }
          style={utils.style([style])}
          {...others}
        >
          {dot ? '' : info}
        </View>
      )}
    </>
  )
}
export default Info
