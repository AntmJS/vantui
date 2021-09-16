import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { ColProps } from '../../../types/col'
import * as computed from './wxs'

export default function Index(props: ColProps): JSX.Element {
  const { span, offset, gutter, children, className, ...others } = props

  return (
    <View
      className={
        'custom-class ' +
        utils.bem('col', [span]) +
        ' ' +
        (offset ? 'van-col--offset-' + offset : '') +
        ' ' +
        className
      }
      style={computed.rootStyle({
        gutter,
      })}
      {...others}
    >
      {children}
    </View>
  )
}
