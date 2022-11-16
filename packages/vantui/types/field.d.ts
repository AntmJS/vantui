import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ITouchEvent, CommonEventFunction } from '@tarojs/components'
import { TextareaProps } from '@tarojs/components/types/Textarea'

export interface FieldProps extends ViewProps {
  /**
   * @description 当前输入的值
   */
  value?: string | number
  /**
   * @description 输入框为空的时候的占位符号
   */
  placeholder?: string
  /**
   * @description placeholder样式
   */
  placeholderStyle?: string
  /**
   * @description placeholder的样式名
   */
  placeholderClass?: string
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * @description 最大输入值
   */
  maxlength?: number
  /**
   * @description 输入框聚焦时底部与键盘的距离
   * @default 50
   */
  cursorSpacing?: number
  /**
   * @description 是否默认聚焦，拉起键盘
   * @default false
   */
  autoFocus?: boolean
  /**
   * @description 是否默认聚焦
   * @default false
   */
  focus?: boolean
  /**
   * @description 光标的位置
   * @default -1
   */
  cursor?: number
  /**
   * @description 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用
   * @default -1
   */
  selectionStart?: number
  /**
   * @description 光标结束位置，自动聚集时有效，需与 selection-start 搭配使用
   * @default -1
   */
  selectionEnd?: number
  /**
   * @description 键盘弹起时，是否自动上推页面
   * @default true
   */
  adjustPosition?: boolean
  /**
   * @description focus 时，点击页面的时候不收起键盘
   * @default false
   */
  holdKeyboard?: boolean
  /**
   * @description 展示的组件类型
   * @default text
   */
  type?: 'number' | 'text' | 'idcard' | 'digit' | 'textarea' | 'password'
  /**
   * @description 是否是密码类型
   */
  password?: boolean
  /**
   * @description 设置键盘右下角按钮的文字，仅在 type='text' 时生效
   * @default done
   */
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done'
  /**
   * @description 点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效
   * @default false
   */
  confirmHold?: boolean
  /**
   * @description 如果 type 为 textarea 且在一个 position fixed 的区域，需要显示指定属性 fixed 为 true
   * @default false
   */
  fixed?: boolean
  /**
   * @description 是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效
   * @default true
   */
  showConfirmBar?: boolean
  /**
   * @description 是否去掉 iOS 下的默认内边距，只对 textarea 有效
   * @default true
   */
  disableDefaultPadding?: boolean
  /**
   * @description 单元格大小，可选值为 large
   */
  size?: 'large'
  /**
   * @description 左侧图标
   */
  icon?: string
  /**
   * @description 输入框左侧占位元素
   */
  label?: ReactNode
  /**
   * @description 是否将输入内容标红
   */
  error?: boolean
  /**
   * @description 是否使内容垂直居中
   */
  center?: boolean
  /**
   * @description 是否有箭头
   */
  isLink?: boolean
  /**
   * @description 左侧图标
   */
  leftIcon?: string
  /**
   * @description 右侧图标
   */
  rightIcon?: string
  /**
   * @description 是否自适应内容高度，只对 textarea 有效，可传入对象, 单位为px
   */
  autosize?: boolean | Record<string, any>
  /**
   * @description 是否显示表单必填星号
   */
  required?: boolean
  /**
   * @description 左图标样式名
   */
  iconClass?: string
  /**
   * @description 是否开启点击反馈
   * @default false
   */
  clickable?: boolean
  /**
   * @description 输入框内容对齐方式，可选值为 center right
   * left
   */
  inputAlign?: string
  style?: string
  /**
   * @description 错误信息
   */
  errorMessage?: string
  /**
   * @description 箭头方向
   */
  arrowDirection?: 'left' | 'up' | 'down'
  /**
   * @description 是否显示字数统计，需要设置maxlength属性
   * @default false
   */
  showWordLimit?: boolean
  /**
   * @description 底部错误提示文案对齐方式，可选值为 center right
   */
  errorMessageAlign?: string
  /**
   * @description 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
   * @default false
   */
  alwaysEmbed?: boolean
  /**
   * @description 是否仅可读
   * @default false
   */
  readonly?: boolean
  /**
   * @description 是否仅可清楚
   * @default false
   */
  clearable?: boolean
  /**
   * @description 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示
   * @default focus
   */
  clearTrigger?: string
  /**
   * @description 边框
   * @default false
   */
  border?: boolean
  /**
   * @description 标题宽度
   * @default 6.2em
   */
  titleWidth?: string
  /**
   * @description 清除按钮图标
   */
  clearIcon?: string
  /**
   * @description 自定义渲染图标
   */
  renderLeftIcon?: ReactNode
  /**
   * @description 自定义渲染标题
   */
  renderTitle?: ReactNode
  /**
   * @description 自定义渲染输入组件
   */
  renderInput?: ReactNode
  /**
   * @description 自定义渲染右侧图标
   */
  renderRightIcon?: ReactNode
  /**
   * @description 自定义渲染右侧图标
   */
  renderIcon?: ReactNode
  /**
   * @description 自定义渲染按钮
   */
  renderButton?: ReactNode
  /**
   * @description 输入触发方法
   */
  onInput?: (e: ITouchEvent) => void
  /**
   * @description 输入触发方法
   */
  onChange?: (e: ITouchEvent) => void
  /**
   * @description 点击确认触发方法
   */
  onConfirm?: (e: ITouchEvent) => void
  /**
   * @description 点击尾部图标触发方法
   */
  onClickIcon?: () => void
  /**
   * @description 聚焦组件触发方法
   */
  onFocus?: (e: ITouchEvent) => void
  /**
   * @description 组件失去焦点触发方法
   */
  onBlur?: (e: ITouchEvent) => void
  /**
   * @description 点击清除触发方法
   */
  onClear?: () => void
  /**
   * @description 点击输入区域触发方法
   */
  onClickInput?: () => void
  /**
   * @description 输入框行数变化时调用，只对 textarea 有效
   */
  onLineChange?: CommonEventFunction<TextareaProps.onLineChangeEventDetail>
  /**
   * @description 键盘高度发生变化的时候触发此事件
   */
  onKeyboardHeightChange?: CommonEventFunction<TextareaProps.onKeyboardHeightChangeEventDetail>
}

declare const Field: FunctionComponent<FieldProps>

export { Field }
