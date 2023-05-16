import React, { createContext, useContext, useRef, useState } from 'react'
import { FormItem } from '@antmjs/vantui'
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

export default (props: any) => {
  const { store, schema, path, children, dependValues, rootPath, renderCore } =
    props
  if (schema?.hidden) {
    return null
  }

  // 字段ref
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

  // 给字段添加点击功能
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

  // 默认值
  const defaultValue = schema.default ?? schema.defaultValue

  // 必填项
  const required = schema.required || false

  // 配置FormItem
  const itemProps: any = {
    label,
    valuePropName,
    hidden,
    extra,
    help,
    noStyle,
    dependencies,
    name: path[0],
    initialValue: defaultValue,
    rules: readOnly ? [] : ruleList,
    className: classnames('fr-field', { 'fr-field-visibility': !visible }),
    required,
    // 用户自定义的itemProps
    ...schema.itemProps,
  }

  if (needOnClick && fieldRef.current && !readOnly) {
    itemProps.onClick = () => {
      // 调用实例open
      fieldRef.current.open()
    }
  }

  // 自动修复样式
  if (widgetName === 'Radio' || widgetName === 'Checkboxes') {
    itemProps['className'] = itemProps?.className
      ? itemProps?.className + ' label-bottom'
      : 'label-bottom'
  }

  return (
    <FormItem {...itemProps}>
      <FieldWrapper
        Field={Widget}
        fieldProps={fieldProps}
        defaultValue={defaultValue}
      />
    </FormItem>
  )
}
