import { createContext } from 'react'

export const UniteContext = createContext({
  uniteConfig: {
    page: false,
  },
  onRefresh: () => {
    return Promise.resolve()
  },
  error: undefined,
  setError: (value: any) => {
    console.log(value)
  },
}) as React.Context<{
  uniteConfig: {
    page?: boolean
  }
  onRefresh: () => Promise<void>
  error?: { code: string; message: string; data: any }
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export default UniteContext
