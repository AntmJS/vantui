import { View, Text } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { Icon } from '../icon'
import { Button } from '../button'
import { SubmitBarProps } from '../../types/submit-bar'

export function SubmitBar(props: SubmitBarProps) {
  const {
    tipIcon,
    tip,
    label,
    currency = '¥',
    suffixLabel,
    buttonType = 'danger',
    price,
    loading,
    disabled,
    buttonText,
    safeAreaInsetBottom = true,
    renderTop,
    renderTip,
    decimalLength,
    onSubmit,
    children,
    style,
    className,
    ...others
  } = props
  const [state, setState] = useState({
    hasTip: false,
    integerStr: '',
    decimalStr: '',
    hasPrice: false,
  })
  const { hasTip, integerStr, decimalStr, hasPrice } = state
  useEffect(
    function () {
      setState((pre) => {
        return { ...pre, hasTip: typeof tip === 'string' }
      })
    },
    [tip],
  )
  useEffect(
    function () {
      const priceStrArr =
        typeof price === 'number' &&
        (price / 100).toFixed(decimalLength).split('.')
      setState((pre: any) => {
        return {
          ...pre,
          hasPrice: typeof price === 'number',
          integerStr: priceStrArr && priceStrArr[0],
          decimalStr: decimalLength && priceStrArr ? `.${priceStrArr[1]}` : '',
        }
      })
    },
    [decimalLength, price],
  )
  return (
    <View
      className={`van-submit-bar  ${className || ''}`}
      style={style}
      {...others}
    >
      {renderTop}
      <View className="van-submit-bar__tip">
        {tipIcon && (
          <Icon
            size="12px"
            name={tipIcon}
            className="van-submit-bar__tip-icon"
          ></Icon>
        )}
        {hasTip && <View className="van-submit-bar__tip-text">{tip}</View>}
        {renderTip}
      </View>
      <View className="bar-class van-submit-bar__bar">
        {children}
        {hasPrice && (
          <View className="van-submit-bar__text">
            <Text>{label || '合计：'}</Text>
            <Text className="van-submit-bar__price price-class">
              <Text className="van-submit-bar__currency">{currency}</Text>
              <Text className="van-submit-bar__price-integer">
                {integerStr}
              </Text>
              <Text>{decimalStr}</Text>
            </Text>
            <Text className="van-submit-bar__suffix-label">{suffixLabel}</Text>
          </View>
        )}
        <Button
          round
          type={buttonType}
          loading={loading}
          disabled={disabled}
          className="van-submit-bar__button button-class"
          onClick={onSubmit}
        >
          {loading ? '' : buttonText}
        </Button>
      </View>
      {safeAreaInsetBottom && <View className="van-submit-bar__safe"></View>}
    </View>
  )
}
export default SubmitBar
