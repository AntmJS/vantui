declare const UniteContext: React.Context<{
  uniteConfig: {
    page?: boolean
  }
  onRefresh: () => Promise<{ code: string; message: string; data: any }>
  error?: { code: string; message: string; data: any }
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export { UniteContext }
