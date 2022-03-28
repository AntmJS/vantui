declare const UniteContext: React.Context<{
  pullDownRefresh: boolean
  error?: { code: string; message: string; data: any }
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export { UniteContext }
