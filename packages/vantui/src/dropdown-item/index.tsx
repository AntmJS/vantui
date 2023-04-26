import { View } from '@tarojs/components'
import {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import { nextTick, usePageScroll } from '@tarojs/taro'
import { getSystemInfoSync, requestAnimationFrame } from '../common/utils'
import {
  DropdownItemProps,
  IDropdownItemInstance,
} from '../../types/dropdown-menu'
import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import VanCell from '../cell'
import VanPopup from '../popup'

function Index(
  props: DropdownItemProps & {
    setChildrenInstance?: any
    index?: number
    parentInstance?: any
  },
  ref: React.Ref<IDropdownItemInstance>,
) {
  const {
    title,
    titleClass,
    value,
    popupStyle,
    disabled = false,
    setChildrenInstance,
    parentInstance,
    index,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    onChange = () => {},
    options = [],
    className = '',
    style,
    ...others
  } = props

  const [wrapperStyle, setWrapperStyle] = useState<any>({})
  const [transition, setTransition] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [showWrapper, setShowWrapper] = useState(true)
  const [displayTitle, setDisplayTitle] = useState('')
  const [value_, setValue] = useState<number | string | undefined>('')

  useEffect(
    function () {
      setValue(value)
    },
    [value],
  )

  const rerender = useCallback(
    function () {
      nextTick(() => {
        if (parentInstance) {
          parentInstance.updateItemListData()
        }
      })
    },
    [parentInstance],
  )

  const updateStyle = useCallback(() => {
    parentInstance?.getChildWrapperStyle().then((wrapperStyle: any) => {
      const rect = wrapperStyle.rect
      delete wrapperStyle.rect
      if (wrapperStyle) {
        wrapperStyle.width = '100vw'
        wrapperStyle.position = 'fixed'
      }

      if (parentInstance.direction === 'down') {
        const winHeight = getSystemInfoSync().windowHeight
        const bottom = winHeight - rect.top
        wrapperStyle.bottom = -rect.height + 'PX'
        wrapperStyle.height = bottom + 'PX'
        setWrapperStyle(wrapperStyle)
        setShowWrapper(true)
        rerender()
      }

      if (parentInstance.direction === 'up') {
        wrapperStyle.height = rect.top + 'PX'
        setWrapperStyle(wrapperStyle)
        setShowWrapper(true)
        rerender()
      }
    })
  }, [parentInstance, rerender])

  const toggle = useCallback(
    function (show?: any, options: any = {}) {
      if (typeof show !== 'boolean') {
        show = !showPopup
      }
      if (show === showPopup) {
        return
      }

      setTransition(!options.immediate)
      setShowPopup(show)
      if (show) {
        updateStyle()
      } else {
        rerender()
      }
    },
    [showPopup, updateStyle, rerender],
  )

  usePageScroll(() => {
    if (showPopup) {
      requestAnimationFrame(() => {
        updateStyle()
      })
    }
  })

  useEffect(
    function () {
      setChildrenInstance(index, {
        title,
        titleClass,
        disabled,
        transition,
        showPopup,
        index,
        setDisplayTitle,
        displayTitle,
        options,
        value: value_,
        toggle,
      })
    },
    [
      title,
      titleClass,
      index,
      setChildrenInstance,
      disabled,
      transition,
      showPopup,
      setDisplayTitle,
      displayTitle,
      options,
      value_,
      toggle,
    ],
  )

  const onClosed_ = useCallback(
    function () {
      if (onClosed) onClosed()
      setTimeout(() => {
        setShowWrapper(false)
      }, 10)
    },
    [onClosed],
  )

  const onOptionTap = function (_event: any, option: any) {
    const shouldEmitChange = value_ !== option.value
    setShowPopup(false)
    setValue(option.value)
    if (onClose) onClose()
    rerender()
    if (shouldEmitChange) {
      onChange(option.value)
    }
  }

  useImperativeHandle(ref, () => {
    return {
      toggle,
    }
  })

  return showWrapper ? (
    <View
      className={
        utils.bem('dropdown-item', parentInstance.direction) + ' ' + className
      }
      style={utils.style([wrapperStyle, style])}
    >
      <VanPopup
        show={showPopup}
        style={utils.style([{ position: 'absolute' }, popupStyle])}
        overlayStyle="position: absolute;"
        overlay={!!parentInstance.overlay}
        position={parentInstance.direction === 'down' ? 'top' : 'bottom'}
        duration={transition ? parentInstance.duration : 0}
        closeOnClickOverlay={parentInstance.closeOnClickOverlay}
        onEnter={onOpen}
        onLeave={onClose}
        onClose={() => toggle(false)}
        onAfterEnter={onOpened}
        onAfterLeave={onClosed_}
      >
        <View>
          {(options || []).map((item: any, index: number) => (
            <VanCell
              key={`${index}VanCell`}
              data-option={item}
              className={utils.bem('dropdown-item__option', {
                active: item.value === value_,
              })}
              clickable
              icon={item.icon}
              onClick={(e) => onOptionTap(e, item)}
              renderTitle={
                <>
                  <View
                    className="van-dropdown-item__title"
                    style={
                      item.value === value_
                        ? 'color:' + parentInstance.activeColor
                        : ''
                    }
                  >
                    {item.text}
                  </View>
                </>
              }
            >
              {item.value === value_ && (
                <VanIcon
                  name="success"
                  className="van-dropdown-item__icon"
                  color={parentInstance.activeColor}
                ></VanIcon>
              )}
            </VanCell>
          ))}
          {others.children}
        </View>
      </VanPopup>
    </View>
  ) : (
    <></>
  )
}

const DropdownItem = memo(forwardRef(Index))
export { DropdownItem }
export default DropdownItem
