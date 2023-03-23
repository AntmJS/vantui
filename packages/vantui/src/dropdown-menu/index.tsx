import { View } from '@tarojs/components'
import {
  cloneElement,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  Children,
  isValidElement,
} from 'react'
import { DropdownMenuProps } from '../../types/dropdown-menu'
import { getRect } from '../common/utils'
import * as utils from '../wxs/utils'
import * as computed from './wxs'

let ARRAY: Array<any> = []

export function DropdownMenu(props: DropdownMenuProps) {
  const {
    activeColor,
    overlay = true,
    zIndex,
    duration = 200,
    direction = 'down',
    closeOnClickOverlay = true,
    closeOnClickOutside = true,
    className,
    style,
    ...others
  } = props

  const [itemListData, setItemListData] = useState<Array<any>>([])
  const childrenInstance = useRef<Array<any>>([])
  const TimerKey = useRef<Date>()
  const indexRef = useRef<any>(
    `${+new Date()}${Math.ceil(Math.random() * 10000)}`,
  )

  const close = useCallback(function () {
    childrenInstance.current.forEach((child) => {
      child.toggle(false, { immediate: true })
    })
  }, [])

  useLayoutEffect(
    function () {
      TimerKey.current = new Date()
      ARRAY.push({
        closeOnClickOutside,
        TimerKey,
        close,
      })
    },
    [closeOnClickOutside, close],
  )

  useLayoutEffect(
    function () {
      updateItemListData()
    },
    [others.children],
  )

  useEffect(function () {
    return function () {
      ARRAY = (ARRAY || []).filter((item) => item && item.TimerKey !== TimerKey)
    }
  }, [])

  const updateItemListData = function () {
    setTimeout(() => {
      if (childrenInstance.current) {
        setItemListData(childrenInstance.current.map((child) => child))
      }
    }, 333)
  }

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

  const onTitleTap = useCallback(
    function (event: any) {
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
    },
    [toggleItem],
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
      return getRect(null, `.van-dropdown-menu${indexRef.current}`).then(
        (rect: any) => {
          const wrapperStyle: any = {
            rect: rect,
          }
          if (typeof zIndex === 'number') {
            wrapperStyle.zIndex = zIndex
          }

          return wrapperStyle
        },
      )
    },
    [zIndex],
  )

  const ResetChildren = useMemo(
    function () {
      const res: Array<JSX.Element> = []
      Children.map(others.children, (children, index) => {
        if (isValidElement(children)) {
          res.push(
            cloneElement(children as JSX.Element, {
              direction,
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
        }
      })
      return res
    },
    [
      activeColor,
      closeOnClickOverlay,
      direction,
      duration,
      getChildWrapperStyle,
      others.children,
      overlay,
      setChildrenInstance,
    ],
  )

  return (
    <View
      className={`van-dropdown-menu van-dropdown-menu${indexRef.current} van-dropdown-menu--top-bottom  ${className}`}
      style={utils.style([style, { position: 'relative' }])}
    >
      {(itemListData || []).map((item: any, index: number) => {
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
              <View className={`van-ellipsis ${item.titleClass || ''}`}>
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

export default DropdownMenu
