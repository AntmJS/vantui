import {
  getCurrentPages,
  createIntersectionObserver,
  nextTick,
} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { Loading } from '../loading'
import { InfiniteScrollProps, InfiniteScrollInstance } from '../../types/index'

const clsPrefix = `van-infinite-scroll`
type IStatus = 'loading' | 'complete' | 'error'
let compInitIndex = 0

function InfiniteScroll_(
  props: InfiniteScrollProps,
  ref: React.ForwardedRef<InfiniteScrollInstance>,
) {
  const {
    renderLoading,
    renderComplete,
    renderError,
    parentClassName,
    loadMore,
    className = '',
    completeText = '没有更多了～',
    loadingText = '加载中...',
    errorText = '加载失败',
    reloadText = '重新加载',
  } = props
  const [status, setStatus] = useState<IStatus>('loading')
  const [onRequest, setOnRequest] = useState(false)
  const contentObserver = useRef<any>()
  const [compIndex] = useState(compInitIndex++)
  const thisDom = useRef()
  const [forceKey, setForceKey] = useState(0) // 解决IntersectionObserver中执行loadmore时无法拿到最新的俩是state

  const reset = useCallback((needLoad?: boolean): Promise<null> => {
    return new Promise((resolve) => {
      nextTick(() => {
        if (needLoad) setForceKey(Date.now())
        else setForceKey(0)
        setStatus('loading')
        setOnRequest(false)
        resolve(null)
      })
    })
  }, [])

  const _loadMore = useCallback(
    async (immediately?: boolean) => {
      if ((!onRequest && status === 'loading') || immediately) {
        setOnRequest(true)
        const status = await loadMore()
        // 确保等待渲染任务执行完成
        setTimeout(() => {
          nextTick(() => {
            setStatus(status)
            setOnRequest(false)
          })
        }, 60)
      }
    },
    [loadMore, onRequest, status],
  )

  useEffect(() => {
    return () => {
      reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (forceKey !== 0) _loadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forceKey])

  const initObserveH5 = useCallback(() => {
    const options: any = {
      threshold: [0.6],
    }
    if (parentClassName)
      options.root = document.getElementsByClassName(parentClassName)[0]
    const contentObserver_ = new IntersectionObserver(function (res: any) {
      const target = res[0]
      if (target && target.intersectionRatio >= 0.6) {
        setForceKey(Math.random() + target.time)
      }
    }, options)
    contentObserver.current = contentObserver_
    contentObserver.current.observe(thisDom.current)
  }, [parentClassName])

  const initObserve = useCallback(
    function () {
      if (contentObserver.current != null) {
        contentObserver.current.disconnect()
      }
      if (process.env.TARO_ENV === 'h5') {
        return initObserveH5()
      }
      const pages: any = getCurrentPages()
      const curePage = pages[pages.length - 1]
      let _createIntersectionObserver = curePage.createIntersectionObserver

      if (process.env.TARO_ENV === 'alipay') {
        _createIntersectionObserver = createIntersectionObserver
      }

      const contentObserver_ = _createIntersectionObserver({
        thresholds: [0.6],
      })
      contentObserver.current = contentObserver_
      if (parentClassName) {
        contentObserver.current.relativeTo(`.${parentClassName}`)
      } else {
        contentObserver.current.relativeToViewport({ bottom: 0 })
      }
      contentObserver.current.observe(`.${clsPrefix}${compIndex}`, (res) => {
        if (res.intersectionRatio > 0) {
          setForceKey(Math.random() + res.time)
        }
      })
    },
    [compIndex, initObserveH5, parentClassName],
  )

  useEffect(() => {
    setTimeout(() => {
      initObserve()
    }, 66)

    return () => {
      if (contentObserver.current != null) {
        contentObserver.current.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const retry = useCallback(() => {
    reset()
    _loadMore(true)
  }, [_loadMore, reset])

  useImperativeHandle(ref, () => {
    return {
      reset,
    }
  })

  return (
    <View
      className={`${clsPrefix} ${clsPrefix}${compIndex} ${className}`}
      ref={thisDom}
    >
      {status === 'loading' && (
        <>
          {renderLoading || (
            <Loading size={24} className={`${clsPrefix}-loading`}>
              {loadingText}
            </Loading>
          )}
        </>
      )}
      {status === 'complete' && (
        <>
          {renderComplete || (
            <View className={`${clsPrefix}-complete`}>{completeText}</View>
          )}
        </>
      )}
      {status === 'error' && (
        <>
          {renderError || (
            <View className={`${clsPrefix}-error`}>
              <Text>{errorText}</Text>
              <Text className="reload-btn" onClick={retry}>
                {reloadText}
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  )
}

export const InfiniteScroll = forwardRef(InfiniteScroll_)

export default InfiniteScroll
