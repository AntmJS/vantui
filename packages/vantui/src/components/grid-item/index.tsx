import { View, Block, Text } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import { GridItemProps } from '../../../types/grid-item'
import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import * as computed from './wxs'

export default function Index(
  props: GridItemProps & {
    setChildrenInstance: any
    index: number
    parentInstance: any
  },
) {
  const {
    icon,
    iconColor,
    iconPrefix = 'van-icon',
    dot,
    info,
    badge,
    text,
    setChildrenInstance,
    parentInstance,
    index,
    style,
    className,
    ...others
  } = props

  const [parentState, setParentState] = useState<any>({})

  useEffect(
    function () {
      setChildrenInstance(index, {
        updateStyle,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [index, setChildrenInstance],
  )

  useEffect(function () {
    updateStyle()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const updateStyle = useCallback(
    function () {
      const {
        columnNum,
        border,
        square,
        gutter,
        clickable,
        center,
        direction,
        reverse,
        iconSize,
      } = parentInstance

      setParentState({
        center,
        border,
        square,
        gutter,
        clickable,
        direction,
        reverse,
        iconSize,
        index,
        columnNum,
      })
    },
    [parentInstance, index],
  )

  return (
    <View
      className={
        'custom-class ' +
        utils.bem('grid-item', {
          square: parentState?.square,
        }) +
        ' ' +
        className
      }
      style={utils.style([
        computed.wrapperStyle({
          square: parentState?.square,
          gutter: parentState?.gutter,
          columnNum: parentState?.columnNum,
          index: parentState?.index,
        }),
        style,
      ])}
      onClick={others.onClick}
    >
      <View
        className={
          'content-class ' +
          utils.bem('grid-item__content', [
            parentState?.direction,
            {
              center: parentState?.center,
              square: parentState?.square,
              reverse: parentState?.reverse,
              clickable: parentState?.clickable,
              surround: parentState?.border && parentState?.gutter,
            },
          ]) +
          ' ' +
          (parentState?.border ? 'van-hairline--surround' : '')
        }
        style={computed.contentStyle({
          square: parentState?.square,
          gutter: parentState?.gutter,
        })}
      >
        {<Block>{others.children}</Block> || (
          <Block>
            <View className="van-grid-item__icon icon-class">
              {icon ? (
                <VanIcon
                  name={icon}
                  color={iconColor}
                  classPrefix={iconPrefix}
                  dot={dot}
                  info={badge || info}
                  size={parentState?.iconSize}
                ></VanIcon>
              ) : (
                parentState.renderIcon
              )}
            </View>
            <View className="van-grid-item__text text-class">
              {text ? <Text>{text}</Text> : parentState.renderText}
            </View>
          </Block>
        )}
      </View>
    </View>
  )
}
