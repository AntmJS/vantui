import React, { useRef, useMemo, useCallback } from 'react'
import { View, Text } from '@tarojs/components'
import classNames from 'classnames'
import { NumberKeyboardProps } from '../../types/number-keyboard'
import { Icon } from '../icon'
import { Popup } from '../popup'

const classPrefix = 'vantui-number-keyboard'

export const NumberKeyboard: React.FC<NumberKeyboardProps> = (props) => {
  const {
    visible,
    title,
    customKey,
    onInput,
    randomOrder = false,
    showCloseButton = true,
    confirmText = null,
    closeOnConfirm = true,
  } = props

  const shuffle = useCallback(function (array) {
    const len = array.length
    for (let i = len - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }, [])

  const keys = useMemo(() => {
    const defaultKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const keyList = randomOrder ? shuffle(defaultKeys) : defaultKeys
    keyList.push('0')
    if (confirmText) {
      keyList.push(customKey || '')
    } else {
      keyList.splice(9, 0, customKey || '')
      keyList.push('BACKSPACE')
    }
    return keyList
  }, [randomOrder, shuffle, confirmText, customKey])

  const timeoutRef = useRef(-1)
  const intervalRef = useRef(-1)

  const onDelete = useCallback(() => {
    props.onDelete?.()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onDelete])

  const onBackspacePressStart = () => {
    timeoutRef.current = window.setTimeout(() => {
      onDelete()
      intervalRef.current = window.setInterval(onDelete, 150)
    }, 700)
  }
  const onBackspacePressEnd = () => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
  }

  // 点击键盘按键
  const onKeyPress = (e, key: string) => {
    e.preventDefault()
    e.stopPropagation()

    switch (key) {
      case 'BACKSPACE':
        onDelete?.()
        break
      case 'OK':
        props.onConfirm?.()
        if (closeOnConfirm) {
          props.onClose?.()
        }
        break
      default:
        // 当 customKey 不存在时，点击该键不应该触发 onInput
        if (key !== '') onInput?.(key)
        break
    }
  }

  // 渲染 title 和 close button
  const renderHeader = () => {
    if (!showCloseButton && !title) return null
    return (
      <View
        className={classNames(`${classPrefix}-header`, {
          'with-title': !!title,
        })}
      >
        {title && <View className={`${classPrefix}-title`}>{title}</View>}
        {showCloseButton && (
          <Text
            className={`${classPrefix}-header-close-button`}
            onClick={() => {
              props.onClose?.()
            }}
          >
            <Icon name="arrow-down" />
          </Text>
        )}
      </View>
    )
  }

  // 渲染基础键盘按键
  const renderKey = (key: string, index: number) => {
    const isNumberKey = /^\d$/.test(key)
    const className = classNames(`${classPrefix}-key`, {
      'number-key': isNumberKey,
      'sign-key': !isNumberKey && key,
      'mid-key': index === 9 && !!confirmText,
    })

    return (
      <View
        key={key}
        className={className}
        onTouchStart={() => {
          if (key === 'BACKSPACE') {
            onBackspacePressStart()
          }
        }}
        onTouchEnd={() => {
          if (key === 'BACKSPACE') {
            onBackspacePressEnd()
          }
        }}
        onClick={(e) => {
          onKeyPress(e, key)
        }}
      >
        {key === 'BACKSPACE' ? <Icon name="close" size={40} /> : key}
      </View>
    )
  }

  return (
    <Popup
      show={visible}
      overlay={false}
      onClose={props.afterClose}
      className={`${classPrefix}-popup`}
      position="bottom"
    >
      <View
        className={classPrefix}
        onClick={(e) => {
          e.preventDefault()
        }}
      >
        {renderHeader()}
        <View className={`${classPrefix}-wrapper`}>
          <View
            className={classNames(`${classPrefix}-main`, {
              'confirmed-style': !!confirmText,
            })}
          >
            {keys.map(renderKey)}
          </View>
          {!!confirmText && (
            <View className={`${classPrefix}-confirm`}>
              <View
                className={`${classPrefix}-key extra-key bs-key`}
                onTouchStart={() => {
                  onBackspacePressStart()
                }}
                onTouchEnd={(e) => {
                  onKeyPress(e, 'BACKSPACE')
                  onBackspacePressEnd()
                }}
                // onClick={(e) => onKeyPress(e, 'BACKSPACE')}
              >
                <Icon name="close" size={40} />
              </View>
              <View
                className={`${classPrefix}-key extra-key ok-key`}
                onTouchEnd={(e) => onKeyPress(e, 'OK')}
                // onClick={(e) => onKeyPress(e, 'OK')}
              >
                {confirmText}
              </View>
            </View>
          )}
        </View>
      </View>
    </Popup>
  )
}

export default NumberKeyboard
