/* eslint-disable react-hooks/exhaustive-deps */
import {
  useEffect,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { PickerColumnProps } from '../../../types/picker-column'
import { range } from '../common/utils.js'
import { isObj } from '../common/validator.js'
import * as computed from './wxs'

const DEFAULT_DURATION = 200

function Index(props: PickerColumnProps, ref: any): JSX.Element {
  const {
    valueKey,
    itemHeight = 88,
    visibleItemCount = 5,
    initialOptions,
    defaultIndex,
    className,
    style,
    ...others
  } = props

  const [options, setOptions] = useState<Array<any>>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [duration, setDuration] = useState(0)
  const [startY, setStartY] = useState(0)
  const [offset, setOffset] = useState(0)
  const [startOffset, setStartOffset] = useState(0)

  const adjustIndex = useCallback(
    function (index: number): any {
      const initialOptions_ = initialOptions as Array<any>
      const count = initialOptions_.length
      index = range(index, 0, count)
      for (let i = index; i < count; i++) {
        if (!isDisabled(initialOptions_[i])) {
          return i
        }
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isDisabled(initialOptions_[i])) {
          return i
        }
      }
    },
    [initialOptions],
  )

  const setIndex = useCallback(
    function (index: number) {
      index = adjustIndex(index) || 0
      const offset = -index * Number(itemHeight)
      if (index !== currentIndex) {
        setCurrentIndex(currentIndex)
        setOffset(offset)
        return
      }
      return setOffset(offset)
    },
    [adjustIndex, currentIndex, itemHeight],
  )

  useEffect(
    function () {
      setCurrentIndex((defaultIndex as number) || 0)
      setOptions(initialOptions || [])
      setTimeout(() => {
        setIndex((defaultIndex as number) || 0)
      })
    },
    [defaultIndex, initialOptions, setIndex],
  )

  const isDisabled = useCallback(function (option) {
    return isObj(option) && option.disabled
  }, [])

  const onTouchMove = useCallback(
    function (event) {
      const deltaY = event.touches[0].clientY - startY
      setOffset(
        range(
          startOffset + deltaY,
          -(options.length * Number(itemHeight)),
          itemHeight,
        ),
      )
    },
    [startOffset, itemHeight, options],
  )

  const onTouchStart = useCallback(
    function (event) {
      setStartY(event.touches[0].clientY)
      setStartOffset(offset)
      setDuration(0)
    },
    [offset],
  )

  const onTouchEnd = useCallback(
    function () {
      if (offset !== startOffset) {
        setDuration(DEFAULT_DURATION)
        const index = range(
          Math.round(-offset / Number(itemHeight)),
          0,
          options.length - 1,
        )
        setIndex(index)
      }
    },
    [startOffset, offset, itemHeight],
  )

  const onClickItem = useCallback(function (event) {
    const { index } = event.currentTarget.dataset
    setIndex(Number(index))
  }, [])

  const getCurrentIndex = useCallback(function () {
    return currentIndex
  }, [])

  const getValue = useCallback(
    function () {
      return options[currentIndex]
    },
    [options, currentIndex],
  )

  useImperativeHandle(ref, () => {
    return {
      getCurrentIndex,
      getValue,
    }
  })

  return (
    <View
      className={`van-picker-column custom-class ${className}`}
      style={utils.style([
        computed.rootStyle({
          itemHeight,
          visibleItemCount,
        }),
        style,
      ])}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      {...others}
    >
      <View
        style={computed.wrapperStyle({
          offset,
          itemHeight,
          visibleItemCount,
          duration,
        })}
      >
        {options.map((option: any, index: number) => {
          return (
            <View
              key={`picker-column__item${index}`}
              data-index={index}
              style={computed.styleTran({ height: itemHeight })}
              className={
                'van-ellipsis ' +
                utils.bem('picker-column__item', {
                  disabled: option && option.disabled,
                  selected: index === currentIndex,
                }) +
                ' ' +
                (index === currentIndex ? 'active-class' : '')
              }
              onClick={onClickItem}
            >
              {computed.optionText(option, valueKey)}
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default forwardRef(Index)
