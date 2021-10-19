import Taro from '@tarojs/taro'
import { useState, useEffect, useRef } from 'react'
import { View, ITouchEvent } from '@tarojs/components'
import * as utils from '../wxs/utils'
import Icon from '../icon/index'
import { getAllRect } from '../common/utils'
import { RateProps } from '../../../types/rate'
let comIndex = 0
export default function Index(props: RateProps) {
  const [countArray, setCountArray] = useState(Array.from({ length: 5 }))
  const [innerValue, setInnerValue] = useState(0)
  const indexRef = useRef(comIndex)

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

  useEffect(() => {
    comIndex++
    indexRef.current = comIndex
  }, [])

  const onSelect = function (event: ITouchEvent) {
    const { score } = event.currentTarget.dataset
    Object.defineProperty(event, 'detail', {
      value: score,
    })

    if (!disabled && !readonly) {
      setInnerValue(+score + 1)
      Taro.nextTick(() => {
        onChange?.(event)
      })
    }
  }
  // touchmove匹配到的节点找不到data-score，先注释掉
  const onTouchMove = function (event: ITouchEvent) {
    if (!touchable) return
    const { clientX } = event?.touches?.[0] ?? {}
    if (clientX) {
      getAllRect(
        null,
        `.rate-com-index${indexRef.current} .van-rate__icon`,
      ).then((list: any) => {
        const target = list
          .sort((cur: any, next: any) => {
            if (typeof cur.dataset.score !== 'number') {
              const curScore = Number(cur.id.split('__')[1])
              const nextScore = Number(next.id.split('__')[1])
              return curScore - nextScore
            } else {
              return cur.dataset.score - next.dataset.score
            }
          })
          .find((item: any) => clientX >= item.left && clientX <= item.right)
        if (target != null) {
          if (typeof target.dataset.score !== 'number') {
            target.dataset.score = Number(target.id.split('__')[1])
          }
          if (target.dataset.score || target.dataset.score === 0) {
            onSelect(
              Object.assign(Object.assign({}, event), {
                currentTarget: target,
              }),
            )
          }
        }
      })
    }
  }

  useEffect(
    function () {
      if (value !== innerValue) {
        setInnerValue(value)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value],
  )

  useEffect(
    function () {
      setCountArray(Array.from({ length: count }))
    },
    [count],
  )

  return (
    <View
      className={
        `rate-com-index${indexRef.current} ` +
        utils.bem('rate') +
        ' custom-class ' +
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
              id={`rate__${index}`}
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
                id={`rate__${index - 0.5}`}
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
