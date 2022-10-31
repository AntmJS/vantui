import { useCallback } from 'react'
import { View, ITouchEvent } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { CellProps } from '../../types/cell'
import { jumpLink } from '../common/jumpLink'
import { Icon } from '../icon'
import * as computed from './wxs'

export function Cell(props: CellProps) {
  const {
    url,
    linkType,
    size,
    center,
    required,
    border = true,
    isLink,
    clickable,
    icon,
    titleWidth,
    titleStyle,
    title,
    label,
    value,
    arrowDirection,
    onClick,
    renderIcon,
    renderTitle,
    renderLabel,
    renderRightIcon,
    renderExtra,
    children,
    style,
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
    <View
      className={
        ' ' +
        utils.bem('cell', [
          size,
          {
            center,
            required,
            borderless: !border,
            clickable: isLink || clickable,
          },
        ]) +
        ` ${className || ''}`
      }
      hoverClass="van-cell--hover hover-class"
      hoverStayTime={70}
      style={utils.style([style])}
      onClick={_click}
      {...others}
    >
      {icon ? (
        <Icon
          name={icon}
          className="van-cell__left-icon-wrap van-cell__left-icon"
        ></Icon>
      ) : (
        renderIcon
      )}
      <View
        style={computed.titleStyle({
          titleWidth,
          titleStyle,
        })}
        className="van-cell__title title-class"
      >
        {title || title === 0 ? <>{title}</> : renderTitle}
        {(label || renderLabel) && (
          <View className="van-cell__label label-class">
            {renderLabel || (label && <>{label}</>)}
          </View>
        )}
      </View>
      <View className="van-cell__value value-class">
        {value || value === 0 ? <>{value}</> : children}
      </View>
      <View>
        {isLink ? (
          <Icon
            name={arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'}
            className="van-cell__right-icon-wrap right-icon-class van-cell__right-icon"
          ></Icon>
        ) : (
          renderRightIcon
        )}
      </View>
      <View>{renderExtra}</View>
    </View>
  )
}

export default Cell
