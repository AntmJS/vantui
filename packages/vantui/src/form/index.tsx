import React, { useImperativeHandle, forwardRef } from 'react'
import { FormProps, IFormInstanceAPI } from '../../types/form'
import FormContext from './core/formContext'
import useForm from './core/useForm'

function Form(
  props: FormProps,
  ref: React.ForwardedRef<IFormInstanceAPI>,
): JSX.Element {
  const {
    form,
    onFinish,
    onFinishFailed,
    initialValues = {},
    children,
    className = '',
  } = props
  const formInstance = useForm(form, initialValues)
  const { setCallback, ...providerFormInstance } = formInstance

  setCallback({
    onFinish,
    onFinishFailed,
  })

  useImperativeHandle(ref, () => providerFormInstance as IFormInstanceAPI, [
    providerFormInstance,
  ])

  const RenderChildren = (
    <FormContext.Provider value={formInstance as any}>
      {children}
    </FormContext.Provider>
  )

  return (
    <form
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
    </form>
  )
}

export default forwardRef(Form)
