import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BadgeProps } from '../../types/badge'

const classPrefix = `van-badge`

import { get } from '../default-props'

const d = get().Badge || {}

export function Badge(props: BadgeProps) {
  const {
    content = '',
    children,
    style,
    wrapperClassName = '',
    wrapperStyle,
  } = {
    ...d,
    ...props,
  }

  const isDot = content === undefined || content === null || content === ''

  const badgeClass = classNames({
    [classPrefix]: true,
    [`${classPrefix}-fixed`]: !!children,
    [`${classPrefix}-dot`]: isDot,
    [`${classPrefix}-bordered`]: props.bordered,
  })

  const element = (
    <View className={badgeClass} style={style}>
      {!isDot && <View className={`${classPrefix}-content`}>{content}</View>}
    </View>
  )

  return children ? (
    <View
      className={classNames(`${classPrefix}-wrapper`, wrapperClassName)}
      style={wrapperStyle}
    >
      {children}
      {element}
    </View>
  ) : (
    element
  )
}

export default Badge
