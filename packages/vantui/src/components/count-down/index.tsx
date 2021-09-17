import { useEffect, useState, useRef } from 'react'
import { View, Block } from '@tarojs/components'
import { CountDownProps } from '../../../types/count-down'
import { isSameSecond, parseFormat, parseTimeData } from './util'

function simpleTick(fn: any) {
  return setTimeout(fn, 30)
}
export default function Index(props: CountDownProps) {
  const ref: React.MutableRefObject<{
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
    cref,
    time,
    format = 'HH:mm:ss',
    autoStart = true,
    useSlot,
    millisecond,
    onChange,
    onFinish,
    children,
    style,
    className,
    ...others
  } = props

  // 暂停
  const pause = function () {
    ref.current.counting = false
    clearTimeout(ref.current.tid)
  }

  const getRemain = function () {
    return Math.max(ref.current.endTime! - Date.now(), 0)
  }
  const setRemain = function (remain?: number) {
    ref.current.remain = remain
    const timeData = parseTimeData(remain)
    if (useSlot) {
      onChange?.(timeData)
    }
    setState((pre: any) => {
      return { ...pre, formattedTime: parseFormat(format, timeData) }
    })
    if (remain === 0) {
      pause()
      onFinish?.()
    }
  }

  const microTick = function () {
    ref.current.tid = simpleTick(() => {
      setRemain(getRemain())
      if (ref.current.remain !== 0) {
        microTick()
      }
    })
  }
  const macroTick = function () {
    ref.current.tid = simpleTick(() => {
      const remain = getRemain()
      if (!isSameSecond(remain, ref.current.remain) || remain === 0) {
        setRemain(remain)
      }
      if (ref.current.remain !== 0) {
        macroTick()
      }
    })
  }

  const tick = function () {
    if (millisecond) {
      microTick()
    } else {
      macroTick()
    }
  }
  // 开始
  const start = function () {
    if (ref.current.counting) {
      return
    }
    ref.current.counting = true
    ref.current.endTime = Date.now() + ref.current.remain!
    tick()
  }

  // 重置
  const reset = function () {
    pause()
    ref.current.remain = time
    setRemain(ref.current.remain)
    if (autoStart) {
      start()
    }
  }

  const actionRef = useRef({
    start: function () {
      start()
    },
    pause: function () {
      pause()
    },
    reset: function () {
      reset()
    },
  })
  if (cref) {
    cref.current = actionRef.current
  }

  useEffect(
    function () {
      reset()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [time],
  )

  const tid = ref.current.tid
  useEffect(function () {
    return function () {
      tid && clearTimeout(tid)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <View className={`van-count-down ${className}`} style={style} {...others}>
      {useSlot ? children : <Block>{formattedTime}</Block>}
    </View>
  )
}
