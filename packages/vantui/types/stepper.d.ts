import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, CommonEventFunction } from '@tarojs/components'
import { InputProps } from '@tarojs/components/types/Input'

type InputForceEvent = InputProps.inputForceEventDetail

export interface StepperProps extends ViewProps {
  /**
   * @description 在表单内提交时的标识符
   */
  name?: ReactNode
  /**
   * @description 输入值
   */
  value?: string | number
  /**
   * @description 是否只允许输入整数
   * @default `false`
   */
  integer?: boolean
  /**
   * @description 是否禁用
   * @default `false`
   */
  disabled?: boolean
  /**
   * @description 输入聚焦后，键盘弹起时，是否自动上推页面
   * @default `true`
   */
  adjustPosition?: boolean
  /**
   * @description 输入框宽度
   * @default `32px`
   */
  inputWidth?: string | number
  /**
   * @description 按钮大小
   * @default `28px`
   */
  buttonSize?: string | number
  /**
   * @description 是否异步更新
   * @default `false`
   */
  asyncChange?: boolean
  /**
   * @description 禁止输入
   * @default `false`
   */
  disableInput?: boolean
  /**
   * @description 固定显示的小数位数
   */
  decimalLength?: number
  /**
   * @description 最小值
   * @default `1`
   */
  min?: string | number
  /**
   * @description 最大值
   */
  max?: string | number
  /**
   * @description 步长
   * @default `1`
   */
  step?: string | number
  /**
   * @description 是否展示新增按钮
   * @default `true`
   */
  showPlus?: boolean
  /**
   * @description 是否展示减少按钮
   * @default `true`
   */
  showMinus?: boolean
  /**
   * @description 是否禁用新增按钮
   * @default `false`
   */
  disablePlus?: boolean
  /**
   * @description 是否禁用减少按钮
   * @default `false`
   */
  disableMinus?: boolean
  /**
   * @description 是否开启长按
   * @default `false`
   */
  longPress?: boolean
  /**
   * @description 可选值round
   */
  theme?: 'round'
  /**
   * @description 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default `false`
   */
  alwaysEmbed?: boolean
  /**
   * @description 输入框聚焦时触发
   */
  onFocus?: CommonEventFunction<InputForceEvent>
  /**
   * @description 当绑定值变化时触发的事件
   */
  onChange?: (event: { detail: number | string }) => void
  /**
   * @description 输入框失焦时触发
   */
  onBlur?: CommonEventFunction<InputForceEvent>
  /**
   * @description 点击不可用的按钮时触发
   */
  onOverlimit?: () => void
  /**
   * @description 点击增加按钮时触发
   */
  onPlus?: () => void
  /**
   * @description 点击减少按钮时触发
   */
  onMinus?: () => void
  /**
   * @description 自定义渲染新增按钮
   */
  renderMinus?: ReactNode
  /**
   * @description 自定义渲染减少按钮
   */
  renderPlus?: ReactNode
}
// Partial
declare const Stepper: FunctionComponent<StepperProps>

export { Stepper }
