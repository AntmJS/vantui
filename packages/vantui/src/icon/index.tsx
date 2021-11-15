import { View, Image } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { IconProps } from '../../types/icon'
import { Info } from '../info/index'
import * as computed from './wxs'

export function Icon(props: IconProps) {
  const {
    classPrefix = 'van-icon',
    name,
    color,
    size,
    dot,
    info,
    style,
    className,
    ...others
  } = props
  return (
    <View
      className={
        computed.rootClass({
          classPrefix,
          name,
        }) + ` ${className || ''}`
      }
      style={utils.style([
        computed.rootStyle({
          color,
          size,
        }),
        style,
      ])}
      {...others}
    >
      {(info || info === 0 || dot) && (
        <Info dot={dot} info={info} className="van-icon__info"></Info>
      )}
      {computed.isImage(name) && (
        <Image src={name!} mode="aspectFit" className="van-icon__image"></Image>
      )}
    </View>
  )
}
export default Icon
