import { View, ITouchEvent } from '@tarojs/components'
import { useCallback } from 'react'
import * as utils from '../wxs/utils'
import { GREEN, GRAY_DARK } from '../common/color'
import VanIcon from '../icon/index'
import { StepsProps } from './../../types/steps'
export function getStatus(index: number, active: any) {
  if (index < active) {
    return 'finish'
  } else if (index === active) {
    return 'process'
  }

  return 'inactive'
}

export function Steps(props: StepsProps) {
  const {
    steps = [],
    active = 0,
    direction = 'horizontal',
    activeColor = GREEN,
    inactiveColor = GRAY_DARK,
    activeIcon = 'checked',
    inactiveIcon,
    className,
    onClickStep,
    iconClassPrefix = 'van-icon',
    ...others
  } = props

  const _onClick = useCallback(
    (event: ITouchEvent) => {
      const { index } = event.currentTarget.dataset
      Object.defineProperty(event, 'detail', {
        value: index,
      })
      onClickStep?.(event)
    },
    [onClickStep],
  )
  return (
    <View
      className={utils.bem('steps', [direction]) + ` ${className || ''}`}
      {...others}
    >
      <View className="van-step__wrapper">
        {steps.map((item, index) => {
          return (
            <View
              key={index}
              onClick={_onClick}
              data-index={index}
              className={
                utils.bem('step', [direction, getStatus(index, active)]) +
                ' van-hairline'
              }
              style={
                getStatus(index, active) === 'inactive'
                  ? 'color: ' + inactiveColor
                  : ''
              }
            >
              <View
                className="van-step__title"
                style={index === active ? 'color: ' + activeColor : ''}
              >
                <View>{item.text}</View>
                <View className="desc-class">{item.desc}</View>
              </View>
              <View className="van-step__circle-container">
                {index !== active ? (
                  <>
                    {item.inactiveIcon || inactiveIcon ? (
                      <VanIcon
                        classPrefix={iconClassPrefix}
                        color={
                          getStatus(index, active) === 'inactive'
                            ? inactiveColor
                            : activeColor
                        }
                        name={item.inactiveIcon || inactiveIcon || ''}
                        className="van-step__icon"
                      ></VanIcon>
                    ) : (
                      <View
                        className="van-step__circle"
                        style={
                          'background-color: ' +
                          (active !== undefined && index < active
                            ? activeColor
                            : inactiveColor)
                        }
                      ></View>
                    )}
                  </>
                ) : (
                  <VanIcon
                    name={item.activeIcon || activeIcon}
                    color={activeColor}
                    className="van-step__icon"
                    classPrefix={iconClassPrefix}
                  ></VanIcon>
                )}
              </View>
              <View>
                {index !== steps.length - 1 && (
                  <View
                    className="van-step__line"
                    style={
                      'background-color: ' +
                      (active !== undefined && index < active
                        ? activeColor
                        : inactiveColor)
                    }
                  ></View>
                )}
              </View>
            </View>
          )
        })}
      </View>
    </View>
  )
}
export default Steps
