import { createContext } from 'react'

export const UniteContext = createContext({
  uniteConfig: {
    page: false,
  },
  onRefresh: () => {
    return Promise.resolve({ code: '200', message: '请求成功', data: null })
  },
  error: undefined,
  setError: (value: any) => {
    console.log(value)
  },
}) as React.Context<{
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

export default UniteContext
