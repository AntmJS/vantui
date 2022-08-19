/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  forwardRef,
  useImperativeHandle,
  ForwardedRef,
} from 'react'
import { nextTick } from '@tarojs/taro'
import { IPickerInstance, PickerChangeEvents } from '../../types/picker'
import VanPicker from '../picker/index'
import {
  DatetimePickerProps,
  IDatetimePickerInstance,
} from '../../types/datetime-picker'
import * as utils from '../wxs/utils'
import {
  defaultFormatter,
  getMonthEndDay,
  getTrueValue,
  times,
  padZero,
  range,
  isValidDate,
  currentYear,
} from './wxs'

export function DatetimePicker(
  props: DatetimePickerProps,
  ref: ForwardedRef<IDatetimePickerInstance>,
) {
  const {
    value = null,
    filter,
    type = 'datetime',
    showToolbar = true,
    formatter = defaultFormatter,
    minDate = new Date(currentYear - 10, 0, 1).getTime(),
    maxDate = new Date(currentYear + 10, 11, 31).getTime(),
    minHour = 0,
    maxHour = 23,
    minMinute = 0,
    maxMinute = 59,
    title,
    itemHeight,
    visibleItemCount,
    confirmButtonText,
    cancelButtonText,
    onInput,
    onChange,
    onCancel,
    onConfirm,
    ...others
  } = props

  const PickRef = useRef<IPickerInstance & any>({})
  const [innerValue, setInnerValue] = useState<any>(Date.now())
  const [columns, setColumns] = useState<(string | number)[]>([])
  const minHour_ = minHour
  const maxHour_ = maxHour
  const minMinute_ = minMinute
  const maxMinute_ = maxMinute

  const getPicker = useCallback(function () {
    if (PickRef.current) {
      const { setColumnValues } = PickRef.current
      PickRef.current.setColumnValues = (...args: any) =>
        // @ts-ignore
        setColumnValues.apply(PickRef.current, [args[1], args[2], false])
    }
    return PickRef.current
  }, [])

  const getBoundary = useCallback(
    function (type, innerValue) {
      const value = new Date(innerValue)
      const yearDate = `${type}Date` === 'maxDate' ? maxDate : minDate
      const boundary = new Date(yearDate)
      const year = boundary.getFullYear()
      let month = 1
      let date = 1
      let hour = 0
      let minute = 0
      if (type === 'max') {
        month = 12
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1)
        hour = 23
        minute = 59
      }
      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate()
          if (value.getDate() === date) {
            hour = boundary.getHours()
            if (value.getHours() === hour) {
              minute = boundary.getMinutes()
            }
          }
        }
      }

      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute,
      }
    },
    [maxDate, minDate],
  )

  const getRanges = useCallback(
    function (nowValue?: any): any {
      const res = [
        {
          type: 'hour',
          range: [minHour_, maxHour_],
        },
        {
          type: 'minute',
          range: [minMinute_, maxMinute_],
        },
      ]
      if (type === 'time') {
        return res
      }
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute } = getBoundary(
        'max',
        nowValue || innerValue,
      )
      const { minYear, minDate, minMonth, minHour, minMinute } = getBoundary(
        'min',
        nowValue || innerValue,
      )
      const result = [
        {
          type: 'year',
          range: [minYear, maxYear],
        },
        {
          type: 'month',
          range: [minMonth, maxMonth],
        },
        {
          type: 'day',
          range: [minDate, maxDate],
        },
        {
          type: 'hour',
          range: [minHour, maxHour],
        },
        {
          type: 'minute',
          range: [minMinute, maxMinute],
        },
      ]
      if (type === 'date') result.splice(3, 2)
      if (type === 'year-month') result.splice(2, 3)

      return result
    },
    [getBoundary, innerValue, maxHour_, maxMinute_, minHour_, minMinute_, type],
  )

  const getOriginColumns = useCallback(
    function (nowValue?: any) {
      const results = getRanges(nowValue).map(({ type, range }: any) => {
        let values = times(range[1] - range[0] + 1, (index: number) => {
          const value = range[0] + index
          return type === 'year' ? `${value}` : padZero(value)
        })
        if (filter) {
          values = filter(type, values)
        }

        return { type, values }
      })
      return results
    },
    [filter, getRanges],
  )

  const updateColumns = useCallback(
    function (nowValue?: any) {
      const results = getOriginColumns(nowValue).map((column: any) => ({
        values: column.values.map((value: any) =>
          formatter(column.type, value),
        ),
      }))
      return setColumns(results)
    },
    [formatter, getOriginColumns],
  )

  const updateColumnValue = useCallback(
    function (value: string): Promise<string> {
      let values: Array<any> = []
      const picker = getPicker()
      if (type === 'time') {
        const pair: any = value.split(':')
        values = [formatter('hour', pair[0]), formatter('minute', pair[1])]
      } else {
        const date = new Date(value)
        values = [
          formatter('year', `${date.getFullYear()}`),
          formatter('month', padZero(date.getMonth() + 1)),
        ]
        if (type === 'date') {
          values.push(formatter('day', padZero(date.getDate())))
        }
        if (type === 'datetime') {
          values.push(
            formatter('day', padZero(date.getDate())),
            formatter('hour', padZero(date.getHours())),
            formatter('minute', padZero(date.getMinutes())),
          )
        }
      }
      updateColumns(value)

      nextTick(() => {
        setInnerValue(value)
      })

      return new Promise((resolve) => {
        setTimeout(() => {
          nextTick(() => {
            picker.setValues(values)
            resolve(`${value}`)
          })
        }, 6)
      })
    },
    [formatter, getPicker, type, updateColumns],
  )

  const correctValue = useCallback(
    function (value: any) {
      // validate value
      const isDateType = type !== 'time'
      if (isDateType && !isValidDate(value)) {
        value = minDate
      } else if (!isDateType && !value) {
        value = `${padZero(minHour)}:00`
      }
      // time type
      if (!isDateType) {
        let [hour, minute] = value.split(':')
        hour = padZero(range(hour, minHour, maxHour))
        minute = padZero(range(minute, minMinute, maxMinute))
        return `${hour}:${minute}`
      }
      // date type
      value = Math.max(value, minDate as number)
      value = Math.min(value, maxDate as number)
      return value
    },
    [maxDate, maxHour, maxMinute, minDate, minHour, minMinute, type],
  )

  // useLayoutEffect(
  //   function () {
  //     const val = correctValue(value)
  //     updateColumnValue(val)
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [correctValue],
  // )

  useLayoutEffect(
    function () {
      const val = correctValue(value)
      const isEqual = val === innerValue
      if (!isEqual) {
        updateColumnValue(val).then(() => {
          if (onInput) {
            onInput({
              detail: val,
              currentTarget: {
                dataset: {
                  type: type,
                },
              },
            } as any)
          }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [type, minDate, maxDate, minHour, maxHour, minMinute, maxMinute],
  )

  const onChange_ = function (e: PickerChangeEvents) {
    const valueArr: any = e.detail.value
    let value: any
    const picker = getPicker()
    if (type === 'datetime') {
      value = new Date(
        `${valueArr[0]}-${valueArr[1]}-${valueArr[2]} ${valueArr[3]}:${valueArr[4]}`,
      ).getTime()
    } else if (type === 'date') {
      value = new Date(`${valueArr[0]}-${valueArr[1]}-${valueArr[2]}`).getTime()
    } else if (type === 'time') {
      value = new Date(`${valueArr[0]}:${valueArr[1]}`).getTime()
    } else if (type === 'year-month') {
      value = new Date(`${valueArr[0]}-${valueArr[1]}`).getTime()
    }

    const originColumns = getOriginColumns(value)

    if (type === 'time') {
      const indexes: number[] = picker.getIndexes()
      value = `${+originColumns[0].values[
        indexes[0] as number
      ]}:${+originColumns[1].values[indexes[1] as number]}`
    } else {
      const indexes = picker.getIndexes()
      const values = indexes.map(
        (value: number, index: number) => originColumns[index].values[value],
      )
      const year = getTrueValue(values[0])
      const month = getTrueValue(values[1])
      const maxDate = getMonthEndDay(year, month)
      let date = getTrueValue(values[2])
      if (type === 'year-month') {
        date = 1
      }
      date = date > maxDate ? maxDate : date
      let hour = 0
      let minute = 0
      if (type === 'datetime') {
        hour = getTrueValue(values[3])
        minute = getTrueValue(values[4])
      }
      value = new Date(year, month - 1, date, hour, minute)
    }
    value = correctValue(value)

    updateColumnValue(value).then(() => {
      if (onInput)
        onInput({
          detail: value,
          currentTarget: {
            dataset: {
              type: type,
            },
          },
        } as any)
      if (onChange) {
        const e = {
          detail: {
            datetimePicker: {
              columns,
              setColumns,
              innerValue,
              updateColumnValue,
            },
          },
        }
        onChange(e)
      }
    })
  }

  useImperativeHandle(ref, () => {
    return {
      pickerInstance: PickRef.current,
      columns,
      setColumns,
      innerValue,
      updateColumnValue,
    }
  })

  return (
    <VanPicker
      ref={PickRef}
      className={`van-datetime-picker column-class ${others.className || ''}`}
      style={utils.style([others.style])}
      title={title}
      columns={columns}
      itemHeight={itemHeight}
      showToolbar={showToolbar}
      visibleItemCount={visibleItemCount}
      confirmButtonText={confirmButtonText}
      cancelButtonText={cancelButtonText}
      onChange={onChange_}
      onConfirm={function (event) {
        if (onConfirm)
          onConfirm({
            detail: {
              ...event.detail,
              value: innerValue,
            },
          } as any)
      }}
      onCancel={onCancel}
    ></VanPicker>
  )
}

export default forwardRef(DatetimePicker)
