import { createContext } from 'react'

export const UniteContext = createContext({
  pullDownRefresh: false,
  error: undefined,
  uniteConfig: {
    page: false,
    stopPullDownRefreshAfterPull: false,
  },
  setError: (value: any) => {
    console.log(value)
  },
  startPullDownRefresh: () => {},
  startReload: () => {},
}) as React.Context<{
  pullDownRefresh: boolean
  error?: { code: string; message: string; data: any }
  uniteConfig: {
    page?: boolean
    stopPullDownRefreshAfterPull?: boolean
  }
  startPullDownRefresh?: () => void
  startReload: () => void
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export default UniteContext
