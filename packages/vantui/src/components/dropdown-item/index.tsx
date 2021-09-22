import { View, Block } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import Taro from '@tarojs/taro'
import { DropdownItemProps } from '../../../types/dropdown-item'
import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import VanCell from '../cell'
import VanPopup from '../popup'

export default function Index(
  props: DropdownItemProps & {
    setChildrenInstance: any
    index: number
    parentInstance: any
  },
) {
  const {
    value,
    popupStyle,
    direction,
    disabled = false,
    duration,
    closeOnClickOverlay,
    activeColor,
    setChildrenInstance,
    parentInstance,
    index,
    onOpen = () => {},
    onOpened = () => {},
    onClose = () => {},
    onClosed = () => {},
    onChange = () => {},
    options = [],
    className = '',
    style,
    ...others
  } = props

  const [parentState, setParentState] = useState<any>({})
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

  useEffect(
    function () {
      setChildrenInstance(index, {
        updateDataFromParent,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      index,
      setChildrenInstance,
      disabled,
      transition,
      showPopup,
      index,
      setDisplayTitle,
      displayTitle,
      options,
      value_,
    ],
  )

  useEffect(function () {
    updateDataFromParent()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateDataFromParent = useCallback(
    function () {
      const { overlay, duration, activeColor, closeOnClickOverlay, direction } =
        parentInstance

      setParentState({
        overlay,
        duration,
        activeColor,
        closeOnClickOverlay,
        direction,
      })
    },
    [parentInstance],
  )

  const toggle = useCallback(
    function (show: any, options = {}) {
      if (typeof show !== 'boolean') {
        show = !showPopup
      }
      if (show === showPopup) {
        return
      }

      setTransition(!options.immediate)
      setShowPopup(show)
      if (show) {
        !parentInstance
          ? void 0
          : parentInstance.getChildWrapperStyle().then((wrapperStyle: any) => {
              if (wrapperStyle) {
                wrapperStyle.width = '100vw'
                wrapperStyle.height = '100vh'
              }
              setParentState({
                ...parentState,
                wrapperStyle,
              })
              setShowWrapper(true)
              rerender()
            })
      } else {
        rerender()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [parentState, showPopup, parentInstance],
  )

  const rerender = useCallback(
    function () {
      Taro.nextTick(() => {
        if (parentInstance) {
          parentInstance.updateItemListData()
        }
      })
    },
    [parentInstance],
  )

  const onClosed_ = useCallback(
    function () {
      if (onClosed) onClosed()
      setShowWrapper(false)
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
      onChange()
    }
  }

  return (
    showWrapper && (
      <View
        className={utils.bem('dropdown-item', direction) + ' ' + className}
        style={utils.style([parentState.wrapperStyle, style])}
      >
        <VanPopup
          show={showPopup}
          style={'position: absolute;' + popupStyle}
          overlayStyle="position: absolute;"
          overlay={parentInstance.overlay || false}
          position={direction !== 'down' ? 'top' : 'bottom'}
          duration={transition ? duration : 0}
          closeOnClickOverlay={closeOnClickOverlay}
          onEnter={onOpen}
          onLeave={onClose}
          onClose={toggle}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed_}
        >
          <>
            {options.map((item: any, index: number) => (
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
                  <Block>
                    <View
                      className="van-dropdown-item__title"
                      style={
                        item.value === value_ ? 'color:' + activeColor : ''
                      }
                    >
                      {item.text}
                    </View>
                  </Block>
                }
              >
                {item.value === value_ && (
                  <VanIcon
                    name="success"
                    className="van-dropdown-item__icon"
                    color={activeColor}
                  ></VanIcon>
                )}
              </VanCell>
            ))}
            {others.children}
          </>
        </VanPopup>
      </View>
    )
  )
}
