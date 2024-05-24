import { Children, useMemo } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { SpaceProps } from '../../types/space'

const classPrefix = `van-space`

export function Space(props: SpaceProps) {
  const {
    direction = 'horizontal',
    align,
    justify,
    wrap = true,
    block,
    className = '',
    children,
    style = {},
    gap,
    gapHorizontal,
    gapVertical,
    ...others
  } = props || {}

  const _style = useMemo(() => {
    let s: React.CSSProperties | any = {
      ...style,
    }
    if (gap) {
      s = {
        '--space-gap-horizontal': gap + 'px',
        '--space-gap-vertical': gap + 'px',
      }
    }

    if (gapHorizontal) s['--space-gap-horizontal'] = gapHorizontal + 'px'
    if (gapVertical) s['--space-gap-vertical'] = gapVertical + 'px'

    return s
  }, [gap, gapHorizontal, gapVertical, style])

  return (
    // @ts-ignore
    <View
      style={_style}
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: wrap,
        [`${classPrefix}-block`]: block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${align}`]: !!align,
        [`${classPrefix}-justify-${justify}`]: !!justify,
        [className]: !!className,
      })}
      {...others}
    >
      {Children.map(children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <View className={`${classPrefix}-item`}>{child}</View>
          )
        )
      })}
    </View>
  )
}

export default Space
