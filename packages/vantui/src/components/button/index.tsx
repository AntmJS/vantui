import type { ButtonProps } from '../../../types/button.d'
import Taro from '@tarojs/taro'
import { Button, Block, View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import Icon from '../icon/index'
import Loading from '../loading/index'
import * as computed from './wxs'

export default function Index(props: ButtonProps) {
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
    customStyle,
    loadingSize = Taro.pxTransform(40),
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
    <Button
      className={
        'custom-class ' +
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
          customStyle,
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
        <Block>
          {icon && (
            <Icon
              size="1.2em"
              name={icon}
              classPrefix={classPrefix}
              className="van-button__icon"
              customStyle="line-height: inherit;"
            ></Icon>
          )}
          <View className="van-button__text">{children}</View>
        </Block>
      )}
    </Button>
  )
}
