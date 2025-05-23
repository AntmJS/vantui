import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
import toast from '../src/toast/toast'
/**
 * @title Toast Props
 */
export interface ToastProps extends ViewProps {
  /**
   * @description 弹出层的层级
   * @default 1000
   */
  zIndex?: number
  /**
   * @description 展示时长(ms)，值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number
  /**
   * @description 是否有蒙层
   * @default false
   */
  mask?: boolean
  /**
   * @description 是否禁止背景点击
   * @default false
   */
  forbidClick?: boolean
  /**
   * @description 提示类型
   * @default text
   */
  type?: 'loading' | 'success' | 'fail' | 'html' | 'text'
  /**
   * @description 展示位置
   * @default middle
   */
  position?: 'top' | 'middle' | 'bottom'
  /**
   * @description 内容
   */
  message?: ReactNode
  /**
   * @description 加载图标类型
   * @default spinner
   */
  loadingType?: 'circular' | 'spinner' | undefined
  /**
   * @description 自定义选择器,对应元素id
   * @default van-toast
   */
  selector?: string
  /**
   * @description 设置id,配合selector使用
   */
  id?: string
  children?: ReactNode
  /**
   * @description 关闭时的回调函数
   */
  onClose?: () => any
}
/**
 * @title Toast下命令式调用方法
 * @description 调用方式传入ToastProps或者ToastProps.message执行
 */
export interface toastProps {
  /**
   * @description 展示提示
   */
  show: (options: ToastProps | string) => any
  /**
   * @description 展示加载提示
   */
  loading: (options: ToastProps | string) => any
  /**
   * @description 展示成功提示
   */
  success: (options: ToastProps | string) => any
  /**
   * @description 展示失败提示
   */
  fail: (options: ToastProps | string) => any
  /**
   * @description 关闭提示
   */
  clear: (options?: ToastProps) => void
  /**
   * @description 修改默认配置，对所有 Toast 生效。传入 type 可以修改指定类型的默认配置
   */
  setDefaultOptions: (options: ToastProps) => void
  /**
   * @description 重置默认配置，对所有 Toast 生效。
   */
  resetDefaultOptions: () => void
  /**
   * @description 获取唯一的toast组件，不需要手动设置id和selector
   */
  createOnlyToast: () => FunctionComponent<ToastProps> & toastProps
}

declare const Toast: FunctionComponent<ToastProps> & toastProps

export { Toast, toast }
