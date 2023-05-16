import React from 'react'
import { Radio, RadioGroup } from '@antmjs/vantui'
import { filterWidgetProps } from '../../utils'

export default (props: any) => {
  const { options, ...rest } = filterWidgetProps(props)
  return (
    <RadioGroup {...rest} direction="horizontal">
      {options.map((item: any) => {
        return (
          <Radio name={item.value} key={item.value}>
            {item.label}
          </Radio>
        )
      })}
    </RadioGroup>
  )
}
