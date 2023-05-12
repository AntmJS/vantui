import React, { useEffect } from 'react'
import { DatetimePicker, Popup } from '@antmjs/vantui'
import { View } from '@tarojs/components'

function DatetimePickerBox_(props) {
  const dateTimeRef = React.useRef(null)

  const [state, changeState] = React.useState({
    show: false,
    innerValue: null,
  })

  const setState = React.useCallback(
    (key, value) => {
      changeState({
        ...state,
        [key]: value,
      })
    },
    [state],
  )

  const toggleShow = React.useCallback((show) => {
    setState('show', show)
  }, [])

  const onConfirm = React.useCallback((e) => {
    if (props.onConfirm) {
      props.onConfirm(e)
      props.onChange(e.detail.value)
    }
    toggleShow(false)
  }, [])

  const onCancel = React.useCallback(() => {
    if (props.onCancel) props.onCancel()
    toggleShow(false)
  }, [])

  const preFixZero = React.useCallback((n) => {
    return n > 9 ? `${n}` : `0${n}`
  }, [])

  const formatDate = React.useCallback((date) => {
    const d = new Date(date)
    return `${d.getFullYear()}-${preFixZero(
      Number(d.getMonth() + 1),
    )}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
  }, [])

  const onChange = React.useCallback((e) => {
    // setState(innerValue, e.detail.datetimePicker.innerValue)
    console.log(e)
  }, [])

  useEffect(() => {
    if (dateTimeRef.current) {
      //columns
      dateTimeRef.current.setColumns(dateTimeRef.current.columns)
    }
  }, [dateTimeRef, state])

  const { value, ...rest } = props

  return (
    <View ref={(ref) => props.setFieldRef(ref)} {...rest}>
      <View onClick={() => toggleShow(true)} style={{ minWidth: '200px' }}>
        {value ? formatDate(value) : '请选择日期'}
      </View>
      <Popup
        position="bottom"
        show={state.show}
        onClose={() => toggleShow(false)}
      >
        <DatetimePicker
          ref={dateTimeRef}
          type="datetime"
          value={state.innerValue || value}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Popup>
    </View>
  )
}

export default DatetimePickerBox_
