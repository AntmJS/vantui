import { useCallback, useEffect, useRef, useState } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { getRect } from '../common/utils'
import { isDef } from '../common/validator'
import { StickyProps } from '../../types/sticky'
import { usePageScroll } from './../mixins/page-scroll'
import * as computed from './wxs'
export function Sticky(props: StickyProps) {
  const indexRef = useRef(`${+new Date()}${Math.ceil(Math.random() * 10000)}`)
  const [state, setState] = useState({ height: 0, fixed: false, transform: 0 })
  const {
    zIndex,
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

  const getContainerRect = useCallback(
    function () {
      const nodesRef = container?.()
      return new Promise((resolve) =>
        nodesRef?.boundingClientRect().exec((rect: any = []) => {
          return resolve(rect[0])
        }),
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
          getRect(null, `#sticky-com-index${indexRef.current}`),
          getContainerRect(),
        ])
          .then(([root, container]: any) => {
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
          .catch((e) => {
            console.log(e)
          })
        return
      } else {
        getRect(null, `#sticky-com-index${indexRef.current}`).then(
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
      }
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

  usePageScroll(function (e: any) {
    onMyScroll(e.scrollTop)
  })

  return (
    <View
      id={`sticky-com-index${indexRef.current}`}
      className={' van-sticky ' + (className || '')}
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
export default Sticky
