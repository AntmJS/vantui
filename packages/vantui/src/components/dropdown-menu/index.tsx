import { View } from '@tarojs/components'
import {
  cloneElement,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
} from 'react'
import { DropdownMenuProps } from '../../../types/dropdown-menu'
import { addUnit, getRect, getSystemInfoSync } from '../common/utils.js'
import * as utils from '../wxs/utils'
import * as computed from './wxs'

let ARRAY: Array<any> = []
let currentIndexInit = 0

export default function Index(props: DropdownMenuProps) {
  const {
    activeColor,
    overlay = true,
    zIndex = 10,
    duration = 200,
    direction = 'down',
    closeOnClickOverlay = true,
    closeOnClickOutside = true,
    className,
    style,
    ...others
  } = props

  const [itemListData, setItemListData] = useState<Array<any>>([])
  const [windowHeight, setWindowHeight] = useState(0)
  const childrenInstance = useRef<Array<any>>([])
  const TimerKey = useRef<Date>()
  const [currentIndex, setCurrentIndex] = useState<number>()

  const close = useCallback(function () {
    childrenInstance.current.forEach((child) => {
      child.toggle(false, { immediate: true })
    })
  }, [])

  useLayoutEffect(
    function () {
      const { windowHeight } = getSystemInfoSync()
      setWindowHeight(windowHeight)
      TimerKey.current = new Date()
      ARRAY.push({
        closeOnClickOutside,
        TimerKey,
        close,
      })
    },
    [closeOnClickOutside, close],
  )

  useLayoutEffect(function () {
    updateItemListData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(function () {
    return function () {
      ARRAY = (ARRAY || []).filter((item) => item && item.TimerKey !== TimerKey)
      setCurrentIndex(currentIndexInit++)
    }
  }, [])

  const updateChildrenData = useCallback(function () {
    childrenInstance.current.forEach((child) => {
      child.updateDataFromParent()
    })
  }, [])

  const updateItemListData = function () {
    setTimeout(() => {
      setItemListData(childrenInstance.current.map((child) => child))
    }, 33)
  }

  const onTitleTap = useCallback(function (event: any) {
    const { index } = event.currentTarget.dataset
    const child = childrenInstance.current[index]
    if (!child.disabled) {
      ARRAY.forEach((menuItem) => {
        if (
          menuItem &&
          menuItem.closeOnClickOutside &&
          menuItem.TimerKey !== TimerKey
        ) {
          menuItem.close()
        }
      })
      setTimeout(() => {
        toggleItem(index)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    function () {
      updateChildrenData()
    },
    [updateChildrenData],
  )

  const setChildrenInstance = useCallback(function (
    index: number,
    instance: any,
  ) {
    childrenInstance.current[index] = instance
  },
  [])

  const getChildWrapperStyle = useCallback(
    function () {
      return getRect(null, `.van-dropdown-menu${currentIndex}`).then(
        (rect: any) => {
          const { top = 0, bottom = 0 } = rect
          const offset = direction === 'down' ? bottom : windowHeight - top
          const wrapperStyle: React.CSSProperties = {
            zIndex: zIndex,
          }
          if (direction === 'down') {
            wrapperStyle.top = addUnit(offset * 2)
          } else {
            wrapperStyle.bottom = addUnit(offset * 2)
          }

          return wrapperStyle
        },
      )
    },
    [currentIndex, direction, windowHeight, zIndex],
  )

  const ResetChildren = useMemo(
    function () {
      const res: Array<JSX.Element> = []
      if (others.children && Array.isArray(others.children)) {
        others.children.forEach((child, index) => {
          res.push(
            cloneElement(child as JSX.Element, {
              key: index,
              setChildrenInstance,
              index,
              parentInstance: {
                overlay,
                duration,
                activeColor,
                closeOnClickOverlay,
                direction,
                getChildWrapperStyle,
                updateItemListData,
              },
            }),
          )
        })
      }
      return res
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [others.children],
  )

  const toggleItem = useCallback(function (active: number) {
    childrenInstance.current.forEach((item: any, index: number) => {
      const { showPopup } = item
      if (index === Number(active)) {
        item.toggle()
      } else if (showPopup) {
        item.toggle(false, { immediate: true })
      }
    })
  }, [])

  return (
    <View
      className={`van-dropdown-menu van-dropdown-menu${currentIndex} van-dropdown-menu--top-bottom  ${className}`}
      style={utils.style([style, { position: 'relative' }])}
    >
      {itemListData.map((item: any, index: number) => {
        return (
          <View
            key={item.index}
            data-index={index}
            className={utils.bem('dropdown-menu__item', {
              disabled: item.disabled,
            })}
            onClick={onTitleTap}
          >
            <View
              className={
                item.titleClass +
                ' ' +
                utils.bem('dropdown-menu__title', {
                  active: item.showPopup,
                  down: item.showPopup === (direction === 'down'),
                })
              }
              style={item.showPopup ? 'color:' + activeColor : ''}
            >
              <View className="van-ellipsis">
                {computed.displayTitle(item)}
              </View>
            </View>
          </View>
        )
      })}
      {ResetChildren}
    </View>
  )
}
