declare const UniteContext: React.Context<{
  uniteConfig: {
    page?: boolean
  }
  onRefresh: <T extends boolean>(
    catchRefresh?: T,
  ) => T extends true
    ? Promise<{ code: string; message: string; data: any }>
    : void
  error?: { code: string; message: string; data: any }
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export { UniteContext }
