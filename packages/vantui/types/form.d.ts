import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

/**
 * @title FormProps
 */
export interface FormProps extends ViewProps {
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
  onFinish?: (errs: string[] | null, values: Record<string, any>) => void

  /**
   * @description 表单提交失败触发，会拦截onFinish
   */
  onFinishFailed?: (errs: string[] | null) => void
  /**
   * @description 字段值更新时触发的回调事件
   */
  onChange?: (
    changedValues: Record<string, any>,
    allValues: Record<string, any>,
  ) => void
}
/**
 * @title FormItemProps
 */
export interface FormItemProps extends ViewProps {
  /**
   * @description 组件值默认数据类型为基本类型(string、number...), 对象数组形式的数据需要设置为true
   */
  mutiLevel?: boolean
  /**
   * @description 对应表单字段名
   */
  name: string | Array<string | number>
  /**
   * @description 第一级操作表单组件
   */
  children: ReactNode
  /**
   * @description 表单label
   */
  label: ReactNode
  /**
   * @description 表单label字符串, 当label不为字符串的时候，传入labelName
   */
  labelName?: string
  /**
   * @description 垂直 ｜ 水平
   * @default horizontal
   */
  layout?: 'vertical' | 'horizontal'
  /**
   * @description 是否必填
   * @default `false`
   */
  required?: boolean
  /**
   * @description 验证表单触发方法名
   * @default `onChange`
   */
  validateTrigger?: string
  /**
   * @description 下边框
   * @default   `false`
   */
  borderBottom?: boolean
  /**
   * @description label的外层className
   */
  labelClassName?: string
  /**
   * @description 提示信息的className,某些错误情况可以自定义样式
   */
  messageClassName?: string
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
   * @default `failed`
   */
  feedback?: 'success' | 'failed' | 'all' | 'hidden'
  /**
   * @description 自定义渲染右边内容
   */
  renderRight?: ReactNode
  /**
   * @description 表单交互触发方法
   * @default `onChange`
   */
  trigger?: string
  /**
   * @description 表单控制展示的具体值的字段名
   * @default `value`
   */
  valueKey?: string
  /**
   * @description 根据表单交互回掉函数（时间）参数的重新定义
   * @default `value`
   */
  valueFormat?: (
    value: any,
    name: string | Array<string | number>,
    IFormInstance: IFormInstanceAPI,
  ) => any
  /**
   * @description 正则校验值，或者自定义校验后call回掉函数返回错误信息，支持数组或单项设置
   */
  rules?:
    | {
        rule: ((value: any, call: (errMess: string) => void) => void) | RegExp
        message?: string
      }[]
    | {
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
    name: string | Array<string | number>,
    control: Record<string, any>,
    model: Record<string, any>,
  ) => void
  /**
   * @description 注册必填项为空时的回调函数
   */
  registerRequiredMessageCallback: (callback: (label: string) => string) => void
  /**
   * @description 注册校验规则
   */
  unRegisterValidate: (name: string | Array<string | number>) => void
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
  setFieldsValue: (
    name: string | Array<string | number>,
    modelValue: any,
  ) => any
  /**
   * @description 获取所有表单值
   */
  getFieldsValue: () => Record<string, any>
  /**
   * @description 设置表单错误信息
   */
  setErrorMessage: (
    name: string | Array<string | number>,
    message: string,
  ) => void
  /**
   * @description 获取单个表单值
   */
  getFieldValue: (name: string | Array<string | number>) => any
  /**
   * @description 单个表单验证
   */
  validateFieldValue: (name: string) => 'resolve' | 'reject'
  /**
   * @description 校验表单，并获取错误信息和所有表单值
   */
  validateFields: (
    callback: (
      errorMess: Array<string> | null,
      values: Record<string, any>,
    ) => void,
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
  dispatch: (
    params: { type: string },
    name?: string | Array<string | number>,
    ...arg: any[]
  ) => any
  setCallback: Record<
    string,
    undefined | ((values?: Record<string, any>) => void)
  >
}

export type IuseForm = (
  form?: IFormInstanceAPI,
  initialValues?: Record<string, any>,
) => IFormInstanceAPI

declare const Form: FunctionComponent<FormProps> & { useForm: IuseForm }

declare const FormItem: FunctionComponent<FormItemProps>

export { Form, FormItem }
