import {
  useState,
  useContext,
  useEffect,
  cloneElement,
  isValidElement,
  useMemo,
} from 'react'
import { View } from '@tarojs/components'
import { FormItemProps, IFormInstanceAPI } from '../../types/form'
import FormContext from '../form/core/formContext'
import Label from './label'
import Message from './message'

const prefixCls = 'vant-form-formItem'

export function FormItem(props: FormItemProps) {
  const {
    name,
    layout = 'horizontal',
    children,
    label,
    required = false,
    rules = {},
    trigger = 'onChange',
    validateTrigger = 'onChange',
    labelClassName = '',
    requiredClassName = '',
    controllClassName = '',
    className = '',
    requiredIcon = '',
    feedback = 'failed',
    valueKey = 'value',
    renderRight,
    mutiLevel,
    valueFormat,
  } = props
  const formInstance = useContext<IFormInstanceAPI>(FormContext)
  const { registerValidateFields, dispatch, unRegisterValidate } = formInstance
  const [, forceUpdate_] = useState({})
  const _name = Array.isArray(name) ? name.join('.') : name

  const onStoreChange = useMemo(() => {
    const onStoreChange = {
      changeValue() {
        forceUpdate_({})
      },
    }
    return onStoreChange
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInstance])

  useEffect(() => {
    /* 注册表单 */
    _name &&
      registerValidateFields(_name, onStoreChange, {
        rules,
        required,
        label,
        mutiLevel,
      })

    return function () {
      _name && unRegisterValidate(_name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onStoreChange])

  const getControlled = (child: any) => {
    const props = { ...child.props }
    if (!_name) return props
    const trigger_ = props[trigger]

    const handleChange = async (e: any) => {
      let value = null

      if (valueFormat) {
        value = await valueFormat(e, _name, formInstance)
      } else {
        value = e.detail
      }
      dispatch({ type: 'setFieldsValue' }, _name, value)
      if (trigger_) trigger_(e)
    }
    props[trigger] = handleChange
    if (required || rules) {
      props[validateTrigger] = async (e: any) => {
        if (validateTrigger === trigger) {
          await handleChange(e)
        }

        dispatch({ type: 'validateFieldValue' }, _name)
      }
    }
    props[valueKey] = dispatch({ type: 'getFieldValue' }, _name)

    return props
  }

  const renderChildren = isValidElement(children)
    ? cloneElement(children, getControlled(children))
    : children

  return (
    <View className={`${prefixCls}-wrapper`}>
      <View className={`${prefixCls} ${prefixCls}-${layout} ${className}`}>
        <Label
          label={label}
          required={required}
          className={labelClassName}
          requiredClassName={requiredClassName}
          requiredIcon={requiredIcon}
        />
        <View className={`${prefixCls}-controll ${controllClassName}`}>
          <View className={`${prefixCls}-controll-item`}>
            {renderChildren}
            {renderRight}
          </View>
          <Message
            name={label}
            feedback={feedback}
            {...dispatch({ type: 'getFieldModel' }, _name)}
          />
        </View>
      </View>
    </View>
  )
}

export default FormItem
