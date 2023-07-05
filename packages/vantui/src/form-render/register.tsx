import type { IRegisterFormParams } from '../../types/form-render'
import { Input } from '@tarojs/components'
import { Switch } from '../switch'
import { Radio } from '../radio'
import { RadioGroup } from '../radio-group'
import { Checkbox } from '../checkbox'
import { CheckboxGroup } from '../checkbox-group'
import { Slider } from '../slider'
import { Rate } from '../rate'
import { Stepper } from '../stepper'

export const formComponents: Record<string, IRegisterFormParams> = {}

const defaultCompItems: IRegisterFormParams[] = [
  {
    type: 'input',
    component: Input,
    trigger: 'onInput',
    valueFormat: (e) => e.detail.value,
    transformProps: (props, formItemProps) => {
      return {
        type: 'text',
        placeholder: `请输入${formItemProps['label']}`,
        ...props,
      }
    },
  },
  {
    type: 'inputNumber',
    component: Input,
    trigger: 'onInput',
    valueFormat: (e) => e.detail.value,
    transformProps: (props, formItemProps) => {
      return {
        type: 'number',
        placeholder: `请输入${formItemProps['label']}`,
        ...props,
      }
    },
  },
  {
    type: 'inputPrice',
    trigger: 'onInput',
    valueFormat: (e) => e.detail.value,
    component: Input,
    transformProps: (props, formItemProps) => {
      return {
        type: 'number',
        placeholder: `请输入${formItemProps['label']}`,
        ...props,
      }
    },
    rules: [
      {
        rule: (val, call) => {
          const rtNumber = String(val).split('.')[1]

          if (val < 0) {
            return call('金额必须大于0')
          } else if (rtNumber && rtNumber.length > 2) {
            return call('小数点位数不能大于2位')
          } else {
            return call('')
          }
        },
      },
    ],
  },
  {
    type: 'switch',
    component: Switch,
    valueKey: 'checked',
  },
  {
    type: 'radio',
    component: RadioGroup,
    valueKey: 'checked',
    transformProps: (props, formItemProps) => {
      return {
        children: formItemProps['options'].map((item, index) => (
          <Radio
            key={`RadioGroup_${formItemProps['key']}_${index}`}
            name={item.value}
          >
            {item.name}
          </Radio>
        )),
        ...props,
      }
    },
  },
  {
    type: 'checkbox',
    component: CheckboxGroup,
    transformProps: (props, formItemProps) => {
      return {
        direction: 'horizontal',
        shape: 'square',
        children: formItemProps['options'].map((item, index) => (
          // @ts-ignore
          <Checkbox
            key={`RadioGroup_${formItemProps['key']}_${index}`}
            name={item.value}
          >
            {item.name}
          </Checkbox>
        )),
        ...props,
      }
    },
  },
  {
    type: 'slider',
    component: Slider,
    transformProps: (props) => {
      return {
        style: {
          width: '200px',
          marginTop: '10px',
        },
        ...props,
      }
    },
  },
  {
    type: 'rate',
    component: Rate,
  },
  {
    type: 'stepper',
    component: Stepper,
  },
]

defaultCompItems.forEach((item) => {
  resiterComponent(item)
})

export function resiterComponent(params: IRegisterFormParams) {
  const { type } = params
  if (formComponents[type]) {
    console.warn(`FormRender: Overwrite existing component ${type}`)
  }
  formComponents[type] = params
}

export function showComponents() {
  return formComponents
}
