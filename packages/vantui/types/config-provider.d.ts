import { ComponentClass, ReactNode } from 'react'
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

declare const ConfigProvider: ComponentClass<ConfigProviderProps>

export { ConfigProvider }
