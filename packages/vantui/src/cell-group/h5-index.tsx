import * as utils from '../wxs/h5-utils'
import { CellGroupProps } from '../../types/cell'

export function CellGroup(props: CellGroupProps) {
  const {
    inset,
    title,
    border = true,
    children,
    style,
    className,
    ...others
  } = props

  return (
    <>
      {title && (
        <div
          className={utils.bem('cell-group__title', {
            inset,
          })}
        >
          {title}
        </div>
      )}
      <div
        className={
          ' ' +
          utils.bem('cell-group', {
            inset,
          }) +
          ' ' +
          (border ? 'van-hairline--top-bottom' : '') +
          ` ${className || ''}`
        }
        style={style as React.CSSProperties}
        {...(others as any)}
      >
        {children}
      </div>
    </>
  )
}
export default CellGroup
