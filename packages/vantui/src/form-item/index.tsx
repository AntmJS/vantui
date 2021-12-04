import {
  useState,
  useContext,
  useEffect,
  cloneElement,
  isValidElement,
  useMemo,
} from 'react'
import { FormItemProps, IFormInstanceAPI } from '../../types/form'
import FormContext from '../form/core/formContext'
import Label from './label'
import Message from './message'

const prefixCls = 'react-form-design-formItem'

export default function FormItem(props: FormItemProps) {
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
    valueFilter,
  } = props
  const formInstance = useContext<IFormInstanceAPI>(FormContext)
  const { registerValidateFields, dispatch, unRegisterValidate } = formInstance
  const [, forceUpdate] = useState({})
  const onStoreChange = useMemo(() => {
    const onStoreChange = {
      changeValue() {
        forceUpdate({})
      },
    }
    return onStoreChange
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInstance])

  useEffect(() => {
    /* 注册表单 */
    name && registerValidateFields(name, onStoreChange, { ...rules, required })
    return function () {
      name && unRegisterValidate(name)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onStoreChange])

  const getControlled = (child: any) => {
    const mergeChildrenProps = { ...child.props }
    if (!name) return mergeChildrenProps
    const handleChange = async (e: any) => {
      let value = null
      if (valueFilter) {
        value = await valueFilter(e, name, formInstance)
      } else {
        value = Object.prototype.toString.call(e).includes('Event')
          ? e.detail.value
          : e
      }
      dispatch({ type: 'setFieldsValue' }, name, value)
    }
    mergeChildrenProps[trigger] = handleChange
    if (required || rules) {
      mergeChildrenProps[validateTrigger] = async (e: any) => {
        if (validateTrigger === trigger) {
          await handleChange(e)
        }
        dispatch({ type: 'validateFieldValue' }, name)
      }
    }
    mergeChildrenProps[valueKey] =
      dispatch({ type: 'getFieldValue' }, name) || ''
    return mergeChildrenProps
  }

  const renderChildren = isValidElement(children)
    ? cloneElement(children, getControlled(children))
    : children

  return (
    <div className={`${prefixCls}-wrapper`}>
      <div className={`${prefixCls} ${prefixCls}-${layout} ${className}`}>
        <Label
          label={label}
          required={required}
          className={labelClassName}
          requiredClassName={requiredClassName}
          requiredIcon={requiredIcon}
        />
        <div className={`${prefixCls}-controll ${controllClassName}`}>
          <div className={`${prefixCls}-controll-item`}>
            {renderChildren}
            {renderRight}
          </div>
          <Message
            name={label}
            feedback={feedback}
            {...dispatch({ type: 'getFieldModel' }, name)}
          />
        </div>
      </div>
    </div>
  )
}
