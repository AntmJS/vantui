import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

/**
 * @description 结果页，用于展示用户操作后的信息反馈。
 */

export interface IResultProps extends ViewProps {
  /**
   * @description 内置类型 success=成功 error=错误/危险 info=信息提示 wait=等待处理
   */
  type: 'success' | 'error' | 'info' | 'warning' | 'wait'

  /**
   * @description 自定义图片，如果配置了 type， 则不生效
   */
  renderIcon?: React.ReactNode

  /**
   * @description 主文案
   */
  title: string | React.ReactNode

  /**
   * @description 副文案
   */
  message?: string | React.ReactNode
  /**
   * @description 下方额外内容
   */
  extra?: string
  /**
   * @description 图标大小
   * @default 120
   */
  iconSize?: number
}

declare const Result: FunctionComponent<IResultProps>

export { Result }
