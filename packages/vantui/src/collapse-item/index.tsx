import { useReady } from '@tarojs/taro'
import { useState, useEffect, useRef, useCallback } from 'react'
import { View, ITouchEvent } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CollapseItemProps } from '../../types/collapse'
import VanCell from '../cell/index'
import { setContentAnimate } from './animate'

export function CollapseItem(
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
    ready: false,
  })

  const {
    size,
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

  useReady(() => {
    if (process.env.TARO_ENV !== 'h5') {
      setState((state) => {
        return {
          ...state,
          ready: true,
        }
      })
    }
  })
  useEffect(() => {
    // if (process.env.TARO_ENV === 'h5') {
    setTimeout(() => {
      setState((state) => {
        return {
          ...state,
          ready: true,
        }
      })
    }, 0)
    // }
  }, [])

  const refDom = useRef(null)
  const refRandomClass = useRef(`selector-${`${Math.random()}`.slice(-8)}`)

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
      setContentAnimate(
        `.${refRandomClass.current}`,
        expanded,
        ref.current.mounted,
        setState,
        refDom,
      )
    }
    setState((state) => {
      return {
        ...state,
        index,
        expanded,
      }
    })
  }, [parent, name, state.expanded])

  useEffect(() => {
    if (state.ready) {
      updateExpanded()
      ref.current.mounted = true
    }
  }, [state.ready, updateExpanded])

  useEffect(() => {
    if (state.ready) {
      updateExpanded()
    }
  }, [state.ready, updateExpanded, parent.data])

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
        'van-collapse-item  ' +
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
        size={size}
        border={border && state.expanded}
        className={
          utils.bem('collapse-item__title', {
            disabled,
            expanded: state.expanded,
          }) + ' van-cell'
        }
        onClick={onClick}
        renderTitle={<>{renderTitle}</>}
        renderIcon={<>{renderIcon}</>}
        renderRightIcon={<>{renderRightIcon}</>}
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
        <View
          className={`van-collapse-item__content content-class ${refRandomClass.current}`}
          ref={refDom}
        >
          {children}
        </View>
      </View>
    </View>
  )
}
export default CollapseItem
