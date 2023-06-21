import React, { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
/**
 * @title DropdownMenuProps
 */
export interface DropdownMenuProps extends ViewProps {
  /**
   * @description 选中选项后颜色
   */
  activeColor?: string
  /**
   * @description 是否展示蒙层
   */
  overlay?: boolean
  /**
   * @description 弹出层zIndex
   */
  zIndex?: number
  /**
   * @description 弹出层执行时间
   */
  duration?: number
  /**
   * @description 弹出层执行方向
   */
  direction?: 'down' | 'up'
  /**
   * @description 点击蒙层是否关闭弹出层
   */
  closeOnClickOverlay?: boolean
  /**
   * @description 是否在点击外部 menu 后关闭菜单
   */
  closeOnClickOutside?: boolean
  /**
   * @description 子元素,须为DropdownMenuItem
   */
  children: React.ReactNode
}

/**
 * @title DropdownItemProps
 */
export interface DropdownItemProps extends ViewProps {
  /**
   * @description 对应菜单选项的值
   */
  value?: string | number
  /**
   * @description 未选择时候的按钮标题
   */
  title?: ReactNode
  /**
   * @description 是否禁用
   */
  disabled?: boolean
  /**
   * @description 标题元素的class
   */
  titleClass?: string
  /**
   * @description 所有选项
   */
  options?: Array<DropdownMenuOption>
  /**
   * @description 弹出层的样式
   */
  popupStyle?: React.CSSProperties
  /**
   * @description 展开下拉项触发
   */
  onOpen?: () => void
  /**
   * @description 展开下拉项完成时触发
   */
  onOpened?: () => void
  /**
   * @description 关闭下拉项触发
   */
  onClose?: () => void
  /**
   * @description 展开下拉项完成触发
   */
  onClosed?: () => void
  /**
   * @description 点击选项触发
   */
  onChange?: (value?: number | string) => void
  /**
   * @description 传入的子元素
   */
  children?: React.ReactNode | React.ReactNode[]
}

/**
 * @title 菜单下拉选项DropdownMenuOption
 */
export type DropdownMenuOption = {
  /**
   * @description 展示的label
   */
  text?: ReactNode
  /**
   * @description 对应的数值
   */
  value: number | string
  /**
   * @description 前缀图标
   */
  icon?: string
}

/**
 * @title 组件实例
 * @description 通过ref获取到的方法如下
 */
export type IDropdownItemInstance = {
  /**
   * @description 控制展开/收起菜单栏，传入参数show是否展开，options.immediate是否不需要动画
   */
  toggle: (show?: boolean, options?: { immediate: boolean }) => void
}

declare const DropdownItem: FunctionComponent<DropdownItemProps>

declare const DropdownMenu: FunctionComponent<DropdownMenuProps>

export { DropdownMenu, DropdownItem }
