import * as utils from '../wxs/h5-utils'
import { TagProps } from '../../types/tag'
import { Icon } from '../icon/h5-index'

export function Tag(props: TagProps) {
  const {
    type = 'default',
    size,
    mark,
    plain,
    round,
    color,
    textColor,
    closeable,
    children,
    onClose,
    style,
    className,
    ...others
  } = props

  return (
    <div
      className={
        ' ' +
        utils.bem('tag', [
          type,
          size,
          {
            mark,
            plain,
            round,
          },
        ]) +
        ` ${className || ''}`
      }
      style={{
        backgroundColor: plain ? '' : color,
        color: textColor || plain ? textColor || color : '',
        ...(style as React.CSSProperties),
      }}
      {...(others as any)}
    >
      {children}
      {closeable && (
        <Icon name="cross" className="van-tag__close" onClick={onClose}></Icon>
      )}
    </div>
  )
}
export default Tag
