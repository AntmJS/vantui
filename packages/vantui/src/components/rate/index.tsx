import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import Icon from '../icon/index'
import { getAllRect } from '../common/utils'
import { RateProps } from '../../../types/rate'

export default function Index(props: RateProps) {
  const [state, setState] = useState({
    innerValue: 0,
    innerCountArray: Array.from({ length: 5 }),
  })
  const { innerValue, innerCountArray } = state

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
    value = 5,
    onChange,
    style,
    className,
    ...others
  } = props

  const onSelect = function (event: any) {
    const { score } = event.currentTarget.dataset
    if (!disabled && !readonly) {
      setState((pre: any) => {
        return { ...pre, innerValue: score + 1 }
      })
      Taro.nextTick(() => {
        onChange?.(score + 1)
      })
    }
  }
  const onTouchMove = function (event: any) {
    if (!touchable) return
    const { clientX } = event.touches[0]
    getAllRect(null, '.van-rate__icon').then((list: any) => {
      const target = list
        .sort((cur: any, next: any) => cur.dataset.score - next.dataset.score)
        .find((item: any) => clientX >= item.left && clientX <= item.right)
      if (target != null) {
        onSelect(
          Object.assign(Object.assign({}, event), { currentTarget: target }),
        )
      }
    })
  }

  useEffect(
    function () {
      if (value !== innerValue) {
        setState((pre: any) => {
          return { ...pre, innerValue: value }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  )

  useEffect(
    function () {
      setState((pre: any) => {
        return { ...pre, innerCountArray: Array.from({ length: count }) }
      })
    },
    [count],
  )
  return (
    <View
      className={utils.bem('rate') + ' custom-class ' + className}
      style={style}
      onTouchMove={onTouchMove}
      {...others}
    >
      {innerCountArray.map((_item: any, index) => {
        return (
          <View
            className={utils.bem('rate__item')}
            key={index}
            style={utils.style({
              paddingRight: index !== count - 1 ? utils.addUnit(gutter) : null,
            })}
          >
            <Icon
              info={null}
              name={index + 1 <= innerValue ? icon : voidIcon}
              className={
                utils.bem('rate__icon', [
                  {
                    disabled,
                    full: index + 1 <= innerValue,
                  },
                ]) + ` icon-class`
              }
              style={utils.style({
                fontSize: utils.addUnit(size),
              })}
              data-score={index}
              color={
                disabled
                  ? disabledColor
                  : index + 1 <= innerValue
                  ? color
                  : voidColor
              }
              onClick={onSelect}
            ></Icon>
            {allowHalf && (
              <Icon
                info={null}
                name={index + 0.5 <= innerValue ? icon : voidIcon}
                className={
                  utils.bem('rate__icon', [
                    'half',
                    {
                      disabled,
                      full: index + 0.5 <= innerValue,
                    },
                  ]) + ` icon-class`
                }
                style={utils.style({
                  fontSize: utils.addUnit(size),
                })}
                data-score={index - 0.5}
                color={
                  disabled
                    ? disabledColor
                    : index + 0.5 <= innerValue
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
