import { useState, useEffect, useRef } from 'react'
import { View, Block, Slot } from '@tarojs/components'

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
    name = '',
    title = '',
    value = '',
    icon,
    label,
    disabled,
    clickable,
    border = true,
    isLink = true,
    renderValue,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    updateExpanded()
    ref.current.mounted = true
  }, [])

  const updateExpanded = function () {
    if (!parent) {
      return
    }
    const { value, accordion } = parent?.data
    const index = parent?.index
    const currentName = name == null ? index : name
    const expanded = accordion
      ? value === currentName
      : (value || []).some((name: any) => name === currentName)
    if (expanded !== expanded) {
      setContentAnimate(null, expanded, ref.current.mounted)
    }
    setState((state) => {
      return {
        ...state,
        index,
        expanded,
      }
    })
  }

  const onClick = function () {
    if (disabled) {
      return
    }
    const { expanded } = state
    const currentName = name == null ? parent?.index : name
    parent?.handleSwitch(currentName, !expanded)
  }

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
        renderTitle={
          <Block>
            <Slot name="title"></Slot>
          </Block>
        }
        renderIcon={
          <Block>
            <Slot name="icon"></Slot>
          </Block>
        }
        renderRightIcon={
          <Block>
            <Slot name="right-icon"></Slot>
          </Block>
        }
      >
        {renderValue}
      </VanCell>
      <View
        className={utils.bem('collapse-item__wrapper', {})}
        style="height: 0;"
        animation={state.animation}
      >
        <View className="van-collapse-item__content content-class">
          {children}
        </View>
      </View>
    </View>
  )
}
