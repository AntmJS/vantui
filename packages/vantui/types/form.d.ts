import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface FormProps extends StandardProps {
  form?: IFormInstanceAPI
  onFinish?: () => void
  onFinishFailed?: () => void
  initialValues?: Record<string, any>
  children: ReactNode
  className?: string
}

export interface FormItemProps extends StandardProps {
  name: string
  children: ReactNode
  label: ReactNode
  layout?: 'vertical' | 'horizontal'
  required?: boolean
  trigger?: string
  validateTrigger?: string
  labelClassName?: string
  requiredClassName?: string
  controllClassName?: string
  className?: string
  requiredIcon?: ReactNode
  feedback?: 'success' | 'failed' | 'all' | 'hidden'
  renderRight?: ReactNode
  valueKey?: string
  valueFilter?: (
    value: any,
    name: string,
    IFormInstance: IFormInstanceAPI,
  ) => string | number | undefined
  rules?: {
    rule: ((values: any, call: (errMess: string) => void) => any) | RegExp
    message?: string
  }
}

export type IFormInstanceAPI = {
  setCallback: (params: Record<string, any>) => void
  dispatch: (params: { type: string }, name?: string, ...arg: any[]) => any
  registerValidateFields: (
    name: string,
    control: Record<string, any>,
    model: Record<string, any>,
  ) => void
  resetFields: () => void
  setFields: (object: Record<string, any>) => void
  setFieldsValue: (name: string, modelValue: any) => any
  getFieldsValue: () => void
  getFieldValue: (name: string) => void
  validateFields: (callback: (errorMess: Array<string>) => void) => void
  submit: (
    callback?: (
      errs: Array<string> | null,
      values: Record<string, string>,
    ) => void,
  ) => void
  unRegisterValidate: (name: string) => void
}

declare const Form: ComponentClass<FormProps>

declare const FormItem: ComponentClass<FormItemProps>

export { Form, FormItem }
