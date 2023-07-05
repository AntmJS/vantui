import type {
  FormProps,
  FormItemProps,
  IFormInstanceAPI,
  IuseForm,
} from './form'
import type { InputProps } from '@tarojs/components'
import type { SwitchProps } from './switch'
import type { RadioGroupProps } from './radio'
import type { CheckboxGroupProps } from './checkbox'
import type { SliderProps } from './slider'
import { RateProps } from './rate'
import { StepperProps } from './stepper'

export type IFormRenderItemProps<T> =
  | IMakeFormCompProps<'input' | 'inputNumber' | 'inputPrice', InputProps, T>
  | IMakeFormCompProps<'swtch', SwitchProps, T>
  | IMakeFormCompProps<'radio', RadioGroupProps, T>
  | IMakeFormCompProps<'checkbox', CheckboxGroupProps, T>
  | IMakeFormCompProps<'slider', SliderProps, T>
  | IMakeFormCompProps<'rate', RateProps, T>
  | IMakeFormCompProps<'stepper', StepperProps, T>

/**
 * @title 组件的props
 */
export type IMakeFormRenderProps<T, CP> = {
  /**
   * @description 注册组件
   */
  queryInit?: boolean
  config: CP[]
  defaultValues?: T
  /**
   * @description form实例
   */
  form: IFormInstanceAPI
} & Omit<FormProps, 'children'>

export type IFormRenderProps<T> = IMakeFormRenderProps<
  T,
  IFormRenderItemProps<T>
>

/**
 * @title config的每一项
 */
export interface IMakeFormCompProps<Type, Props, T>
  extends Omit<FormItemProps, 'name' | 'children' | 'label'> {
  /**
   * @description 对应组件的key
   */
  type: Type
  /**
   * @description 传入组件的props
   */
  props?: Props
  /**
   * @description 对应泛型对象的key表单字段
   */
  fields: keyof T | Array<string | number>
  label: string
  /**
   * @description option选项，给checkebox、radio等组件使用
   */
  options?: {
    value: string
    name: string
  }[]
}

export interface IRegisterFormParams
  extends Omit<FormItemProps, 'name' | 'children' | 'label'> {
  /**
   * @description 注册组件的key
   */
  type: string
  /**
   * @description 注册组件
   */
  component: any
  /**
   * @description 转换组件的props， props为组件props, itemProps为formItem的props
   */
  transformProps?: (
    props: Record<string, any>,
    itemProps: Record<string, any>,
  ) => Record<string, any>
}

export type IRegisterForm = (params: IRegisterFormParams) => void

declare interface IFormRender {
  <T>(props: IFormRenderProps<T>): JSX.Element
  resiterComponent: IRegisterForm
  showComponents: () => Record<string, IRegisterFormParams>
  useForm: IuseForm
}

declare const FormRender: IFormRender

export { FormRender }
