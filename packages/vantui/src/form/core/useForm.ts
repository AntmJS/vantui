import { useRef, useState, useEffect } from 'react'
import { IFormInstanceAPI } from '../../../types/form'
import FormStore from './formstore'

export default function useForm(
  form?: IFormInstanceAPI,
  defaultFormValue = {},
): IFormInstanceAPI {
  const formRef: { current: IFormInstanceAPI | null } = useRef(null)
  const [, forceUpdate] = useState({})

  useEffect(
    function () {
      if (formRef.current) {
        formRef.current.setFields(defaultFormValue)
      }
    },
    [defaultFormValue],
  )

  if (!formRef.current) {
    if (form) {
      formRef.current = form
    } else {
      const formStoreCurrent = new FormStore(forceUpdate, defaultFormValue)
      formRef.current = formStoreCurrent.getForm()
    }
  }

  return formRef.current as IFormInstanceAPI
}
