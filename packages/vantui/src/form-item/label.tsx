import React from 'react'
import { View, Text } from '@tarojs/components'

const prefixCls = 'vant-form'
type Iprops = {
  label?: React.ReactNode
  required?: boolean
  requiredClassName?: string
  requiredIcon?: React.ReactNode
  className?: string
}

export default function Label(props: Iprops) {
  const {
    label,
    required,
    requiredClassName,
    requiredIcon,
    className = '',
  } = props
  return (
    <View className={`${prefixCls}-label ${className}`}>
      <View className={`${prefixCls}-required-box`}>
        {required ? (
          <>
            {requiredIcon || (
              <Text className={requiredClassName} style={{ color: 'red' }}>
                *
              </Text>
            )}
          </>
        ) : null}
      </View>
      <View>{label}</View>
    </View>
  )
}
