// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="node_modules/@tarojs/plugin-platform-weapp/types/shims-weapp.d.ts" />

declare module '*.png'
declare module '*.gif'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'
declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.sass'
declare module '*.styl'

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development'
    TARO_ENV:
      | 'weapp'
      | 'swan'
      | 'alipay'
      | 'h5'
      | 'tt'
      | 'qq'
      | 'dd'
      | 'qywx'
      | 'jd'
      | 'iot'
    API_ENV: 'stable' | 'real' | 'pre' | 'dev'
    WATCHING: 'true' | 'false'
    DEPLOY_VERSION: string
  }
}

declare namespace Normal {
  type Record<K extends keyof any, T> = {
    [P in K]: T
  }
  type IAnyObject = Record<string, any>
  type INoneEmptyArray<T> = [T, ...T[]]
  // 匹配以/开头的url
  type IPathName<
    T extends string,
    K extends string,
  > = T extends `/${K}${infer R}` ? `/${K}${R}` : never
  type IHref<T extends string> = T extends `https://${infer R}`
    ? `https://${R}`
    : T extends `http://${infer R}`
    ? `http://${R}`
    : never

  interface IRequestResponse {
    status: number
    code: string
    header?: IAnyObject
    data: any
    message?: string
  }
}
