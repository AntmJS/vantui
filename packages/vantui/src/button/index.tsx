import type { ButtonProps } from '../../types/button.d'
import { pxTransform } from '@tarojs/taro'
import { Button as TaroButton, View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { Icon } from '../icon/index'
import { Loading } from '../loading/index'
import * as computed from './wxs'
let removed = false
// 次输是为了在开发环境有一个中止状态
let time = 10
// 动态删除taro-button-core的style
if (process.env.TARO_ENV === 'h5' && !removed) {
  const _timer = setInterval(() => {
    time--
    if (time > 0) {
      const allStyle = document.getElementsByTagName('style') || []
      for (let i = allStyle.length - 1; i >= 0; i--) {
        const sty: any = allStyle[i]
        const htm = sty.innerHTML
        if (htm && /^taro-button-core{/.test(htm)) {
          sty.remove()
          removed = true
          _timer && clearInterval(_timer)
          break
        }
      }
    } else {
      _timer && clearInterval(_timer)
    }
  }, 200)
}

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
    loadingSize = pxTransform(40),
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

  return (
    <TaroButton
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
        ` ${className || ''}`
      }
      hoverClass="van-button--active hover-class"
      style={utils.style([
        computed.rootStyle({
          plain,
          color,
        }),
        style,
      ])}
      onClick={disabled || loading ? undefined : onClick}
      {...others}
    >
      {loading ? (
        <View style="display: flex">
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
            <View className="van-button__loading-text">{loadingText}</View>
          )}
        </View>
      ) : (
        <>
          {icon && (
            <Icon
              size="1.2em"
              name={icon}
              classPrefix={classPrefix}
              className="van-button__icon"
              style="line-height: inherit;"
            ></Icon>
          )}
          <View className="van-button__text">{children}</View>
        </>
      )}
    </TaroButton>
  )
}
export default Button
