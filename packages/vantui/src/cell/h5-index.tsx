import { useCallback } from 'react'
import * as utils from '../wxs/h5-utils'
import { CellProps } from '../../types/cell'
import { Icon } from '../icon/h5-index'

export function Cell(props: CellProps) {
  const {
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
  const _click: (event) => void = useCallback(
    function (event) {
      onClick?.(event)
    },
    [onClick],
  )
  return (
    <div
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
        ` ${className || ''} ` +
        'van-cell__h5'
      }
      style={style as React.CSSProperties}
      onClick={_click}
      {...(others as any)}
    >
      {icon ? (
        <Icon
          name={icon}
          className="van-cell__left-icon-wrap van-cell__left-icon"
        ></Icon>
      ) : (
        renderIcon
      )}
      <div
        style={{
          maxWidth: utils.addUnit(titleWidth),
          minWidth: utils.addUnit(titleWidth),
          ...titleStyle,
        }}
        className="van-cell__title title-class"
      >
        {title || title === 0 ? <>{title}</> : renderTitle}
        {(label || renderLabel) && (
          <div className="van-cell__label label-class">
            {renderLabel || (label && <>{label}</>)}
          </div>
        )}
      </div>
      <div className="van-cell__value value-class">
        {value || value === 0 ? <>{value}</> : children}
      </div>
      {isLink ? (
        <Icon
          name={arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'}
          className="van-cell__right-icon-wrap right-icon-class van-cell__right-icon"
        ></Icon>
      ) : (
        renderRightIcon
      )}
      {renderExtra}
    </div>
  )
}

export default Cell
