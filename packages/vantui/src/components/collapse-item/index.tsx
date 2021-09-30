import { useState, useEffect, useRef, useCallback } from 'react'
import { View, Block, ITouchEvent } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CollapseItemProps } from '../../../types/collapse-item'
import VanCell from '../cell/index'
import { setContentAnimate } from './animate.js'

export default function Index(
  props: CollapseItemProps & {
    parent?: any
  },
) {
  const ref = useRef({
    mounted: false,
  })

  const [state, setState] = useState({
    index: undefined,
    expanded: false,
    animation: { actions: [] },
  })

  const {
    parent,
    name = null,
    title = '',
    value = '',
    icon,
    label,
    disabled = false,
    clickable = false,
    border = true,
    isLink = true,
    renderTitle,
    renderIcon,
    renderRightIcon,
    renderValue,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    updateExpanded()
    ref.current.mounted = true
    /* eslint-disable-next-line */
  }, [])

  useEffect(() => {
    updateExpanded()
    /* eslint-disable-next-line */
  }, [parent.data])

  const updateExpanded = useCallback(() => {
    if (!parent) {
      return
    }
    const { value, accordion } = parent?.data
    const index = parent?.index
    const currentName = name == null ? index : name
    const expanded = accordion
      ? value === currentName
      : (value || []).some((name: any) => name === currentName)
    if (expanded !== state.expanded) {
      setContentAnimate(null, expanded, ref.current.mounted, setState)
    }
    setState((state) => {
      return {
        ...state,
        index,
        expanded,
      }
    })
  }, [parent, name, state.expanded])

  const onClick = useCallback(
    (event: ITouchEvent) => {
      if (disabled) {
        return
      }
      const currentName = name == null ? parent?.index : name
      parent?.handleSwitch(event, currentName, !state.expanded)
    },
    [parent, disabled, name, state.expanded],
  )

  return (
    <View
      className={
        'van-collapse-item custom-class ' +
        (state.index !== 0 ? 'van-hairline--top' : '') +
        ` ${className || ''}`
      }
      style={style}
      {...others}
    >
      <VanCell
        title={title}
        icon={icon}
        value={value}
        label={label}
        isLink={isLink}
        clickable={clickable}
        border={border && state.expanded}
        className={
          utils.bem('collapse-item__title', {
            disabled,
            expanded: state.expanded,
          }) + ' van-cell'
        }
        onClick={onClick}
        renderTitle={<Block>{renderTitle}</Block>}
        renderIcon={<Block>{renderIcon}</Block>}
        renderRightIcon={<Block>{renderRightIcon}</Block>}
      >
        {renderValue}
      </VanCell>
      <View
        className={
          utils.bem('collapse-item__wrapper', {}) +
          ' van-collapse-item__animation-box'
        }
        animation={state.animation}
      >
        <View className="van-collapse-item__content content-class">
          {children}
        </View>
      </View>
    </View>
  )
}
