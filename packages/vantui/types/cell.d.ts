import { FunctionComponent, CSSProperties, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
/**
 * @title Cell Props
 */
export interface CellProps extends ViewProps {
  /**
   * @description 点击后跳转的链接地址
   */
  url?: string
  /**
   * @description 点击后跳转的链接地址
   * @default navigateTo
   */
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  /**
   * @description 左侧标题
   */
  title?: string | number
  /**
   * @description 右侧内容
   */
  value?: string | number
  /**
   * @description 标题下方的描述信息
   */
  icon?: string
  /**
   * @description 单元格大小，可选值为 large
   */
  size?: 'large'
  /**
   * @description 标题下方的描述信息
   */
  label?: ReactNode
  /**
   * @description 是否使内容垂直居中
   */
  center?: boolean
  /**
   * @description 是否展示右侧箭头并开启点击反馈
   */
  isLink?: boolean
  /**
   * @description 是否显示表单必填星号
   * @default false
   */
  required?: boolean
  /**
   * @description 是否开启点击反馈
   * @default false
   */
  clickable?: boolean
  /**
   * @description 标题宽度，须包含单位
   */
  titleWidth?: string
  /**
   * @description
   */
  style?: string
  /**
   * @description 箭头方向
   *
   */
  arrowDirection?: 'left' | 'up' | 'down'
  /**
   * @description 是否显示下边框
   */
  border?: boolean
  /**
   * @description 标题样式
   */
  titleStyle?: CSSProperties
  /**
   * @description 自定义渲染标题
   */
  renderTitle?: ReactNode
  /**
   * @description 自定义渲染左侧icon
   */
  renderIcon?: ReactNode
  /**
   * @description 自定义label显示内容
   */
  renderLabel?: ReactNode
  /**
   * @description 自定义icon显示内容
   */
  renderRightIcon?: ReactNode
  /**
   * @description 自定义右边内容后跟随的内容
   */
  renderExtra?: ReactNode
  children?: ReactNode
}

/**
 * @title CellGroup Props
 */
export interface CellGroupProps extends ViewProps {
  /**
   * @description 标题
   */
  title?: ReactNode
  /**
   * @description 是否显示外边框
   * @default true
   */
  border?: boolean
  /**
   * @description 是否展示为圆角卡片风格
   * @default false
   */
  inset?: boolean
  children?: ReactNode
}

declare const CellGroup: FunctionComponent<CellGroupProps>
declare const Cell: FunctionComponent<CellProps>

export { Cell, CellGroup }
