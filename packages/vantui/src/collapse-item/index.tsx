import { useState, useEffect, useCallback } from 'react'
import { View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import * as utils from '../wxs/utils'
import { CollapseItemProps } from '../../types/collapse'
import { getRect } from '../common/utils'
import VanCell from '../cell/index'

let compIndex = 0

export function CollapseItem(
  props: CollapseItemProps & {
    isOpen: any
    handleToggle: any
    index: any
  },
) {
  const {
    size,
    name = null,
    title = '',
    value = '',
    icon,
    label,
    disabled = false,
    clickable = false,
    border = true,
    isLink = true,
    renderTitle,
    renderIcon,
    renderRightIcon,
    renderValue,
    style,
    className,
    children,
    index,
    isOpen,
    handleToggle,
    ...others
  } = props

  const [domHeight, setDomHeight] = useState(-1)
  const [currHeight, setCurrHeight] = useState('auto')
  const [init, setInit] = useState(false)
  const [curCompIndex] = useState<number>(compIndex++)
  const [update, setUpdate] = useState(false)

  const contentRef = useCallback(
    (node: any) => {
      if (node !== null) {
        if (process.env.TARO_ENV !== 'h5') {
          getRect(null, `#${node.props.id}`).then((res: any) => {
            if (res) {
              setDomHeight(res.height)
              nextTick(() => {
                setInit(true)
              })
            }
          })
        } else {
          setDomHeight(node.getBoundingClientRect().height)
          nextTick(() => {
            setInit(true)
          })
        }
      }
    },
    [update],
  )

  useEffect(() => {
    setCurrHeight('auto')
    setUpdate(!update)
  }, [children])

  useEffect(() => {
    if (domHeight !== -1) {
      nextTick(() => {
        isOpen ? setCurrHeight(`${domHeight}px`) : setCurrHeight('0px')
      })
    }
  }, [isOpen, domHeight])

  return (
    <View
      className={
        'van-collapse-item  ' +
        (index !== 0 ? 'van-hairline--top' : '') +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      <VanCell
        title={title}
        icon={icon}
        value={value}
        label={label}
        isLink={isLink}
        clickable={clickable}
        size={size}
        border={border && isOpen}
        className={
          utils.bem('collapse-item__title', {
            disabled,
            expanded: isOpen,
          }) + ' van-cell'
        }
        onClick={() => {
          if (disabled) return
          handleToggle && handleToggle(isOpen, name)
        }}
        renderTitle={<>{renderTitle}</>}
        renderIcon={<>{renderIcon}</>}
        renderRightIcon={<>{renderRightIcon}</>}
      >
        {renderValue}
      </VanCell>
      <View
        style={{
          height: init ? 'auto' : 0,
          overflow: 'hidden',
        }}
      >
        <View
          className={`van-collapse-item__content content-class`}
          style={{ height: currHeight }}
          ref={contentRef}
          id={`content-class${curCompIndex}`}
        >
          <View className="van-collapse-item__content_wrapper">{children}</View>
        </View>
      </View>
    </View>
  )
}
export default CollapseItem
