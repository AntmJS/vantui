import type { ButtonProps } from '../../types/button.d'
import * as utils from '../wxs/h5-utils'
import { Icon } from '../icon/h5-index'
import { Loading } from '../loading/h5-index'
import * as computed from './h5-wxs'

export function Button(props: ButtonProps) {
  const {
    type = 'default',
    size = 'normal',
    block,
    round,
    plain,
    square,
    loading,
    disabled,
    hairline,
    color,
    loadingSize = utils.addUnit(40),
    loadingType = 'circular',
    loadingText,
    icon,
    classPrefix = 'van-icon',
    onClick,
    children,
    style,
    className,
    ...others
  } = props

  console.info(
    computed.rootStyle({
      plain,
      color,
      style,
    }),
  )

  return (
    <button
      className={
        ' ' +
        utils.bem('button', [
          type,
          size,
          {
            block,
            round,
            plain,
            square,
            loading,
            disabled,
            hairline,
            unclickable: disabled || loading,
          },
        ]) +
        ' ' +
        (hairline ? 'van-hairline--surround' : '') +
        ` ${className || ''} ` +
        'van-button__h5'
      }
      style={computed.rootStyle({
        plain,
        color,
        style,
        hairline,
      })}
      onClick={(disabled || loading ? undefined : onClick) as any}
      {...(others as any)}
    >
      {loading ? (
        <div style={{ display: 'flex' }}>
          <Loading
            className="loading-class"
            size={loadingSize}
            type={loadingType}
            color={computed.loadingColor({
              type,
              color,
              plain,
            })}
          ></Loading>
          {loadingText && (
            <div className="van-button__loading-text">{loadingText}</div>
          )}
        </div>
      ) : (
        <>
          {icon && (
            <Icon
              size="1.2em"
              name={icon}
              classPrefix={classPrefix}
              className="van-button__icon"
              style={{
                lineHeight: 'inherit',
              }}
            ></Icon>
          )}
          <div className="van-button__text">{children}</div>
        </>
      )}
    </button>
  )
}
export default Button
