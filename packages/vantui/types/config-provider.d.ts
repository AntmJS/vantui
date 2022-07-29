import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

/**
 * @title ConfigProvider Props
 */
export interface ConfigProviderProps extends StandardProps {
  /**
   * @description 	自定义主题变量
   */
  themeVars: Normal.IAnyObject
  children: ReactNode
}

declare const ConfigProvider: FunctionComponent<ConfigProviderProps>

export { ConfigProvider }
