import React, { createContext, useContext, useRef, useState } from 'react'
import { DatetimePicker, FormItem, Popup, Form, Icon } from '@antmjs/vantui'
import { useStore } from 'zustand'
import classnames from 'classnames'
import { View } from '@tarojs/components'

import { warn, _get } from '../../utils'
import { ConfigContext } from '../../models/context'
import { getWidgetName } from '../../models/mapping'
import getRuleList from '../../models/validates'
import FieldWrapper from './field'
import {
  getParamValue,
  getFieldProps,
  getPath,
  getLabel,
  getExtraView,
} from './module'

const UpperContext: any = createContext(() => {})
const valuePropNameMap = {
  checkbox: 'checked',
  switch: 'checked',
}

function DatetimePickerBox_(props) {
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
    if (props.onConfirm) props.onConfirm(e)
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
    setState(innerValue, e.detail.datetimePicker.innerValue)
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

export default (props: any) => {
  const { store, schema, path, children, dependValues, rootPath, renderCore } =
    props

  if (schema?.hidden) {
    return null
  }

  const fieldRef: any = useRef()
  const formCtx: any = useStore(store, (state: any) => state.context)
  const upperCtx: any = useContext(UpperContext)
  const configCtx = useContext(ConfigContext)
  const [needOnClick, setNeedOnClick] = useState(false)

  const { form, widgets, methods, globalProps } = configCtx

  const {
    hidden,
    properties,
    dependencies,
    inlineMode: _inlineMode,
    remove,
    removeText,
    visible = true,
    ...otherSchema
  } = schema

  let widgetName = getWidgetName(schema)
  const getValueFromKey = getParamValue(formCtx, upperCtx, schema)
  let Widget = widgets[widgetName]
  if (!Widget) {
    Widget = widgets['Html']
    warn(
      `Can not find widget component named ${widgetName}, please check the schema and widgets`,
      schema,
    )
  }

  const fieldProps = getFieldProps(widgetName, schema, {
    widgets,
    methods,
    form,
    dependValues,
    globalProps,
    path: getPath(path),
    rootPath,
  })

  const displayType = getValueFromKey('displayType')
  const labelWidth = getValueFromKey('labelWidth')

  if (widgetName === 'Collapse') {
    return <Widget {...fieldProps} renderCore={renderCore} />
  }

  if (children) {
    fieldProps.children = <View>{children}</View>

    return (
      <UpperContext.Provider
        value={{
          column: schema.column,
          labelCol: schema.labelCol,
          fieldCol: schema.fieldCol,
          displayType: schema.displayType,
          labelWidth: schema.labelWidth,
          noStyle: schema.noStyle,
          exist: true,
        }}
      >
        <Widget
          labelWidth={labelWidth}
          displayType={schema.displayType}
          {...fieldProps}
          {...otherSchema}
        />
      </UpperContext.Provider>
    )
  }

  // Render field components
  let label = getLabel(schema, displayType, widgets)
  let noStyle = getValueFromKey('noStyle')

  const extra = getExtraView('extra', schema, widgets)
  const help = getExtraView('help', schema, widgets)
  const ruleList = getRuleList(schema, form, methods)
  const readOnly = getValueFromKey('readOnly')
  const valuePropName =
    schema.valuePropName || valuePropNameMap[widgetName] || undefined

  if (readOnly) {
    fieldProps.readOnly = readOnly
  }

  fieldProps.setFieldRef = (ref: any) => {
    if (ref) {
      setNeedOnClick(true)
      fieldRef.current = ref
    }
  }

  if (!label) {
    noStyle = true
  }

  if (readOnly) {
    Widget = widgets[schema.readOnlyWidget] || widgets['Html']
  }

  const defaultValue = schema.default ?? schema.defaultValue

  const itemProps: any = {
    label,
    valuePropName,
    hidden,
    extra,
    help,
    noStyle,
    dependencies,
    name: path,
    initialValue: defaultValue,
    rules: readOnly ? [] : ruleList,
    className: classnames('fr-field', { 'fr-field-visibility': !visible }),
  }

  if (needOnClick && fieldRef.current && !readOnly) {
    itemProps.onClick = () => {
      fieldRef.current.open()
    }
  }
  const { name, ...rest } = itemProps

  // 设置 FormItem 的props
  const itemConfig = schema?.itemProps || {}

  // 自动修复样式
  if (widgetName === 'Radio' || widgetName === 'Checkboxes') {
    itemConfig['className'] = itemConfig?.className
      ? itemConfig?.className + ' label-bottom'
      : 'label-bottom'
  }

  // if (widgetName === 'DatetimePickerBox') {
  //   return (
  //     <FormItem label="日期选择" name="dateTime">
  //       <DatetimePickerBox_ />
  //     </FormItem>
  //   )
  // }

  return (
    <FormItem name={name[0]} {...rest} {...itemConfig}>
      <FieldWrapper
        Field={Widget}
        fieldProps={fieldProps}
        defaultValue={defaultValue}
      />
    </FormItem>
  )
}
