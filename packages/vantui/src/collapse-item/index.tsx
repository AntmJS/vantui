import { useState, useEffect, useRef, useCallback } from 'react'
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

  const [currHeight, setCurrHeight] = useState('auto')
  const [init, setInit] = useState(false)
  const [curCompIndex] = useState<number>(compIndex++)
  const nextActionTimeout = useRef<any>(null)
  const [domHeight, setDomHeight] = useState(-1)
  const isFirstRender = useRef(true)

  useEffect(() => {
    setTimeout(() => {
      // 微信端层级太深找不到元素信息 （https://taro-docs.jd.com/docs/optimized#1-%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE%E9%A1%B9-baselevel）
      const targetId =
        process.env.TARO_ENV === 'weapp'
          ? `.van-collapse >>> #content-class${curCompIndex}`
          : `#content-class${curCompIndex}`
      getRect(null, `${targetId}`).then((res: any) => {
        if (res) {
          setDomHeight(res.height)
          nextTick(() => {
            setInit(true)
          })
        }
      })
    }, 33.33)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  useEffect(() => {
    if (domHeight !== -1) {
      if (nextActionTimeout.current) clearTimeout(nextActionTimeout.current)
      if (isOpen) {
        setCurrHeight(`${domHeight}px`)
        isFirstRender.current = false
        nextActionTimeout.current = setTimeout(() => {
          setCurrHeight('auto')
        }, 200)
      } else {
        if (!isFirstRender.current) {
          setCurrHeight(`${domHeight}px`)
          nextActionTimeout.current = setTimeout(() => {
            setCurrHeight('0px')
          }, 200)
        }
      }
    } else {
      setCurrHeight('0px')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, domHeight, init])

  const handleToggle_ = useCallback(() => {
    if (disabled) return
    isFirstRender.current = false
    handleToggle && handleToggle(isOpen, name)
  }, [handleToggle, disabled, isOpen, name])

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
        onClick={handleToggle_}
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
        >
          <View
            id={`content-class${curCompIndex}`}
            className="van-collapse-item__content_wrapper"
          >
            {children}
          </View>
        </View>
      </View>
    </View>
  )
}

export default CollapseItem
