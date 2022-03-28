import { createContext } from 'react'

export const UniteContext = createContext({
  pullDownRefresh: false,
  error: undefined,
  setError: (value: any) => {
    console.log(value)
  },
}) as React.Context<{
  pullDownRefresh: boolean
  error?: { code: string; message: string; data: any }
  setError: React.Dispatch<
    React.SetStateAction<
      { code: string; message: string; data: any } | undefined
    >
  >
}>

export default UniteContext
