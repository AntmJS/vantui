import { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import { usePageScroll } from '@tarojs/taro'
import * as utils from '../wxs/utils'
import { getRect } from '../common/utils'
import { Sticky } from '../common/zIndex'
import { isDef } from '../common/validator'
import { StickyProps } from '../../../types/sticky'
import * as computed from './wxs'
const ROOT_ELEMENT = '.van-sticky'
let comIndex = 0
export default function Index(props: StickyProps) {
  const indexRef = useRef(comIndex)
  const [state, setState] = useState({ height: 0, fixed: false, transform: 0 })
  const {
    zIndex = Sticky,
    offsetTop = 0,
    scrollTop,
    disabled,
    container,
    onScroll,
    style,
    className,
    children,
    ...others
  } = props
  const ref: React.MutableRefObject<{
    scrollTop?: number
  }> = useRef({})

  useEffect(() => {
    comIndex++
    indexRef.current = comIndex
  }, [])

  const getContainerRect = useCallback(
    function () {
      const nodesRef = container?.()
      return new Promise((resolve) =>
        nodesRef?.boundingClientRect(resolve).exec(),
      )
    },
    [container],
  )

  const setDataAfterDiff = useCallback(
    function (data: any) {
      const diff = Object.keys(data).reduce((prev: any, key) => {
        if (data[key] !== state[key as 'height' | 'fixed' | 'transform']) {
          prev[key] = data[key]
        }
        return prev
      }, {})
      if (Object.keys(diff).length > 0) {
        setState((pre) => {
          return { ...pre, ...diff }
        })
      }
      onScroll?.({
        detail: {
          scrollTop: ref.current.scrollTop,
          isFixed: data.fixed || state.fixed,
        },
      })
    },
    [onScroll, state],
  )

  const onMyScroll = useCallback(
    function (scrollTop?: number) {
      if (disabled) {
        setDataAfterDiff({
          fixed: false,
          transform: 0,
        })
        return
      }
      ref.current.scrollTop = scrollTop || ref.current.scrollTop

      if (typeof container === 'function') {
        Promise.all([
          getRect(null, `.sticky-com-index${indexRef.current}${ROOT_ELEMENT}`),
          getContainerRect(),
        ]).then(([root, container]: any) => {
          if (root && container) {
            if (offsetTop + root.height > container.height + container.top) {
              setDataAfterDiff({
                fixed: false,
                transform: container.height - root.height,
              })
            } else if (offsetTop >= root.top) {
              setDataAfterDiff({
                fixed: true,
                height: root.height,
                transform: 0,
              })
            } else {
              setDataAfterDiff({ fixed: false, transform: 0 })
            }
          }
        })
        return
      }
      getRect(null, `.sticky-com-index${indexRef.current}${ROOT_ELEMENT}`).then(
        (root: any) => {
          if (!isDef(root)) {
            return
          }
          if (offsetTop >= root.top) {
            setDataAfterDiff({ fixed: true, height: root.height })
            // this.transform = 0
          } else {
            setDataAfterDiff({ fixed: false })
          }
        },
      )
    },
    [container, disabled, getContainerRect, offsetTop, setDataAfterDiff],
  )

  useEffect(
    function () {
      onMyScroll(scrollTop)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scrollTop, container, disabled, offsetTop],
  )

  usePageScroll(function (e) {
    onMyScroll(e.scrollTop)
  })

  // console.log()
  return (
    <View
      className={
        `sticky-com-index${indexRef.current} ` +
        'custom-class van-sticky ' +
        className
      }
      style={utils.style([
        computed.containerStyle({
          fixed: state.fixed,
          height: state.height,
          zIndex,
        }),
        style,
      ])}
      {...others}
    >
      <View
        className={
          utils.bem('sticky-wrap', {
            fixed: state.fixed,
          }) + ` ${className || ''}`
        }
        style={utils.style([
          computed.wrapStyle({
            fixed: state.fixed,
            offsetTop,
            transform: state.transform,
            zIndex,
          }),
          style,
        ])}
      >
        {children}
      </View>
    </View>
  )
}
