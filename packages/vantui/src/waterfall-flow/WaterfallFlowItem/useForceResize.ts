import { useRef } from 'react'
import { usePersistFn } from '../hooks'
import { queryElementSize, Size } from '../utils/element'

export const useForceResize = (
  query: string,
  onResize: (size: Size) => void,
) => {
  const sizeRef = useRef<Size>({ width: 0, height: 0 })

  const forceResize = usePersistFn(async () => {
    const { width, height } = await queryElementSize(query)
    if (width === sizeRef.current.width && height === sizeRef.current.height) {
      return
    }
    const newSize = { width, height }
    sizeRef.current = newSize
    onResize(newSize)
  })

  return forceResize
}
