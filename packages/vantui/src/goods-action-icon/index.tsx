import { useCallback } from 'react'
import { Text, ITouchEvent } from '@tarojs/components'
import VanButton from '../button'
import VanIcon from '../icon'
import { jumpLink } from '../common/jumpLink'
import { GoodsActionIconProps } from '../../types/goods-action-icon'

export function GoodsActionIcon(props: GoodsActionIconProps) {
  const {
    text,
    url,
    linkType,
    dot,
    info,
    icon,
    style,
    onClick,
    renderIcon,
    className,
    ...others
  } = props

  const _click: (event: ITouchEvent) => void = useCallback(
    function (event) {
      onClick?.(event)
      if (url) jumpLink(url, linkType)
    },
    [linkType, onClick, url],
  )

  return (
    <VanButton
      square
      size="mini"
      className={`van-goods-action-icon ${className}`}
      style={style}
      onClick={_click}
      {...others}
    >
      {icon ? (
        <VanIcon
          name={icon}
          dot={dot}
          info={info}
          className="van-goods-action-icon__icon icon-class"
        ></VanIcon>
      ) : (
        renderIcon
      )}
      <Text className="text-class">{text}</Text>
    </VanButton>
  )
}
export default GoodsActionIcon
