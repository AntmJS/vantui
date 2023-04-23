import { View } from '@tarojs/components'
import React, { useState, useCallback, useEffect } from 'react'

type ICalenarHeaderProps = {
  title?: string | React.ReactNode
  subtitle?: string | React.ReactNode
  showTitle?: boolean
  showSubtitle?: boolean
  firstDayOfWeek?: number
  renderTitle?: React.ReactNode
  onClickSubtitle?: (a: any) => void
  subtitleStyle?: React.CSSProperties
}

export default function Index(props: ICalenarHeaderProps) {
  const {
    title = '日期选择',
    showTitle,
    subtitle,
    showSubtitle,
    firstDayOfWeek,
    renderTitle,
    onClickSubtitle,
    subtitleStyle,
  } = props

  const [weekdays, setWeekDays] = useState<Array<any>>([])

  const initWeekDay = useCallback(
    function () {
      const defaultWeeks = ['日', '一', '二', '三', '四', '五', '六']
      const firstDayOfWeek_ = firstDayOfWeek || 0
      setWeekDays([
        ...defaultWeeks.slice(firstDayOfWeek_, 7),
        ...defaultWeeks.slice(0, firstDayOfWeek_),
      ])
    },
    [firstDayOfWeek],
  )

  useEffect(
    function () {
      initWeekDay()
    },
    [initWeekDay],
  )

  return (
    <View className="van-calendar__header">
      {showTitle && (
        <View>
          {renderTitle && (
            <View className="van-calendar__header-title">{renderTitle}</View>
          )}
          <View className="van-calendar__header-title">{title}</View>
        </View>
      )}
      {showSubtitle && (
        <View
          className="van-calendar__header-subtitle"
          onClick={onClickSubtitle}
          style={subtitleStyle}
        >
          {subtitle}
        </View>
      )}
      <View className="van-calendar__weekdays">
        {weekdays.map((item: any, index: number) => {
          return (
            <View
              key={`van-calendar__weekdays${index}`}
              className="van-calendar__weekday"
            >
              {item}
            </View>
          )
        })}
      </View>
    </View>
  )
}
