import { View } from '@tarojs/components'
import {
  useCallback,
  useRef,
  useState,
  useEffect,
  useMemo,
  cloneElement,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import * as utils from '../wxs/utils'
import { SidebarProps } from '../../../types/sidebar'

function Index(props: SidebarProps, ref: React.ForwardedRef<any>) {
  const { activeKey, onChange, className, children, style, ...others } = props

  const [currentActive, setcurrentActive] = useState<any>()
  const childrenInstance = useRef<Array<any>>([])

  const setAction = useCallback(function (activeKey) {
    const childrenInstance_ = childrenInstance.current
    if (!childrenInstance_ || !childrenInstance_.length) {
      return Promise.resolve()
    }
    setcurrentActive(activeKey)
    childrenInstance_.forEach((item) => {
      item.setActive(false)
    })
    if (childrenInstance_[activeKey]) {
      childrenInstance_[activeKey].setActive(true)
    }
    return Promise.resolve()
  }, [])

  useEffect(
    function () {
      setAction(activeKey)
    },
    [setAction, activeKey],
  )

  const setChildren = useCallback(function (index: number, instance: any) {
    childrenInstance.current[index] = instance
  }, [])

  const ResetChildren = useMemo(
    function () {
      const res: Array<JSX.Element> = []
      if (children && Array.isArray(children)) {
        children.forEach((child, index) => {
          res.push(
            cloneElement(child as JSX.Element, {
              key: index,
              setChildren,
              index,
              parentInstance: {
                currentActive,
                setAction,
              },
            }),
          )
        })
      }
      return res
    },
    [children, currentActive, setAction, setChildren],
  )

  useImperativeHandle(ref, () => {
    return {
      currentActive,
      setAction,
      onChange,
    }
  })

  return (
    <View
      style={utils.style([style])}
      className={`van-sidebar custom-class ${className}`}
      {...others}
    >
      {ResetChildren}
    </View>
  )
}

export default memo(forwardRef(Index))
