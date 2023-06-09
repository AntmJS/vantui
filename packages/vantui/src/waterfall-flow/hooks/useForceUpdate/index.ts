import { useState } from 'react'
import { usePersistFn } from '../usePersistFn'

export const useForceUpdate = () => {
  const [, forceUpdate] = useState(new Date().valueOf())
  const update = usePersistFn(() => {
    forceUpdate(new Date().valueOf())
  })
  return update
}

export default useForceUpdate
