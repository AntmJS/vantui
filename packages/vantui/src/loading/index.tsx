import { View } from '@tarojs/components'
import { useState } from 'react'
import * as utils from '../wxs/utils'
import { LoadingProps } from '../../types/loading'
import * as computed from './wxs'

export function Loading(props: LoadingProps): JSX.Element {
  const {
    vertical,
    type = 'circular',
    color,
    size,
    textSize,
    className,
    children,
    style,
    ...others
  } = props

  const [array12] = useState(Array.from({ length: 12 }))

  return (
    <View
      className={
        ' ' +
        utils.bem('loading', {
          vertical,
        }) +
        ' ' +
        className
      }
      style={utils.style([style])}
      {...others}
    >
      <View
        className={'van-loading__spinner van-loading__spinner--' + type}
        style={computed.spinnerStyle({
          color,
          size,
        })}
      >
        {type === 'spinner' && (
          <>
            {array12.map((_, index: number) => {
              return (
                <View
                  key={`van-loading__dot_${index}`}
                  className="van-loading__dot"
                ></View>
              )
            })}
          </>
        )}
      </View>
      <View
        className="van-loading__text"
        style={computed.textStyle({
          textSize,
        })}
      >
        {children}
      </View>
    </View>
  )
}

export default Loading
