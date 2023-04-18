import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react'
import { View } from '@tarojs/components'
import { CountDownProps, ICountDownRef } from '../../types/count-down'
import { isSameSecond, parseFormat, parseTimeData } from './util'

function simpleTick(fn: any) {
  return setTimeout(fn, 30)
}
function Index(props: CountDownProps, ref: React.ForwardedRef<ICountDownRef>) {
  const _ref: React.MutableRefObject<{
    tid: any
    counting: boolean
    endTime?: number
    remain?: number
  }> = useRef({ tid: null, counting: false })
  const [state, setState] = useState({
    formattedTime: '0',
  })
  const { formattedTime } = state
  const {
    time,
    format = 'HH:mm:ss',
    autoStart = true,
    millisecond,
    onChange,
    onFinish,
    children,
    style,
    className,
    ...others
  } = props

  // 暂停
  const pause = useCallback(function () {
    _ref.current.counting = false
    clearTimeout(_ref.current.tid)
  }, [])

  const getRemain = useCallback(function () {
    return Math.max(_ref.current.endTime! - Date.now(), 0)
  }, [])
  const setRemain = useCallback(
    function (remain?: number) {
      _ref.current.remain = remain
      const timeData = parseTimeData(remain)
      if (children) {
        onChange?.({
          detail: timeData,
        })
      }
      setState((pre: any) => {
        return { ...pre, formattedTime: parseFormat(format, timeData) }
      })
      if (remain === 0) {
        pause()
        onFinish?.()
      }
    },
    [children, format, onChange, onFinish, pause],
  )

  const microTick = useCallback(
    function () {
      _ref.current.tid = simpleTick(() => {
        setRemain(getRemain())
        if (_ref.current.remain !== 0) {
          microTick()
        }
      })
    },
    [getRemain, setRemain],
  )
  const macroTick = useCallback(
    function () {
      _ref.current.tid = simpleTick(() => {
        const remain = getRemain()
        if (!isSameSecond(remain, _ref.current.remain) || remain === 0) {
          setRemain(remain)
        }
        if (_ref.current.remain !== 0) {
          macroTick()
        }
      })
    },
    [getRemain, setRemain],
  )

  const tick = useCallback(
    function () {
      if (millisecond) {
        microTick()
      } else {
        macroTick()
      }
    },
    [macroTick, microTick, millisecond],
  )
  // 开始
  const start = useCallback(
    function () {
      if (_ref.current.counting) {
        return
      }
      _ref.current.counting = true
      _ref.current.endTime = Date.now() + _ref.current.remain!
      tick()
    },
    [tick],
  )

  // 重置
  const reset = useCallback(
    function () {
      pause()
      _ref.current.remain = time
      setRemain(_ref.current.remain)
      if (autoStart) {
        start()
      }
    },
    [autoStart, pause, setRemain, start, time],
  )

  useImperativeHandle(ref, () => ({
    start: () => {
      start()
    },
    pause: () => {
      pause()
    },
    reset: () => {
      reset()
    },
  }))

  useEffect(
    function () {
      reset()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [time],
  )

  useEffect(function () {
    const _refCurrent = _ref.current
    return function () {
      _refCurrent.tid && clearTimeout(_refCurrent.tid)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <View className={`van-count-down ${className}`} style={style} {...others}>
      {children ? children : <>{formattedTime}</>}
    </View>
  )
}

const CountDown = forwardRef(Index)
export { CountDown }
export default CountDown
