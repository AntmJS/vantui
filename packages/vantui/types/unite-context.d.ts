declare const UniteContext: React.Context<{
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

export { UniteContext }
