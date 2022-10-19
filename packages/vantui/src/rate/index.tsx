import { useState, useEffect, useRef, useMemo } from 'react'
import { View, ITouchEvent } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { Icon } from '../icon/index'
import { getAllRect } from '../common/utils'
import { RateProps } from '../../types/rate'

export function Rate(props: RateProps) {
  const {
    count = 5,
    gutter,
    icon = 'star',
    voidIcon = 'star-o',
    disabled,
    size,
    disabledColor,
    color,
    voidColor,
    allowHalf,
    readonly,
    touchable = true,
    value,
    onChange,
    style,
    className,
    defaultValue = 5,
    iconClassPrefix = 'van-icon',
    ...others
  } = props
  const indexRef = useRef(`${+new Date()}${Math.ceil(Math.random() * 10000)}`)
  const [countArray, setCountArray] = useState(Array.from({ length: count }))
  const noControlled = useMemo(() => typeof value === 'undefined', [value])
  const [innerValue, setInnerValue] = useState(
    noControlled ? defaultValue : (value as number),
  )

  const onSelect = function (event: ITouchEvent) {
    const { score } = event.currentTarget.dataset
    Object.defineProperty(event, 'detail', {
      value: +score + 1,
    })

    if (!disabled && !readonly) {
      if (noControlled) {
        setInnerValue(event.detail as number)
      }
      onChange?.(event)
    }
  }
  // touchmove匹配到的节点找不到data-score，先注释掉
  const onTouchMove = function (event) {
    if (!touchable) return

    const { clientX } = event?.touches?.[0] ?? {}
    if (clientX) {
      getAllRect(
        null,
        `.rate-com-index${indexRef.current} .van-rate__icon`,
      ).then((list: any) => {
        const targetIndex = list
          .sort((a: any, b: any) => a.right - b.right)
          .findIndex(
            (item: any) => clientX >= item.left && clientX <= item.right,
          )
        if (targetIndex !== -1) {
          onSelect(
            Object.assign(Object.assign({}, event), {
              currentTarget: {
                dataset: {
                  score: allowHalf ? targetIndex / 2 - 0.5 : targetIndex,
                },
              },
            }),
          )
        }
      })
    }
  }

  // useEffect(
  //   function () {
  //     if (value !== innerValue) {
  //       setInnerValue(value as number)
  //     }
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [value],
  // )

  useEffect(
    function () {
      setCountArray(Array.from({ length: count }))
    },
    [count],
  )

  const rateValue = noControlled ? innerValue : (value as number)

  return (
    <View
      className={
        `rate-com-index${indexRef.current} ` +
        utils.bem('rate') +
        '  ' +
        className
      }
      style={style}
      onTouchMove={onTouchMove}
      {...others}
    >
      {countArray.map((_item: any, index) => {
        return (
          <View
            className={utils.bem('rate__item')}
            key={index}
            style={utils.style({
              paddingRight: index !== count - 1 ? utils.addUnit(gutter) : null,
            })}
          >
            <Icon
              classPrefix={iconClassPrefix}
              name={index + 1 <= rateValue ? icon : voidIcon}
              className={
                utils.bem('rate__icon', [
                  {
                    disabled,
                    full: index + 1 <= rateValue,
                  },
                ]) + ` icon-class`
              }
              style={utils.style({
                fontSize: utils.addUnit(size),
              })}
              id={`rate-com-index${indexRef.current}-rate__${index}`}
              data-score={index}
              color={
                disabled
                  ? disabledColor
                  : index + 1 <= rateValue
                  ? color
                  : voidColor
              }
              onClick={onSelect}
            ></Icon>
            {allowHalf && (
              <Icon
                classPrefix={iconClassPrefix}
                name={index + 0.5 <= rateValue ? icon : voidIcon}
                className={
                  utils.bem('rate__icon', [
                    'half',
                    {
                      disabled,
                      full: index + 0.5 <= rateValue,
                    },
                  ]) + ` icon-class`
                }
                style={utils.style({
                  fontSize: utils.addUnit(size),
                })}
                id={`rate-com-index${indexRef.current}-rate__${index - 0.5}`}
                data-score={index - 0.5}
                color={
                  disabled
                    ? disabledColor
                    : index + 0.5 <= rateValue
                    ? color
                    : voidColor
                }
                onClick={onSelect}
              ></Icon>
            )}
          </View>
        )
      })}
    </View>
  )
}
export default Rate
