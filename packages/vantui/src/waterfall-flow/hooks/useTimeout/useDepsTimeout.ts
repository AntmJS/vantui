import React, { useEffect, useRef } from 'react'
import { usePersistFn } from '../usePersistFn'

export const useDepsTimeout = (
  fn: () => void,
  deps: React.DependencyList,
  delay?: number,
) => {
  const timerCallback = usePersistFn(fn)
  const timerRef = useRef<number | null>(null)

  const clear = usePersistFn(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
  })

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) {
      return
    }
    timerRef.current = setTimeout(timerCallback, delay) as unknown as number
    return clear
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, clear, timerCallback, ...deps])

  return clear
}
