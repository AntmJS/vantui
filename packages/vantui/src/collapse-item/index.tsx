import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react'
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

  useEffect(() => {
    nextTick(() => {
      getRect(null, `#content-class${curCompIndex}`).then((res: any) => {
        setInit(true)
        setDomHeight(res.height)
      })
    })
  }, [children])

  useLayoutEffect(() => {
    if (domHeight !== -1) {
      if (nextActionTimeout.current) clearTimeout(nextActionTimeout.current)
      if (isOpen) {
        setCurrHeight(`${domHeight}px`)
        nextActionTimeout.current = setTimeout(() => {
          setCurrHeight('auto')
        }, 300)
      } else {
        setCurrHeight(`${domHeight}px`)
        nextActionTimeout.current = setTimeout(() => {
          setCurrHeight('0px')
        }, 10)
      }
    } else {
      setCurrHeight('0px')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, domHeight])

  const handleToggle_ = useCallback(
    // @ts-ignore
    throttle(() => {
      if (disabled) return
      handleToggle && handleToggle(isOpen, name)
    }, 299),
    [handleToggle, disabled, isOpen, name],
  )

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

const throttle = (fn, interval: number) => {
  let timer
  let startTime: any = new Date()
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    args.forEach((item: any) => {
      if (item.__proto__.constructor.name === 'SyntheticEvent') {
        item.persist()
      }
    })

    const endTime: any = new Date()
    const diffTime = endTime - startTime
    const nextTime = interval - (endTime - startTime)
    if (diffTime >= interval) {
      // @ts-ignore
      fn.apply(this, args)
      startTime = new Date()
    } else {
      timer = setTimeout(() => {
        // @ts-ignore
        fn.apply(this, args)
        startTime = new Date()
        timer = null
        clearTimeout(timer)
      }, nextTime)
    }
  }
}

export default CollapseItem
