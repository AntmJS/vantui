import React from 'react'

const prefixCls = 'react-form-design'
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
    <div className={`${prefixCls}-label ${className}`}>
      <div className={`${prefixCls}-required-box`}>
        {required ? (
          <>
            {requiredIcon || (
              <span className={requiredClassName} style={{ color: 'red' }}>
                *
              </span>
            )}
          </>
        ) : null}
      </div>
      <span>{label}</span>
    </div>
  )
}
