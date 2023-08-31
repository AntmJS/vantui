import React, { FunctionComponent, ReactNode } from 'react'
import { ViewProps, ITouchEvent } from '@tarojs/components'

/**
 * @title CalendarProps
 */
export interface CalendarProps extends ViewProps {
  /**
   * @description 日历标题
   */
  title?: ReactNode
  /**
   * @description 主题色，对底部按钮和选中日期生效
   * @default #ee0a24
   */
  color?: string
  /**
   * @description 是否显示日历弹窗
   * @default false
   */
  show?: boolean
  /**
   * @description 	日期格式化函数
   */
  formatter?: (day: Day) => Day
  /**
   * @description 确认按钮的文字
   */
  confirmText?: ReactNode
  /**
   * @description 	范围选择超过最多可选天数时的提示文案
   * @default 选择天数不能超过xx天
   */
  rangePrompt?: string
  /**
   * @description 范围选择超过最多可选天数时，是否展示提示文案
   * @default true
   */
  showRangePrompt?: ReactNode
  /**
   * @description 默认选中的日期，type为multiple或range时为数组
   * @default 今天
   */
  defaultDate?: number | number[]
  /**
   * @description 是否允许日期范围的起止时间为同一天
   * @default false
   */
  allowSameDay?: boolean
  /**
   * @description 确认按钮处于禁用状态时的文字
   * @default 确定
   */
  confirmDisabledText?: ReactNode
  /**
   * @description 类型
   */
  type?: 'single' | 'multiple' | 'range'
  /**
   * @description 可选择的最小日期
   * @default 当前日期
   */
  minDate?: number | Date
  /**
   * @description 可选择的最大日期
   * @default 当前日期六个月后
   */
  maxDate?: number | Date
  /**
   * @description 弹窗弹出的位置
   * @default bottom
   */
  position?: 'left' | 'right' | 'bottom' | 'top'
  /**
   * @description 日期行高
   * @default 64
   */
  rowHeight?: number | string
  /**
   * @description 弹窗是否圆角
   * @default true
   */
  round?: boolean
  /**
   * @description 是否以弹层的形式展示日历
   * @default true
   */
  poppable?: boolean
  /**
   * @description 是否显示月份背景水印
   * @default true
   */
  showMark?: boolean
  /**
   * @description 是否展示日历标题
   * @default true
   */
  showTitle?: boolean
  /**
   * @description 是否展示确认按钮
   * @default true
   */
  showConfirm?: boolean
  /**
   * @description 是否展示日历副标题（年月）
   * @default true
   */
  showSubtitle?: boolean
  /**
   * @description 是否开启底部安全区适配
   * @default true
   */
  safeAreaInsetBottom?: boolean
  /**
   * @description 是否在点击遮罩层后关闭
   * @default true
   */
  closeOnClickOverlay?: boolean
  /**
   * @description 日期区间最多可选天数，默认无限制
   */
  maxRange?: number
  /**
   * @description 设置周起始日
   * @default 0
   */
  firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6
  /**
   * @description 弹出层zIndex
   */
  zIndex?: number
  onOpen?: () => void
  onClose?: () => void
  onOpened?: () => void
  onClosed?: () => void
  onConfirm?: (e: CalendarEvents) => void
  overRange?: () => void
  onUnselect?: (e: CalendarEventsSingle) => void
  onSelect?: (e: CalendarEvents) => void
  onClickSubtitle?: (a?: any) => void
  /**
   * @description 自定义标题
   */
  renderTitle?: React.ReactNode
  /**
   * @description 自定义底部区域内容
   */
  renderFooter?: React.ReactNode
  /**
   * @description 是否支持年月大跨度的快速切换
   * @default `true`
   */
  longspan?: boolean
}
/**
 * @title formatter回调参数Day
 */
export type Day = {
  date: Date
  type?: string
  text?: string | number
  bottomInfo?: string
  className?: string
  topInfo?: string | ReactNode
}
/**
 * @title ICalendarInstance
 * @description 使用ref获取到的组件实例
 */
export type ICalendarInstance = {
  reset: (date?: Date | Date[]) => void
  getSelectedDate: () => Date | Date[] | null
}
/**
 * @title CalendarEvents
 * @description onConfirm和onSelect的回调函数参数
 */
export interface CalendarEvents extends ITouchEvent {
  detail: {
    value: Date | Date[]
  }
}
/**
 * @title CalendarEvents
 * @description onUnselect的回调函数参数
 */
export interface CalendarEventsSingle extends ITouchEvent {
  detail: {
    value: Date
  }
}

declare const Calendar: FunctionComponent<CalendarProps>

export { Calendar }
