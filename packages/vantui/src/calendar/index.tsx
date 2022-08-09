import { View, ScrollView, ITouchEvent } from '@tarojs/components'
import {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { getCurrentPages, createIntersectionObserver } from '@tarojs/taro'
import * as utils from '../wxs/utils'
import Toast from '../toast/toast'
import { requestAnimationFrame } from '../common/utils'
import VanToast from '../toast/index'
import VanPopup from '../popup/index'
import VanButton from '../button/index'
import { CalendarProps, ICalendarInstance } from '../../types/calendar'
import {
  ROW_HEIGHT,
  getPrevDay,
  getNextDay,
  getToday,
  compareDay,
  copyDates,
  calcDateNum,
  formatMonthTitle,
  compareMonth,
  getMonths,
  getDayByOffset,
} from './utils'
import * as computed from './wxs'
import Month from './components/month/index'
import Header from './components/header/index'

const initialMinDate = getToday().getTime()
let init = 0
const initialMaxDate = (() => {
  const now = getToday()
  return new Date(
    now.getFullYear(),
    now.getMonth() + 6,
    now.getDate(),
  ).getTime()
})()

function Index(
  props: CalendarProps,
  ref: React.ForwardedRef<ICalendarInstance>,
) {
  const {
    title = '日期选择',
    color,
    show,
    formatter,
    confirmText = '确定',
    rangePrompt,
    defaultDate,
    allowSameDay,
    type = 'single',
    confirmDisabledText = '确定',
    minDate = initialMinDate,
    maxDate = initialMaxDate,
    position = 'bottom',
    rowHeight = ROW_HEIGHT,
    round = true,
    poppable = true,
    showMark = true,
    showTitle = true,
    showConfirm = true,
    showSubtitle = true,
    safeAreaInsetBottom = true,
    closeOnClickOverlay = true,
    showRangePrompt = true,
    maxRange,
    onClose,
    onOpen,
    onClosed,
    onOpened,
    onConfirm,
    onSelect,
    firstDayOfWeek = 0,
    overRange,
    onUnselect,
    onClickSubtitle,
    renderTitle,
    renderFooter,
    className,
    style,
    ...others
  } = props

  const [subtitle, setSubtitle] = useState('')
  const [currentDate, setCurrentDate] = useState<any>()
  const [scrollIntoView, setScrollIntoView] = useState('')
  const contentObserver = useRef<any>()
  const [compIndex, setComindex] = useState(0)

  useEffect(function () {
    setComindex(init++)
  }, [])

  const limitDateRange = useCallback(
    function (date, minDateD: any = null, maxDateD: any = null) {
      minDateD = minDateD || minDate
      maxDateD = maxDateD || maxDate
      if (compareDay(date, minDateD) === -1) {
        return minDateD
      }
      if (compareDay(date, maxDateD) === 1) {
        return maxDateD
      }
      return date
    },
    [maxDate, minDate],
  )

  const getInitialDate = useCallback(
    function (defaultDate: any = null) {
      const now = getToday().getTime()
      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = []
        }
        const [startDay, endDay] = defaultDate || []
        const start = limitDateRange(
          startDay || now,
          minDate,
          getPrevDay(new Date(maxDate)).getTime(),
        )
        const end = limitDateRange(
          endDay || now,
          getNextDay(new Date(minDate)).getTime(),
        )
        return [start, end]
      }
      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map((date) => limitDateRange(date))
        }
        return [limitDateRange(now)]
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now
      }
      return limitDateRange(defaultDate)
    },
    [limitDateRange, maxDate, minDate, type],
  )

  const scrollIntoViewFn = useCallback(
    function () {
      requestAnimationFrame(() => {
        if (!currentDate) return
        const targetDate = type === 'single' ? currentDate : currentDate[0]
        const displayed = show || !poppable
        if (!targetDate || !displayed) {
          return
        }
        const months = getMonths(minDate, maxDate)
        months.some((month) => {
          if (compareMonth(month, targetDate) === 0) {
            const id = `month${formatMonthTitle(month)
              .replace('年', '_')
              .replace('月', '-')}`
            setScrollIntoView(id)
            if (process.env.TARO_ENV === 'h5') {
              document.getElementById(id)?.scrollIntoView()
            }
            return true
          }
          return false
        })
      })
    },
    [currentDate, maxDate, minDate, poppable, show, type],
  )

  const reset = useCallback(
    function () {
      setCurrentDate(getInitialDate(defaultDate))
      scrollIntoViewFn()
    },
    [getInitialDate, scrollIntoViewFn, defaultDate],
  )

  const initRectH5 = useCallback(function () {
    if (contentObserver.current != null) {
      contentObserver.current.disconnect()
    }
    const contentObserver_ = new IntersectionObserver(
      function (res: any) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].intersectionRatio > 0.6) {
            const item = res[i].target.id
              .replace('month', '')
              .replace('_', '年')
              .replace('-', '月')
            setSubtitle(item)
          }
        }
      },
      {
        threshold: [0.6],
        // root: document.getElementsByClassName('van-calendar__body')[0],
      },
    )
    contentObserver.current = contentObserver_

    const targets = document.getElementsByClassName('month')
    if (targets.length) {
      for (let i = 0; i < targets.length; i++) {
        contentObserver.current.observe(targets[i] as Element)
      }
    }
  }, [])

  const initRect = useCallback(
    function () {
      if (process.env.TARO_ENV === 'h5') {
        return initRectH5()
      }
      if (contentObserver.current != null) {
        contentObserver.current.disconnect()
      }
      const pages: any = getCurrentPages()
      const curePage = pages[pages.length - 1]
      let _createIntersectionObserver = curePage.createIntersectionObserver

      if (process.env.TARO_ENV === 'alipay') {
        _createIntersectionObserver = createIntersectionObserver
      }

      const contentObserver_ = _createIntersectionObserver({
        thresholds: [0.5, 0.8, 1],
        observeAll: true,
        selectAll: true,
      })
      contentObserver.current = contentObserver_
      contentObserver.current.relativeTo(`.van-calendar__body${compIndex}`)
      contentObserver.current.observe('.month', (res: any) => {
        if (res.intersectionRatio) {
          const item = res.id
            .replace('month', '')
            .replace('_', '年')
            .replace('-', '月')
          setSubtitle(item)
        }
      })
    },
    [initRectH5, compIndex],
  )

  const emit = useCallback(
    function (date) {
      const getTime = (date: any) =>
        date instanceof Date ? date.getTime() : date
      setCurrentDate(Array.isArray(date) ? date.map(getTime) : getTime(date))
      const e = {
        detail: {
          value: copyDates(date),
        },
      } as ITouchEvent
      if (onSelect) onSelect(e)
    },
    [onSelect],
  )

  const checkRange = useCallback(
    function (date) {
      if (maxRange && calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          Toast({
            // duration: 0,
            message: rangePrompt || `选择天数不能超过 ${maxRange} 天`,
          })
        }
        if (overRange) overRange()
        return false
      }
      return true
    },
    [maxRange, overRange, rangePrompt, showRangePrompt],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function select(date: any, complete?: boolean) {
    if (Array.isArray(date)) {
      date = date
        .filter((d: any) => !!d)
        .map((item: any) => {
          return typeof item === 'number' ? new Date(item) : item
        })
    }
    if (complete && type === 'range') {
      const valid = checkRange(date)
      if (!valid) {
        // auto selected to max range if showConfirm
        if (showConfirm) {
          emit([date[0], getDayByOffset(date[0], (maxRange || 0) - 1)])
        } else {
          emit(date)
        }
        return
      }
    }
    emit(date)
    if (complete && !showConfirm) {
      onConfirm_(null, date)
    }
  }

  const unselect = useCallback(
    function (dateArray) {
      const date = dateArray[0]
      if (date) {
        const e = {
          detail: {
            value: copyDates(date) as Date,
          },
        } as ITouchEvent
        if (onUnselect) onUnselect(e)
      }
    },
    [onUnselect],
  )

  const onClickDay = useCallback(
    function (event: any) {
      const { date } = event
      const currentDate_: any = JSON.parse(JSON.stringify(currentDate))
      if (type === 'range') {
        const [startDay, endDay] = currentDate_
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay)
          if (compareToStart === 1) {
            select([startDay, date], true)
          } else if (compareToStart === -1) {
            select([date, null])
          } else if (allowSameDay) {
            select([date, date])
          }
        } else {
          select([date, null])
        }
      } else if (type === 'multiple') {
        let selectedIndex
        const selected = currentDate_.some((dateItem: any, index: number) => {
          const equal = compareDay(dateItem, date) === 0
          if (equal) {
            selectedIndex = index
          }
          return equal
        })
        if (selected) {
          const cancelDate = currentDate_.splice(selectedIndex, 1)
          setCurrentDate(currentDate_)
          unselect(cancelDate)
        } else {
          select([...currentDate_, date])
        }
      } else {
        select(date, true)
      }
    },
    [allowSameDay, currentDate, select, type, unselect],
  )

  const onConfirm_ = useCallback(
    function (_, date?: any) {
      if (type === 'range' && !checkRange(currentDate)) {
        return
      }
      const e = {
        detail: {
          value: date || copyDates(currentDate),
        },
      } as ITouchEvent
      if (onConfirm) onConfirm(e)
    },
    [checkRange, currentDate, onConfirm, type],
  )

  useLayoutEffect(
    function () {
      if (defaultDate) {
        setCurrentDate(getInitialDate(defaultDate || new Date().getTime()))
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  useEffect(
    function () {
      if (show || !poppable) {
        setTimeout(() => {
          initRect()
          setTimeout(() => {
            scrollIntoViewFn()
          }, 66)
        }, 66)
      }
    },
    [initRect, poppable, scrollIntoViewFn, show],
  )

  useEffect(
    function () {
      reset()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type],
  )

  useImperativeHandle(ref, function () {
    return {
      reset,
    }
  })

  return (
    <>
      {poppable ? (
        <VanPopup
          className={'van-calendar__popup--' + position}
          show={show}
          round={round}
          position={position}
          closeable={showTitle || showSubtitle}
          closeOnClickOverlay={closeOnClickOverlay}
          onEnter={onOpen}
          onClose={onClose}
          onAfterEnter={onOpened}
          onAfterLeave={onClosed}
        >
          <View
            className={`van-calendar ${className || ''}`}
            style={utils.style([style])}
            {...others}
          >
            <Header
              title={title}
              showTitle={showTitle}
              subtitle={subtitle}
              showSubtitle={showSubtitle}
              firstDayOfWeek={firstDayOfWeek}
              onClickSubtitle={() => {
                if (onClickSubtitle) onClickSubtitle
              }}
              renderTitle={renderTitle}
            ></Header>
            <ScrollView
              className={`van-calendar__body  van-calendar__body${compIndex}`}
              scrollY
              scrollIntoView={scrollIntoView}
            >
              {computed.getMonths(minDate, maxDate).map((item: any, index) => {
                return (
                  <Month
                    key={`van-calendar-month___${index}`}
                    id={`month${formatMonthTitle(item)
                      .replace('年', '_')
                      .replace('月', '-')}`}
                    className="month"
                    date={item}
                    type={type}
                    color={color}
                    minDate={minDate}
                    maxDate={maxDate}
                    showMark={showMark}
                    formatter={formatter}
                    rowHeight={rowHeight}
                    currentDate={currentDate}
                    showSubtitle={showSubtitle}
                    allowSameDay={allowSameDay}
                    showMonthTitle={index !== 0 || !showSubtitle}
                    firstDayOfWeek={firstDayOfWeek}
                    onClick={onClickDay}
                  ></Month>
                )
              })}
            </ScrollView>
            <View
              className={utils.bem('calendar__footer', {
                safeAreaInsetBottom,
              })}
            >
              {renderFooter}
            </View>
            <View
              className={utils.bem('calendar__footer', {
                safeAreaInsetBottom,
              })}
            >
              {showConfirm && (
                <VanButton
                  block
                  type="danger"
                  color={color}
                  className="van-calendar__confirm"
                  disabled={computed.getButtonDisabled(type, currentDate)}
                  // nativeType="text"
                  onClick={onConfirm_}
                >
                  {computed.getButtonDisabled(type, currentDate)
                    ? confirmDisabledText
                    : confirmText}
                </VanButton>
              )}
            </View>
          </View>
        </VanPopup>
      ) : (
        <View
          className={`van-calendar ${className || ''}`}
          style={utils.style([style])}
          {...others}
        >
          <Header
            title={title}
            showTitle={showTitle}
            subtitle={subtitle}
            showSubtitle={showSubtitle}
            firstDayOfWeek={firstDayOfWeek}
            onClickSubtitle={onClickSubtitle}
            renderTitle={<>{renderTitle}</>}
          ></Header>
          <ScrollView
            className={`van-calendar__body van-calendar__body${compIndex}`}
            scrollY
            scrollIntoView={scrollIntoView}
          >
            {computed
              .getMonths(minDate, maxDate)
              .map((item: any, index: number) => {
                return (
                  <Month
                    key={`van-calendar-month___${index}`}
                    id={`month${formatMonthTitle(item)
                      .replace('年', '_')
                      .replace('月', '-')}`}
                    className="month"
                    date={item}
                    type={type}
                    color={color}
                    minDate={minDate}
                    maxDate={maxDate}
                    showMark={showMark}
                    formatter={formatter}
                    rowHeight={rowHeight}
                    currentDate={currentDate}
                    showSubtitle={showSubtitle}
                    allowSameDay={allowSameDay}
                    showMonthTitle={index !== 0 || !showSubtitle}
                    firstDayOfWeek={firstDayOfWeek}
                    onClick={onClickDay}
                  ></Month>
                )
              })}
          </ScrollView>
          <View
            className={utils.bem('calendar__footer', {
              safeAreaInsetBottom,
            })}
          >
            {renderFooter}
          </View>
          <View
            className={utils.bem('calendar__footer', {
              safeAreaInsetBottom,
            })}
          >
            {showConfirm && (
              <VanButton
                block
                type="danger"
                color={color}
                className="van-calendar__confirm"
                disabled={computed.getButtonDisabled(type, currentDate)}
                // nativeType="text"
                onClick={onConfirm_}
              >
                {computed.getButtonDisabled(type, currentDate)
                  ? confirmDisabledText
                  : confirmText}
              </VanButton>
            )}
          </View>
        </View>
      )}
      <VanToast id="van-toast"></VanToast>
    </>
  )
}

const Calendar = forwardRef(Index)

export { Calendar }
export default Calendar
