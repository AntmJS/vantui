import { View } from '@tarojs/components'
import React, {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import * as utils from '../../../wxs/utils'
import { getMonthEndDay, compareDay, getPrevDay, getNextDay } from '../../utils'
import * as computed from './wxs'

type ICalenarMonthProps = {
  date?: string
  type?: string
  color?: string
  minDate?: number | Date
  maxDate?: number | Date
  showMark?: boolean
  rowHeight?: number | string
  currentDate?: string
  firstDayOfWeek?: number
  allowSameDay?: boolean
  showSubtitle?: boolean
  showMonthTitle?: boolean
  onClick?: (a: any) => void
  formatter?: (a: any) => any
  id?: string
  className?: string
  ifRender?: boolean
}

function Index(props: ICalenarMonthProps, ref: React.ForwardedRef<any>) {
  const {
    date,
    rowHeight,
    showMonthTitle,
    showMark,
    color,
    type,
    firstDayOfWeek,
    currentDate,
    onClick,
    minDate,
    maxDate,
    allowSameDay,
    formatter,
    className,
    id,
  } = props

  const [visible, setVisible] = useState<boolean>(true)
  const [days, setDays_] = useState<Array<any>>([])

  const onClick_ = useCallback(
    function (event: any) {
      const { index } = event.currentTarget.dataset
      const item = days[index]
      if (item.type !== 'disabled') {
        if (onClick) onClick(item)
      }
    },
    [days, onClick],
  )

  const getMultipleDayType = useCallback(
    function (day) {
      if (!Array.isArray(currentDate)) {
        return ''
      }
      const isSelected = (date: any) =>
        currentDate.some((item) => compareDay(item, date) === 0)
      if (isSelected(day)) {
        const prevDay = getPrevDay(day)
        const nextDay = getNextDay(day)
        const prevSelected = isSelected(prevDay)
        const nextSelected = isSelected(nextDay)
        if (prevSelected && nextSelected) {
          return 'multiple-middle'
        }
        if (prevSelected) {
          return 'end'
        }
        return nextSelected ? 'start' : 'multiple-selected'
      }
      return ''
    },
    [currentDate],
  )

  const getRangeDayType = useCallback(
    function (day) {
      if (!Array.isArray(currentDate)) {
        return ''
      }
      const [startDay, endDay] = currentDate
      if (!startDay) {
        return ''
      }
      const compareToStart = compareDay(day, startDay)
      if (!endDay) {
        return compareToStart === 0 ? 'start' : ''
      }
      const compareToEnd = compareDay(day, endDay)
      if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
        return 'start-end'
      }
      if (compareToStart === 0) {
        return 'start'
      }
      if (compareToEnd === 0) {
        return 'end'
      }
      if (compareToStart > 0 && compareToEnd < 0) {
        return 'middle'
      }
      return ''
    },
    [allowSameDay, currentDate],
  )

  const getDayType = useCallback(
    function (day) {
      if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
        return 'disabled'
      }
      if (type === 'single') {
        return compareDay(day, currentDate) === 0 ? 'selected' : ''
      }
      if (type === 'multiple') {
        return getMultipleDayType(day)
      }
      /* istanbul ignore else */
      if (type === 'range') {
        return getRangeDayType(day)
      }
      return ''
    },
    [currentDate, getMultipleDayType, getRangeDayType, maxDate, minDate, type],
  )

  const getBottomInfo = useCallback(
    function (type_): any {
      if (type === 'range') {
        if (type_ === 'start') {
          return '开始'
        }
        if (type_ === 'end') {
          return '结束'
        }
        if (type_ === 'start-end') {
          return '开始/结束'
        }
      }
    },
    [type],
  )

  const setDays = useCallback(
    function () {
      const days: any[] = []
      const startDate = new Date(date || 0)
      const year = startDate.getFullYear()
      const month = startDate.getMonth()
      const totalDay = getMonthEndDay(
        startDate.getFullYear(),
        startDate.getMonth() + 1,
      )
      for (let day = 1; day <= totalDay; day++) {
        const date = new Date(year, month, day)
        const type = getDayType(date)
        let config = {
          date,
          type,
          text: day,
          bottomInfo: getBottomInfo(type),
        }
        if (formatter) {
          config = formatter(config)
        }
        days.push(config)
      }
      setDays_(days)
    },
    [date, formatter, getBottomInfo, getDayType],
  )

  useEffect(
    function () {
      setDays()
    },
    [setDays],
  )

  useImperativeHandle(ref, function () {
    return {
      setVisible,
      visible,
    }
  })

  if (!props.ifRender)
    return (
      <View
        style={{ minHeight: 428 }}
        id={id}
        className={`van-calendar__month ${className}`}
      ></View>
    )

  return (
    <View
      id={id}
      className={`van-calendar__month ${className}`}
      style={{
        ...computed.getMonthStyle(
          visible,
          date,
          rowHeight ? Number(rowHeight) : 0,
        ),
        minHeight: 428,
      }}
    >
      {showMonthTitle && (
        <View className="van-calendar__month-title">
          {computed.formatMonthTitle(date)}
        </View>
      )}
      {visible && days.length > 0 && (
        <View className="van-calendar__days">
          {showMark && (
            <View className="van-calendar__month-mark">
              {computed.getMark(date)}
            </View>
          )}
          {days.map((item: any, index: number) => {
            return (
              <View
                key={`van-calendar__month${index}`}
                style={computed.getDayStyle(
                  item.type,
                  index,
                  date,
                  rowHeight,
                  color,
                  firstDayOfWeek,
                )}
                className={
                  utils.bem('calendar__day', [item.type]) + ' ' + item.className
                }
                data-index={index}
                onClick={onClick_}
              >
                {item.type === 'selected' ||
                currentDate === item.date.getTime() ? (
                  <View
                    className="van-calendar__selected-day"
                    style={{
                      width: rowHeight,
                      height: rowHeight,
                      background: color,
                    }}
                  >
                    {item.topInfo && (
                      <View className="van-calendar__top-info">
                        {item.topInfo}
                      </View>
                    )}
                    {item.text}
                    {item.bottomInfo && (
                      <View className="van-calendar__bottom-info">
                        {item.bottomInfo}
                      </View>
                    )}
                  </View>
                ) : (
                  <View>
                    {item.topInfo && (
                      <View className="van-calendar__top-info">
                        {item.topInfo}
                      </View>
                    )}
                    {item.text}
                    {item.bottomInfo && (
                      <View className="van-calendar__bottom-info">
                        {item.bottomInfo}
                      </View>
                    )}
                  </View>
                )}
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}

export default forwardRef(Index)
