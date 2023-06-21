/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from 'react'
import { Form } from '../form'
import { FormItem } from '../form-item'
import {
  IFormRenderProps,
  IFormRenderItemProps,
  IRegisterFormParams,
} from '../../types/form-render'
import { formComponents, resiterComponent, showComponents } from './register'
import { transformValueByType } from './utils'

const clsPrefix = 'van'

let initIndex = 0

function FormRender<T>(props: IFormRenderProps<T>) {
  const { config, defaultValues, form } = props
  const [componentIndex] = useState(initIndex++)

  const renderItem = useCallback(
    (item: IFormRenderItemProps<Record<string, any>>, index: any) => {
      const { type, fields, label, props, options, ...others } = item
      const componentInfo = formComponents[type] as IRegisterFormParams

      const { component, transformProps, ...formItemProps } = componentInfo
      const Component = component
      const propsNew = transformProps?.(props || {}, {
        label,
        options,
        ...others,
      })

      return (
        <FormItem
          key={`${index}_antm-FormRender_${componentIndex}`}
          {...Object.assign(formItemProps, others)}
          label={label}
          name={fields}
        >
          <Component {...propsNew} />
        </FormItem>
      )
    },
    [componentIndex],
  )

  const _defaultValues = useCallback(() => {
    return transformValueByType(defaultValues || {}, config, formComponents)
  }, [config, defaultValues])

  return (
    <Form
      initialValues={_defaultValues || {}}
      className={`${clsPrefix}-form-render`}
      form={form}
    >
      {config.map((it, index) => {
        return renderItem(it as any, index)
      })}
    </Form>
  )
}

FormRender['resiterComponent'] = resiterComponent
FormRender['showComponents'] = showComponents
FormRender['useForm'] = Form['useForm']

export default FormRender
