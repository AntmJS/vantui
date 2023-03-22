import { useState, useCallback, useEffect, useMemo } from 'react'
import { View, Text } from '@tarojs/components'
import { Loading } from '../loading'
import { getRect } from '../common/utils'
import { IPullToRefreshProps } from '../../types/index'

let initIndex = 0
const clsPrefix = 'van-pull-to-refresh'
type IStatus = 'pull' | 'release' | 'loading' | 'success'

export default function PullToRefresh(props: IPullToRefreshProps) {
  const {
    children,
    loadingText = '加载中...',
    successText = '刷新成功',
    pullText = '下拉刷新',
    releaseText = '松开刷新',
    headHeight = 40,
    renderLoading,
    onRefresh,
    touchMaxStart = 300,
    disable = false,
  } = props
  const [statusHeight, setStatusHeight] = useState(0)
  const [status, setStatus] = useState<IStatus>('pull') // 待拖拽
  const [componentIndex] = useState(initIndex++)
  const [touch] = useState({
    start: 0,
    time: 0,
    maxStart: 0,
  })

  const reset = useCallback(() => {
    touch.start = 0
    touch.time = 0
    setStatusHeight(0)
  }, [touch])

  const onTouchStart = useCallback(
    function (event) {
      if (!disable) {
        if (status !== 'pull') setStatus('pull')
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
      if (!disable) {
        if (status === 'pull' && Date.now() - touch.time > 400) {
          event.preventDefault()
          event.stopPropagation()
          const y = event.touches[0].clientY - touch.start
          setStatusHeight(y)
        }
      } else {
        setStatus('pull')
      }
    },
    [disable, status, touch.start, touch.time],
  )

  const onTouchEnd = useCallback(async () => {
    if (statusHeight > headHeight && status === 'release') {
      setStatus('loading')
      setStatusHeight(headHeight)
      await onRefresh()
      setStatus('success')
      setTimeout(() => {
        reset()
      }, 1100)
    } else {
      setStatusHeight(0)
    }
  }, [headHeight, onRefresh, reset, status, statusHeight])

  useEffect(() => {
    if (status === 'pull' && statusHeight - headHeight >= 50) {
      setStatus('release')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusHeight])

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

  const renderHeight = useMemo(() => {
    return statusHeight > headHeight ? headHeight : statusHeight
  }, [headHeight, statusHeight])

  const renderMarginBottom = useMemo(() => {
    let marginBottom = 0
    const ly = statusHeight - headHeight
    if (ly > 10) {
      marginBottom = 10
    }

    return marginBottom
  }, [headHeight, statusHeight])

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
          marginBottom: renderMarginBottom,
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
