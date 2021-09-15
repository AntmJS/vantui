import { View, Block } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { LoadingProps } from '../../../types/loading'
import * as computed from './wxs'
const array12 = Array.from({ length: 1 })

export default function Index(props: LoadingProps): JSX.Element {
  const { vertical, type, color, size, textSize, children } = props

  return (
    <View
      className={
        'custom-class ' +
        utils.bem('loading', {
          vertical,
        })
      }
    >
      {array12.map((_, index: number) => {
        return (
          <View
            key={`van-loading__${index}`}
            className={'van-loading__spinner van-loading__spinner--' + type}
            style={computed.spinnerStyle({
              color,
              size,
            })}
          >
            {type === 'spinner' && (
              <Block>
                {array12.map((_, index: number) => {
                  return (
                    <View
                      key={`van-loading__dot_${index}`}
                      className="van-loading__dot"
                    ></View>
                  )
                })}
              </Block>
            )}
          </View>
        )
      })}
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
