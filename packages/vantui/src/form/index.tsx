import React, { useImperativeHandle, forwardRef, memo } from 'react'
import { Form as TaroForm } from '@tarojs/components'
import { FormProps, IFormInstanceAPI } from '../../types/form'
import FormContext from './core/formContext'
import useForm from './core/useForm'

function Index(
  props: FormProps,
  ref: React.ForwardedRef<IFormInstanceAPI>,
): JSX.Element {
  const {
    form,
    initialValues = {},
    children,
    className = '',
    onFinish,
    onFinishFailed,
    onChange,
  } = props
  const formInstance = useForm(form, initialValues)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setCallback, dispatch, ...formInstanceAPI } = formInstance
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setCallback({
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    onChange: onChange,
  })

  useImperativeHandle(ref, () => formInstanceAPI as IFormInstanceAPI, [
    formInstanceAPI,
  ])

  const RenderChildren = (
    <FormContext.Provider value={formInstance as any}>
      {children}
    </FormContext.Provider>
  )

  return (
    <TaroForm
      className={`${className} vant-form`}
      onReset={(e) => {
        e.preventDefault()
        e.stopPropagation()
        formInstance.resetFields()
      }}
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        formInstance.submit()
      }}
    >
      {RenderChildren}
    </TaroForm>
  )
}

const Form = memo(forwardRef(Index))
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Form.useForm = useForm

export { Form, useForm }
export default Form
