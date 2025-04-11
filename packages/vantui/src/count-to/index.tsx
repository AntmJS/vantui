import type { CountToProps, ICountToRef } from '../../types/count-to'
import { useDidHide, useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import {
  useEffect,
  useState,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { get } from '../default-props'
import { requestAnimationFrame, cancelAnimationFrame } from '../common/utils'
import './index.less'
const ensureNumber = (val) => {
  // eslint-disable-next-line no-restricted-globals
  return typeof val === 'number' && !isNaN(val)
}

const d = get().CountTo

const Index = (props: CountToProps, ref: React.ForwardedRef<ICountToRef>) => {
  const {
    startVal = 0,
    endVal = 0,
    duration = 3000,
    autoStart = true,
    decimals = 0,
    useEasing = true,
    decimal = '.',
    separator = '',
    className = '',
    prefix,
    suffix,
    onFinish,
  } = {
    ...d,
    ...props,
  }

  const formatNumber = (num) => {
    num = Number(num)
    num = num.toFixed(Number(decimals))
    num += ''
    const x = num.split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? decimal + x[1] : ''
    const rgx = /(\d+)(\d{3})/
    if (separator && !ensureNumber(separator)) {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + separator + '$2')
      }
    }
    return x1 + x2
  }

  const [displayValue, setDisplayValue] = useState(formatNumber(startVal))

  const localRef = useRef({
    localStartVal: startVal,
    localDuration: duration,
  })
  const remaining = useRef<number | null>(null)
  const paused = useRef<boolean>(true)
  const rAF = useRef<any>(null)
  const startTime = useRef<number | null>(null)
  const printVal = useRef<number>(startVal)
  const lastTime = useRef<number>(0)

  const countDown: boolean = useMemo(() => {
    return startVal > endVal
  }, [startVal, endVal])

  useEffect(() => {
    autoStart && start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart, startVal, endVal])

  useDidShow(() => {
    autoStart && start()
  })

  const easingFn = (t, b, c, d) => {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b
  }

  const start = () => {
    localRef.current = {
      localStartVal: startVal,
      localDuration: duration,
    }
    startTime.current = null
    paused.current = false
    rAF.current = requestAnimationFrame(count)
  }

  const pause = () => {
    paused.current = true
    cancelAnimationFrame(rAF.current)
  }

  const resume = () => {
    paused.current = false
    startTime.current = null
    localRef.current = {
      localStartVal: printVal.current,
      localDuration: remaining.current || duration,
    }
    rAF.current = requestAnimationFrame(count)
  }

  const reset = () => {
    paused.current = true
    cancelAnimationFrame(rAF.current)
    localRef.current = {
      localStartVal: startVal,
      localDuration: duration,
    }
    printVal.current = startVal
    remaining.current = null
    startTime.current = null
    lastTime.current = 0
    setDisplayValue(formatNumber(startVal))
  }

  useImperativeHandle(ref, () => ({
    start: () => start(),
    pause: () => pause(),
    resume: () => resume(),
    reset: () => reset(),
  }))

  const count = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp

    const { localDuration, localStartVal } = localRef.current

    const progress = timestamp - (startTime.current || 0)
    remaining.current = localDuration - progress

    let value: number
    if (useEasing) {
      value = countDown
        ? easingFn(progress, 0, localStartVal - endVal, localDuration)
        : easingFn(
            progress,
            localStartVal,
            endVal - localStartVal,
            localDuration,
          )
    } else {
      value = countDown
        ? localStartVal - (localStartVal - endVal) * (progress / localDuration)
        : localStartVal + (endVal - localStartVal) * (progress / localDuration)
    }

    printVal.current = countDown
      ? Math.max(value, endVal)
      : Math.min(value, endVal)

    setDisplayValue(formatNumber(printVal.current) || '0')
    if (progress < localDuration) {
      rAF.current = requestAnimationFrame(count)
    } else {
      onFinish && onFinish()
    }
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rAF.current)
    }
  }, [])

  useDidHide(() => {
    cancelAnimationFrame(rAF.current)
  })

  return (
    <View className={'vant-count-to ' + className || ''}>
      {prefix && <Text className="vant-count-to__prefix">{prefix}</Text>}
      <Text className="vant-count-to__content">{displayValue}</Text>
      {suffix && <Text className="vant-count-to__suffix">{suffix}</Text>}
    </View>
  )
}

const CountTo = forwardRef(Index)
export { CountTo }
export default CountTo
