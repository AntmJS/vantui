import React, { useImperativeHandle, forwardRef } from 'react'
import { Form } from '@tarojs/components'
import { FormProps, IFormInstanceAPI } from '../../types/form'
import FormContext from './core/formContext'
import useForm from './core/useForm'

function Form_(
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
  } = props
  const formInstance = useForm(form, initialValues)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { setCallback, dispatch, ...formInstanceAPI } = formInstance
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  setCallback({
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
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
    <Form
      className={className}
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
    </Form>
  )
}

export default forwardRef(Form_)
