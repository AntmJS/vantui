import React from 'react'
import { Field as VantuiInput } from '@antmjs/vantui'
import { default as VantuiRadio } from './Radio'
import { default as VantuiCheckbox } from './Checkbox'
import { default as VantuiDatetimePickerBox } from './DatetimePickerBox'

import { filterWidgetProps } from '../utils'

import './index.less'

const widgetHoc = (Widget: any) => (props: any) => {
  const { setFieldRef, ...widgetProps } = filterWidgetProps(props)
  return <Widget {...props} {...widgetProps} />
}

export const Input = widgetHoc(VantuiInput)
export const Radio = widgetHoc(VantuiRadio)
export const Checkboxes = widgetHoc(VantuiCheckbox)
export const DatetimePickerBox = widgetHoc(VantuiDatetimePickerBox)
