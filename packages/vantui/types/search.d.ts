import { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

export interface SearchProps extends ViewProps {
  /**
   * @description 搜索框的内容
   */
  value?: string | number
  /**
   * @description 搜索框内默认的内容
   */
  defaultValue?: string | number
  /**
   * @description 搜索框左侧文本
   */
  label?: string
  /**
   * @description
   */
  focus?: boolean
  /**
   * @description  	是否将输入内容标红
   */
  error?: boolean
  /**
   * @description 是否禁用输入框
   * @default false
   */
  disabled?: boolean
  /**
   * @description 是否将输入框设为只读
   * @default false
   */
  readonly?: boolean
  /**
   * @description 输入框内容对齐方式，可选值为 center right
   * @default left
   */
  inputAlign?: string
  /**
   * @description 是否展示搜索框右侧按钮
   * @default false
   */
  showAction?: boolean
  /**
   * @description 输入框左侧图标名称或图片链接，可选值见 Icon 组件
   * @default search
   */
  leftIcon?: string
  /**
   * @description 输入框右侧图标名称或图片链接，可选值见 Icon 组件
   */
  rightIcon?: string
  /**
   * @description 占位提示文字
   */
  placeholder?: string
  /**
   * @description 占位提示文字的样式
   */
  placeholderStyle?: string
  /**
   * @description 右侧按钮的文字
   * @default 取消
   */
  actionText?: string
  /**
   * @description 搜索框背景色
   * @default #FFFFFF
   */
  background?: string
  /**
   * @description 输入的最大字符数
   */
  maxlength?: number
  /**
   * @description 搜索框形状，可选值为 round
   * @default square
   */
  shape?: string
  /**
   * @description 	是否启用清除控件
   * @default true
   */
  clearable?: boolean
  /**
   * @description
   */
  clearTrigger?: string
  /**
   * @description
   */
  clearIcon?: string
  /**
   * @description 自定义搜索框左侧文本
   */
  renderLabel?: ReactNode
  /**
   * @description 自定义搜索框左侧图标
   */
  renderLeftIcon?: ReactNode
  /**
   * @description 自定义搜索框右侧图标
   */
  renderRightIcon?: ReactNode
  /**
   * @description 自定义右侧按钮
   */
  renderAction?: ReactNode
  /**
   * @description
   */
  onChange?: (e: ITouchEvent) => void
  /**
   * @description
   */
  onSearch?: (e: ITouchEvent) => void
  /**
   * @description 	输入框获得焦点时触发
   */
  onFocus?: (e: ITouchEvent) => void
  /**
   * @description 	输入框失去焦点时触发
   */
  onBlur?: (e: ITouchEvent) => void
  /**
   * @description 点击清除按钮后触发
   */
  onClear?: () => void
  /**
   * @description 点击取消按钮时触发
   */
  onCancel?: () => void
  /**
   * @description
   */
  onClickInput?: () => void
}

declare const Search: FunctionComponent<SearchProps>

export { Search }
