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

export interface IMakeFormCompProps<Type, Props, T> extends FormItemProps {
  type: Type
  props?: Props
  fields: keyof T | Array<string | number>
  label: string
  options?: {
    value: string
    name: string
  }[]
}

export type IFormRenderItemProps<T> =
  | IMakeFormCompProps<'input' | 'inputNumber' | 'inputPrice', InputProps, T>
  | IMakeFormCompProps<'swtch', SwitchProps, T>
  | IMakeFormCompProps<'radio', RadioGroupProps, T>
  | IMakeFormCompProps<'checkbox', CheckboxGroupProps, T>
  | IMakeFormCompProps<'swtch', SwitchProps, T>
  | IMakeFormCompProps<'slider', SliderProps, T>
  | IMakeFormCompProps<'rate', RateProps, T>
  | IMakeFormCompProps<'stepper', StepperProps, T>

export type IMakeFormRenderProps<T, CP> = {
  queryInit?: boolean
  config: CP[]
  defaultValues?: T
  form: IFormInstanceAPI
} & FormProps

export type IFormRenderProps<T> = IMakeFormRenderProps<
  T,
  IFormRenderItemProps<T>
>

export interface IRegisterFormParams
  extends Omit<FormItemProps, 'name' | 'children' | 'label'> {
  type: string
  component: any
  transformProps?: (
    props: Record<string, any>,
    itemProps: Record<string, any>,
  ) => Record<string, any>
}

export type IRegisterForm = (params: IRegisterFormParams) => void

declare interface FormRender {
  <T>(props: IFormRenderProps<T>): JSX.Element
  resiterComponent: IRegisterForm
  showComponents: () => Record<string, IRegisterFormParams>
  useForm: IuseForm
}

export { FormRender }
