import React from 'react'
import { Checkbox, CheckboxGroup } from '@antmjs/vantui'
import { filterWidgetProps } from '../../utils'

export default (props: any) => {
  const { options, ...rest } = filterWidgetProps(props)
  return (
    <CheckboxGroup {...rest} direction="horizontal">
      {options.map((item: any) => {
        return (
          <Checkbox
            shape="square"
            name={item.value}
            checkedColor="#07c160"
            key={item.value}
          >
            {item.label}
          </Checkbox>
        )
      })}
    </CheckboxGroup>
  )
}
