import { useRouter } from '@tarojs/taro'
import { createPortal } from '@tarojs/react'
import { useLayoutEffect, useState } from 'react'

const RootPortal = ({ children, enable = false }) => {
  const router = useRouter()
  const [dom, setDom] = useState<HTMLElement>()

  useLayoutEffect(() => {
    // @ts-ignore
    const _dom = document.getElementById(router.$taroPath)
    _dom && setDom(_dom)
    // @ts-ignore
  }, [router.$taroPath])

  return enable && dom ? createPortal(children, dom) : children
}

export default RootPortal
