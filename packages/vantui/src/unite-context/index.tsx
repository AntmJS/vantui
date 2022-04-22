import { createContext } from 'react'

export const UniteContext = createContext({
  uniteConfig: {
    page: false,
  },
  onRefresh: () => {},
  error: undefined,
  setError: (value: any) => {
    console.log(value)
  },
}) as React.Context<{
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

export default UniteContext
