/* eslint-disable @typescript-eslint/ban-ts-comment */
import { nextTick } from '@tarojs/taro'
import {
  useState,
  isValidElement,
  cloneElement,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react'
import toArray from 'rc-util/lib/Children/toArray'
import { View, ScrollView } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { isDef } from '../common/validator'
import { Sticky } from '../sticky/index'
import { getRect, getAllRect, requestAnimationFrame } from '../common/utils'
import { Info } from '../info/index'
import { TabsProps, TabProps } from '../../types/tab'
import * as computed from './wxs'

const MIN_DISTANCE = 10
function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }
  return ''
}

function parseTabList(children: React.ReactNode): any[] {
  return toArray(children)
    .map((node: React.ReactElement<TabProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter((tab) => tab)
}

export function Tabs(props: TabsProps) {
  const ref = useRef({
    skipInit: false,
    direction: '',
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    startX: 0,
    startY: 0,
    swiping: false,
  })

  const indexRef = useRef(`${+new Date()}${Math.ceil(Math.random() * 10000)}`)
  const [isInited, setIsInited] = useState(false)
  const [scrollWidth, setScrollWidth] = useState('100%')
  const [state, setState]: any = useState({
    tabs: [],
    scrollLeft: 0,
    scrollable: false,
    currentIndex: 0,
    skipTransition: true,
    scrollWithAnimation: false,
    lineOffsetLeft: 0,
  })
  const {
    scrollLeft,
    scrollable,
    currentIndex,
    skipTransition,
    scrollWithAnimation,
    lineOffsetLeft,
  } = state

  const {
    swipeable,
    active = 0,
    lazyRender = true,
    type = 'line',
    sticky,
    container,
    zIndex,
    offsetTop = 0,
    border,
    color,
    ellipsis = true,
    lineHeight = -1,
    duration = 0.3,
    lineWidth = 40,
    titleActiveColor,
    titleInactiveColor,
    swipeThreshold = 5,
    animated,
    renderNavLeft,
    renderNavRight,
    onScroll,
    onClick,
    onChange,
    onDisabled,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    setIsInited(true)
  }, [])

  const tabs = useMemo(() => {
    return parseTabList(children)
  }, [children])

  const newChildren = useMemo(() => {
    return tabs.map((tab, index) => {
      return cloneElement(tab.node, {
        key: index,
        active: currentIndex === index,
        lazyRender,
        animated,
        index,
      })
    }) as any[]
  }, [animated, currentIndex, lazyRender, tabs])

  const trigger = function (
    eventName: 'onClick' | 'onChange' | 'onDisabled',
    child?: any,
  ) {
    const currentChild = child || newChildren[currentIndex]
    if (!isDef(currentChild)) {
      return
    }
    const func = {
      onClick,
      onChange,
      onDisabled,
    }
    func[eventName]?.({
      detail: {
        index: currentChild.props.index,
        name: currentChild.props.name || currentChild.props.index,
        title: currentChild.props.title,
      },
    })
  }

  const getCurrentName = function () {
    const activeTab: any = newChildren[currentIndex]
    if (activeTab) {
      return activeTab.props.name || activeTab.props.index
    }
  }

  const setCurrentIndex = function (cIndex: number) {
    if (!isDef(cIndex) || cIndex >= newChildren.length || cIndex < 0) {
      return
    }

    if (cIndex === currentIndex) {
      return
    }
    const shouldEmitChange = currentIndex !== null
    setState((pre: any) => {
      return { ...pre, currentIndex: cIndex }
    })
    requestAnimationFrame(() => {
      resize(cIndex)
      scrollIntoView(cIndex)
    })
    nextTick(() => {
      if (shouldEmitChange) {
        trigger('onChange', newChildren[cIndex])
      }
    })
  }

  const setCurrentIndexByName = function (name: any) {
    const matched = newChildren.filter(
      (child: any) => (child.props.name || child.props.index) === name,
    )
    if (matched.length) {
      setCurrentIndex(matched[0]!.props.index)
    }
  }

  const resize = function (index?: number) {
    if (type !== 'line') {
      return
    }
    index = index ?? currentIndex
    nextTick(() => {
      Promise.all([
        getAllRect(null, `.tabs-com-index${indexRef.current} .van-tab`),
        getRect(null, `.tabs-com-index${indexRef.current} .van-tabs__line`),
      ]).then(([rects = [], lineRect]: any) => {
        if (rects && lineRect) {
          const rect = rects[index!]
          if (rect == null) {
            return
          }
          let lineOffsetLeft = rects
            .slice(0, index)
            .reduce((prev: number, curr: any) => prev + curr.width, 0)
          lineOffsetLeft +=
            (rect.width - lineRect.width) / 2 + (ellipsis ? 0 : 8)
          setState((pre: any) => {
            return { ...pre, lineOffsetLeft }
          })
          ref.current.swiping = true
          if (skipTransition) {
            nextTick(() => {
              setState((pre: any) => {
                return { ...pre, skipTransition: false }
              })
            })
          }
        }
      })
    })
  }

  const onTap = function (event: any) {
    let { index } = event.currentTarget.dataset
    index = parseInt(index)
    const child = newChildren[index]
    if (child.props.disabled) {
      trigger('onDisabled', child)
    } else {
      setCurrentIndex(index)
      nextTick(() => {
        trigger('onClick', child)
      })
    }
  }

  const scrollIntoView = function (index?: number) {
    if (!scrollable) {
      return
    }
    index = index ?? currentIndex
    Promise.all([
      getAllRect(null, `.tabs-com-index${indexRef.current} .van-tab`),
      getRect(null, `.tabs-com-index${indexRef.current} .van-tabs__nav`),
    ]).then(([tabRects, navRect]: any) => {
      if (tabRects && navRect) {
        const tabRect = tabRects[index!]
        const offsetLeft = tabRects
          .slice(0, index)
          .reduce((prev: number, curr: any) => prev + curr.width, 0)
        setState((pre: any) => {
          return {
            ...pre,
            scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2,
          }
        })
        if (!scrollWithAnimation) {
          nextTick(() => {
            setState((pre: any) => {
              return {
                ...pre,
                scrollWithAnimation: true,
              }
            })
          })
        }
      }
    })
  }

  const resetTouchStatus = function () {
    ref.current.direction = ''
    ref.current.deltaX = 0
    ref.current.deltaY = 0
    ref.current.offsetX = 0
    ref.current.offsetY = 0
  }
  const touchStart = function (event: any) {
    resetTouchStatus()
    const touch = event.touches[0]
    ref.current.startX = touch.clientX
    ref.current.startY = touch.clientY
  }
  const touchMove = function (event: any) {
    const touch = event.touches[0]
    ref.current.deltaX = touch.clientX - ref.current.startX
    ref.current.deltaY = touch.clientY - ref.current.startY
    ref.current.offsetX = Math.abs(ref.current.deltaX)
    ref.current.offsetY = Math.abs(ref.current.deltaY)
    ref.current.direction =
      ref.current.direction ||
      getDirection(ref.current.offsetX, ref.current.offsetY)
  }
  const getAvaiableTab = function (direction: number) {
    const step = direction > 0 ? -1 : 1
    for (
      let i = step;
      currentIndex + i < tabs.length && currentIndex + i >= 0;
      i += step
    ) {
      const index = currentIndex + i
      if (
        index >= 0 &&
        index < tabs.length &&
        tabs[index] &&
        !tabs[index].disabled
      ) {
        return index
      }
    }
    return -1
  }

  const onTouchStart = function (event: any) {
    if (!swipeable) return
    ref.current.swiping = true
    touchStart(event)
  }

  const onTouchMove = function (event: any) {
    if (!swipeable || !ref.current.swiping) return
    touchMove(event)
  }

  const onTouchEnd = function () {
    if (!swipeable || !ref.current.swiping) return
    const { direction, deltaX, offsetX } = ref.current
    const minSwipeDistance = 50
    if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
      const index = getAvaiableTab(deltaX)
      if (index !== -1) {
        setCurrentIndex(index)
      }
    }

    ref.current.swiping = false
  }

  useEffect(function () {
    ref.current.swiping = true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    function () {
      nextTick(() => {
        resize()
        scrollIntoView()
        if (
          active !== getCurrentName() &&
          !ref.current?.swiping &&
          !swipeable
        ) {
          setCurrentIndexByName(active)
        }
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [getCurrentName()],
  )

  useEffect(
    function () {
      resize()
      scrollIntoView()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lineWidth],
  )
  useEffect(
    function () {
      if (active !== getCurrentName()) {
        setCurrentIndexByName(active)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active],
  )

  useEffect(
    function () {
      setState((pre: any) => {
        return {
          ...pre,
          scrollable: newChildren.length > swipeThreshold || !ellipsis,
        }
      })
    },
    [swipeThreshold, newChildren, ellipsis],
  )

  // 解决异步加载的时候默认的下划线不出现的问题
  useEffect(
    function () {
      nextTick(() => {
        resize()
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newChildren],
  )

  const getScrollWrapWidth = useCallback(
    async function () {
      let othersWidth = 0
      if (renderNavLeft && isInited) {
        const res: any = await getAllRect(
          null,
          // @ts-ignore
          '.' + utils.bem('renderNavLeft' + indexRef.current),
        )

        if (res.length) othersWidth += res[0].width
      }

      if (renderNavRight && isInited) {
        const res: any = await getAllRect(
          null,
          // @ts-ignore
          '.' + utils.bem('renderNavRight' + indexRef.current),
        )

        if (res.length) othersWidth += res[0].width
      }

      if (othersWidth) setScrollWidth(`calc(100% - ${othersWidth}px)`)
    },
    [renderNavLeft, isInited, renderNavRight],
  )

  useEffect(
    function () {
      setTimeout(() => {
        getScrollWrapWidth()
      })
    },
    [getScrollWrapWidth, isInited],
  )

  return (
    <View
      className={
        `tabs-com-index${indexRef.current} ` +
        ' ' +
        utils.bem('tabs', [type] + ` ${className || ''}`)
      }
      style={style}
      {...others}
    >
      <Sticky
        disabled={!sticky}
        zIndex={zIndex}
        offsetTop={offsetTop}
        container={container}
        onScroll={onScroll}
      >
        <View
          className={
            utils.bem('tabs__wrap', {
              scrollable,
            }) +
            ' ' +
            (type === 'line' && border ? 'van-hairline--top-bottom' : '')
          }
        >
          <View className={utils.bem('renderNavLeft' + indexRef.current)}>
            {renderNavLeft}
          </View>
          <ScrollView
            scrollX={scrollable}
            scrollWithAnimation={scrollWithAnimation}
            scrollLeft={scrollLeft}
            className={utils.bem('tabs__scroll', [type])}
            style={{
              width: scrollWidth,
              borderColor: color,
            }}
          >
            <View
              className={
                utils.bem('tabs__nav', [
                  type,
                  {
                    complete: !ellipsis,
                  },
                ]) + ' nav-class'
              }
              style={computed.navStyle(color, type)}
            >
              {type === 'line' && (
                <View
                  className="van-tabs__line"
                  style={computed.lineStyle({
                    color,
                    lineOffsetLeft,
                    lineHeight,
                    skipTransition,
                    duration,
                    lineWidth,
                  })}
                ></View>
              )}
              {tabs.map((item: any, index: any) => {
                return (
                  <View
                    key={index}
                    data-index={index}
                    className={
                      computed.tabClass(index === currentIndex, ellipsis) +
                      ' ' +
                      utils.bem('tab', {
                        active: index === currentIndex,
                        disabled: item.disabled,
                        complete: !ellipsis,
                      })
                    }
                    style={computed.tabStyle({
                      active: index === currentIndex,
                      ellipsis,
                      color,
                      type,
                      disabled: item.disabled,
                      titleActiveColor,
                      titleInactiveColor,
                      swipeThreshold,
                      scrollable,
                    })}
                    onClick={onTap}
                  >
                    <View
                      className={ellipsis ? 'van-ellipsis' : ''}
                      style={item.titleStyle}
                    >
                      {item.title}
                      {(item.info !== null || item.dot) && (
                        <Info
                          info={item.info}
                          dot={item.dot}
                          className="van-tab__title__info"
                        ></Info>
                      )}
                    </View>
                  </View>
                )
              })}
            </View>
          </ScrollView>
          <View className={utils.bem('renderNavRight' + indexRef.current)}>
            {renderNavRight}
          </View>
        </View>
      </Sticky>
      <View
        className="van-tabs__content"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onTouchCancel={onTouchEnd}
      >
        <View
          className={
            utils.bem('tabs__track', [
              {
                animated,
              },
            ]) + ' van-tabs__track'
          }
          style={computed.trackStyle({
            duration,
            currentIndex,
            animated,
          })}
        >
          {newChildren}
        </View>
      </View>
    </View>
  )
}

export default Tabs
