import { nextTick } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { ProgressProps } from '../../types/progress'
import { getRect } from '../common/utils'
import * as computed from './wxs'

export function Progress(props: ProgressProps) {
  const [right, setRight] = useState(0)
  useEffect(
    function () {
      nextTick(() => {
        Promise.all([
          getRect(null, '.van-progress'),
          getRect(null, '.van-progress__pivot'),
        ]).then(([portion, pivot]: any) => {
          if (portion && pivot) {
            setRight((pivot.width * (Number(props.percentage) - 100)) / 100)
          }
        })
      })
    },
    [props.percentage],
  )
  const {
    strokeWidth = 4,
    trackColor,
    percentage,
    inactive,
    color = '',
    textColor = '#ffffff',
    pivotColor,
    pivotText,
    showPivot = true,
    style,
    className,
    ...others
  } = props

  return (
    <View
      className={'van-progress  ' + className}
      style={utils.style([
        computed.rootStyle({
          strokeWidth,
          trackColor,
        }),
        style,
      ])}
      {...others}
    >
      <View
        className="van-progress__portion"
        style={computed.portionStyle({
          percentage,
          inactive,
          color,
        })}
      >
        {showPivot && computed.pivotText(pivotText, percentage) && (
          <View
            style={computed.pivotStyle({
              textColor,
              pivotColor,
              inactive,
              color,
              right,
            })}
            className="van-progress__pivot"
          >
            {computed.pivotText(pivotText, percentage)}
          </View>
        )}
      </View>
    </View>
  )
}
export default Progress
