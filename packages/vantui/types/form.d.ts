import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

/**
 * @title FormProps
 */
export interface FormProps extends StandardProps {
  /**
   * @description 传入form实例（const formStore1 = useRef()）
   */
  form?: IFormInstanceAPI
  /**
   * @description 初始化表单仓库值
   */
  initialValues?: Record<string, any>
  /**
   * @description 第一级必须是FormItem组件
   */
  children: ReactNode
  /**
   * @description 类名
   */
  className?: string
  /**
   * @description 表单提交触发，配合button.formType = submit
   */
  onFinish?: () => void

  /**
   * @description 表单提交失败触发
   */
  onFinishFailed?: () => void
}
/**
 * @title FormItemProps
 */
export interface FormItemProps extends StandardProps {
  /**
   * @description 对应表单字段名
   */
  name: string
  /**
   * @description 第一级操作表单组件
   */
  children: ReactNode
  /**
   * @description 表单label
   */
  label: ReactNode
  /**
   * @description 垂直 ｜ 水平
   * @default horizontal
   */
  layout?: 'vertical' | 'horizontal'
  /**
   * @description 是否必填
   * @default false
   */
  required?: boolean
  /**
   * @description 验证表单触发方法名
   * @default onChange
   */
  validateTrigger?: string
  /**
   * @description label的外层className
   */
  labelClassName?: string
  /**
   * @description required的外层className
   */
  requiredClassName?: string
  /**
   * @description 表单组件的外层className
   */
  controllClassName?: string
  /**
   * @description formItem最外层className
   */
  className?: string
  /**
   * @description 自定义必填标识
   */
  requiredIcon?: ReactNode
  /**
   * @description 验证后反馈的信息，可设置为校验成功、失败、都展示或隐藏
   * @default failed
   */
  feedback?: 'success' | 'failed' | 'all' | 'hidden'
  /**
   * @description 自定义渲染右边内容
   */
  renderRight?: ReactNode
  /**
   * @description 表单交互触发方法
   * @default onChange
   */
  trigger?: string
  /**
   * @description 表单控制展示的具体值的字段名
   * @default value
   */
  valueKey?: string
  /**
   * @description 根据表单交互回掉函数（时间）参数的重新定义
   * @default value
   */
  valueFormat?: (
    value: any,
    name: string,
    IFormInstance: IFormInstanceAPI,
  ) => any
  /**
   * @description 正则校验值，或者自定义校验后call回掉函数返回错误信息
   */
  rules?: {
    rule: ((value: any, call: (errMess: string) => void) => void) | RegExp
    message?: string
  }
}
/**
 * @title IFormInstance
 * @description 通过ref获取到的form的实例
 */
export type IFormInstanceAPI = {
  /**
   * @description 注册校验规则
   */
  registerValidateFields: (
    name: string,
    control: Record<string, any>,
    model: Record<string, any>,
  ) => void
  /**
   * @description 注册校验规则
   */
  unRegisterValidate: (name: string) => void
  /**
   * @description 重置表单
   */
  resetFields: () => void
  /**
   * @description 设置多个表单值
   */
  setFields: (object: Record<string, any>) => void
  /**
   * @description 设置单个表单值
   */
  setFieldsValue: (name: string, modelValue: any) => any
  /**
   * @description 获取所有表单值
   */
  getFieldsValue: () => void
  /**
   * @description 获取单个表单值
   */
  getFieldValue: (name: string) => any
  /**
   * @description 校验表单，并获取错误信息和所有表单值
   */
  validateFields: (
    callback: (errorMess: Array<string>, values: Record<string, any>) => void,
  ) => void
  /**
   * @description 校验表单，并获取错误信息和所有表单值，触发form.onFinish和onFinishFailed
   */
  submit: (
    callback?: (
      errs: Array<string> | null,
      values: Record<string, string>,
    ) => void,
  ) => void
} & {
  dispatch: (params: { type: string }, name?: string, ...arg: any[]) => any
  setCallback: Record<
    string,
    undefined | ((values?: Record<string, any>) => void)
  >
}

declare const Form: ComponentClass<FormProps>

declare const FormItem: ComponentClass<FormItemProps>

export { Form, FormItem }
