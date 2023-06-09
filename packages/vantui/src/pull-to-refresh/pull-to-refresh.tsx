import { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import { Loading } from '../loading'
import { getRect } from '../common/utils'
import { IPullToRefreshProps } from '../../types/index'

let initIndex = 0
const clsPrefix = 'van-pull-to-refresh'
type IStatus = 'pull' | 'release' | 'loading' | 'success'
const SUCESS_DURATION = 1000
const TOUCH_MIN_TIME = 400

export default function PullToRefresh(props: IPullToRefreshProps) {
  const {
    children,
    loadingText = '加载中...',
    successText = '刷新成功',
    pullText = '下拉刷新',
    releaseText = '松开刷新',
    headHeight = 60,
    renderLoading,
    onRefresh,
    touchMaxStart = 300,
    disable = false,
    successDuration = SUCESS_DURATION,
    touchMinTime = TOUCH_MIN_TIME,
  } = props
  const [statusHeight, setStatusHeight] = useState(0)
  const [status, setStatus] = useState<IStatus>('pull') // 待拖拽
  const [componentIndex] = useState(initIndex++)
  const [touch] = useState({
    start: 0,
    time: 0,
    maxStart: 0,
  })

  const renderHeight = useMemo(() => {
    return statusHeight > headHeight ? headHeight : statusHeight
  }, [headHeight, statusHeight])

  const rendermarginTop = useMemo(() => {
    let marginTop = 0
    const ly = statusHeight - headHeight
    if (ly > 30) {
      marginTop = 30
    }

    return marginTop
  }, [headHeight, statusHeight])

  const reset = useCallback(() => {
    touch.start = 0
    touch.time = 0
    setStatusHeight(0)
    setStatus('pull')
  }, [touch])

  const onTouchStart = useCallback(
    function (event) {
      if (!disable && status === 'pull') {
        const start = event.touches[0].clientY
        if (start < touch.maxStart) {
          touch.start = event.touches[0].clientY
          touch.time = Date.now()
        } else {
          touch.time = Date.now() + 9999 * 1000
        }
      }
    },
    [disable, status, touch],
  )

  const onTouchMove = useCallback(
    function (event) {
      if (
        !disable &&
        Date.now() - touch.time > touchMinTime &&
        (status === 'pull' || status === 'release')
      ) {
        event.preventDefault()
        event.stopPropagation()
        let y = event.touches[0].clientY - touch.start
        if (y < 0) y = 0

        setStatusHeight(y)
      }
    },
    [disable, status, touch.start, touch.time, touchMinTime],
  )

  const onTouchEnd = useCallback(async () => {
    if (status === 'release' && rendermarginTop === 30) {
      setStatus('loading')
      setStatusHeight(headHeight)
      await onRefresh()
      setStatus('success')
      setTimeout(() => {
        reset()
      }, successDuration)
    } else {
      reset()
    }
  }, [headHeight, onRefresh, rendermarginTop, reset, status, successDuration])

  useEffect(() => {
    setTimeout(() => {
      getRect(null, `.${clsPrefix}-status${componentIndex}`).then(
        (res: any) => {
          touch.maxStart = res.top + touchMaxStart
        },
      )
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (rendermarginTop === 30) {
      setStatus('release')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rendermarginTop])

  return (
    <View
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className={`${clsPrefix}`}
    >
      <View
        className={`${clsPrefix}-status ${clsPrefix}-status${componentIndex}`}
        style={{
          height: renderHeight,
          lineHeight: renderHeight,
          marginTop: rendermarginTop,
        }}
      >
        {status === 'loading' && (
          <>
            {renderLoading || (
              <>
                <Loading size={30}></Loading>
                <Text style={{ paddingLeft: 8 }}>{loadingText}</Text>
              </>
            )}
          </>
        )}
        {status === 'release' && releaseText}
        {status === 'pull' && pullText}
        {status === 'success' && successText}
      </View>
      {children}
    </View>
  )
}
