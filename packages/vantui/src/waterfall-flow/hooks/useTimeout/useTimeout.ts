import { useDepsTimeout } from './useDepsTimeout'

export const useTimeout = (fn: () => void, delay?: number) => {
  const clear = useDepsTimeout(fn, [], delay)

  return clear
}
