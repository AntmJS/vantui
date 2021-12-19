import { View, Block } from '@tarojs/components'
import {
  useState,
  useEffect,
  useCallback,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import Taro from '@tarojs/taro'
import {
  DropdownItemProps,
  IDropdownItemInstance,
} from '../../types/dropdown-menu'
import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import VanCell from '../cell'
import VanPopup from '../popup'
import { addUnit, getRect } from '../common/utils'

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

  const toggle = useCallback(
    function (show?: any, options = {}) {
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
              const rect = wrapperStyle.rect
              delete wrapperStyle.rect
              if (wrapperStyle) {
                wrapperStyle.width = '100vw'
                wrapperStyle.position = 'absolute'
              }

              if (direction === 'down') {
                wrapperStyle.top = addUnit(rect.height * 2)
                wrapperStyle.height = '100vh'

                setParentState({
                  ...parentState,
                  wrapperStyle,
                })
                setShowWrapper(true)
                rerender()
              }

              if (direction === 'up') {
                getRect(null, `.dropdown-item__option_box${index}`).then(
                  (re: any) => {
                    wrapperStyle.height = addUnit(re.top * 2)
                    wrapperStyle.top = addUnit(-re.top * 2)
                    setParentState({
                      ...parentState,
                      wrapperStyle,
                    })
                    setShowWrapper(true)
                    rerender()
                  },
                )
              }
            })
      } else {
        rerender()
      }
    },
    [showPopup, parentInstance, direction, parentState, rerender, index],
  )

  useEffect(
    function () {
      setChildrenInstance(index, {
        updateDataFromParent,
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
      updateDataFromParent,
    ],
  )

  useEffect(
    function () {
      updateDataFromParent()
    },
    [updateDataFromParent],
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

  useImperativeHandle(ref, () => {
    return {
      toggle,
    }
  })

  return showWrapper ? (
    <View
      className={utils.bem('dropdown-item', direction) + ' ' + className}
      style={utils.style([parentState.wrapperStyle, style])}
    >
      <VanPopup
        show={showPopup}
        style={utils.style([{ position: 'absolute' }, popupStyle])}
        overlayStyle="position: absolute;"
        overlay={!!parentInstance.overlay}
        position={direction === 'down' ? 'top' : 'bottom'}
        duration={transition ? duration : 0}
        closeOnClickOverlay={closeOnClickOverlay}
        onEnter={onOpen}
        onLeave={onClose}
        onClose={toggle}
        onAfterEnter={onOpened}
        onAfterLeave={onClosed_}
      >
        <View className={`dropdown-item__option_box${index}`}>
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
                <Block>
                  <View
                    className="van-dropdown-item__title"
                    style={item.value === value_ ? 'color:' + activeColor : ''}
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
        </View>
      </VanPopup>
      <View
        className={`dropdown-item__option_box${index}`}
        style={{ position: 'absolute', left: '-1000px' }}
      >
        {(options || []).map((item: any, index: number) => (
          <VanCell
            key={`${index}VanCell##`}
            data-option={item}
            className={utils.bem('dropdown-item__option', {
              active: item.value === value_,
            })}
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
      </View>
    </View>
  ) : (
    <></>
  )
}

const DropdownItem = memo(forwardRef(Index))
export { DropdownItem }
export default DropdownItem
