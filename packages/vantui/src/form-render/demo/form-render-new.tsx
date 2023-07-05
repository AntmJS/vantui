/* eslint-disable import/no-named-as-default-member */
import react from 'react'
import { View } from '@tarojs/components'
import {
  IMakeFormCompProps,
  IFormRenderItemProps,
  IMakeFormRenderProps,
  FormRender,
  Popup,
  DatetimePicker,
  Icon,
} from '@antmjs/vantui'

export type IFormBoxItemPropsNew<T> =
  | IFormRenderItemProps<T>
  | IMakeFormCompProps<'dateTimePicker', any, T>

export type IFormRenderPropsNew<T> = IMakeFormRenderProps<
  T,
  IFormBoxItemPropsNew<T>
>

FormRender.resiterComponent({
  type: 'dateTimePicker',
  component: DatetimePickerBox,
  valueKey: 'value',
  trigger: 'onConfirm',
  renderRight: <Icon name="arrow" />,
  valueFormat: (e) => e.detail.value,
})

function FormRenderNew<T>(props: IFormRenderPropsNew<T>) {
  return <FormRender {...(props as any)} />
}

FormRenderNew['resiterComponent'] = FormRender.resiterComponent
FormRenderNew['showComponents'] = FormRender.showComponents

export default FormRenderNew

function DatetimePickerBox(props: any) {
  const [state, changeState] = react.useState({
    show: false,
    innerValue: null,
  })

  const setState = react.useCallback(
    (key, value) => {
      changeState({
        ...state,
        [key]: value,
      })
    },
    [state],
  )

  const toggleShow = react.useCallback((show) => {
    setState('show', show)
  }, [])

  const onConfirm = react.useCallback((e) => {
    if (props.onConfirm) props.onConfirm(e)
    toggleShow(false)
  }, [])

  const onCancel = react.useCallback(() => {
    if (props.onCancel) props.onCancel()
    toggleShow(false)
  }, [])

  const preFixZero = react.useCallback((n) => {
    return n > 9 ? `${n}` : `0${n}`
  }, [])

  const formatDate = react.useCallback((date) => {
    const d = new Date(date)
    return `${d.getFullYear()}-${preFixZero(
      Number(d.getMonth() + 1),
    )}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
  }, [])

  const { value } = props

  return (
    <>
      <View onClick={() => toggleShow(true)} style={{ minWidth: '200px' }}>
        {value ? formatDate(value) : '请选择日期'}
      </View>
      <Popup
        position="bottom"
        show={state.show}
        onClose={() => toggleShow(false)}
      >
        <DatetimePicker
          type="datetime"
          value={state.innerValue || value}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Popup>
    </>
  )
}
