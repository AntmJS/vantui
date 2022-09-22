import { useContext } from 'react'
import { View } from '@tarojs/components'
import { SwiperItemProps } from '../../types/swiper'
import { DataContext } from '../swiper/context'

interface IStyle {
  width?: string
  height?: string
  transform?: string
}

const defaultProps = {
  direction: 'horizontal',
  className: '',
} as SwiperItemProps

export const SwiperItem = (props: SwiperItemProps) => {
  const _props = { ...defaultProps, ...props }
  const { children, direction, size, className } = _props
  const parent: any = useContext(DataContext)

  const style = () => {
    const style: IStyle = {}
    const _direction = parent?.propSwiper.direction || direction
    const _size = parent?.size || size
    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = `${_size}px`
    }
    return style
  }

  return (
    <View className={`van-swiper-item ${className}`} style={style()}>
      {children}
    </View>
  )
}

export default SwiperItem
