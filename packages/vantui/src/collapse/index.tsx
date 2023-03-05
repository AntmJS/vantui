import {
  cloneElement,
  useMemo,
  Children,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { ITouchEvent, View } from '@tarojs/components'

import { CollapseProps } from '../../types/collapse'

export function Collapse(props: CollapseProps) {
  const {
    value,
    accordion = false,
    border = true,
    onOpen,
    onClose,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  const [defaultOpenIndex, setDefaultOpenIndex] = useState<Array<string>>([])

  const handleActiveName = useCallback(() => {
    let openIndex_: any[] = []
    if (value && !Array.isArray(value)) {
      openIndex_.push(value.toString())
    } else if (value && Array.isArray(value)) {
      if (accordion && value.length > 1) {
        console.warn('手风琴模式不支持传多个打开页签')
      }
      const arr = value.map((item) => {
        return item.toString()
      })
      openIndex_ = [...arr]
    }
    return openIndex_
  }, [accordion, value])

  useEffect(() => {
    const openIndex_ = handleActiveName()
    setDefaultOpenIndex(openIndex_)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleToggle = (isOpen: boolean, name: string) => {
    let newOpenIndex = [...defaultOpenIndex]
    if (isOpen) {
      // 当前状态为true，则变为false,闭合
      const removeIndex = newOpenIndex.findIndex((value) => {
        return value === name
      })
      newOpenIndex.splice(removeIndex, 1)
      onClose?.({
        detail: name,
      } as ITouchEvent)
    } else {
      if (accordion) {
        newOpenIndex = [name]
      } else {
        newOpenIndex.push(name)
      }
      onOpen?.({
        detail: name,
      } as ITouchEvent)
    }
    setDefaultOpenIndex(newOpenIndex)
    onChange?.({
      detail: newOpenIndex,
    } as ITouchEvent)
  }

  const newChildren: any = useMemo(() => {
    return Children.map(children, (child: any, index: number) => {
      return cloneElement(child, {
        isOpen: defaultOpenIndex.includes(child.props.name),
        handleToggle: (isOpen: boolean, name: string) =>
          handleToggle(isOpen, name),
        index,
      })
    })
  }, [children, defaultOpenIndex, handleToggle])

  return (
    <View
      className={
        ' van-collapse ' +
        (border ? 'van-hairline--top-bottom' : '') +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      {newChildren}
    </View>
  )
}
export default Collapse
