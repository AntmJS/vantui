/* eslint-disable */
// @ts-nocheck
// TESTCODE
import { View, Text, Block } from '@tarojs/components'
import { useState } from 'react'
import * as utils from '../wxs/utils'
import { ToastProps } from '../../../types/toast'
import VanTransition from '../transition/index'
import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'

export default function Index(props: ToastProps) {
  const {
    show,
    zIndex = 1000,
    mask,
    forbidClick,
    type = 'text',
    position = 'middle',
    message,
    loadingType = 'circular',
    style,
    className,
    children,
    ...others
  } = props

  return (
    <Block>
      {(mask || forbidClick) && (
        <VanOverlay
          show={show}
          zIndex={zIndex}
          customStyle={mask ? '' : 'background-color: transparent;'}
        ></VanOverlay>
      )}
      <VanTransition
        show={show}
        customStyle={'z-index: ' + zIndex}
        customClass="van-toast__container"
      >
        <View
          className={
            'van-toast van-toast--' +
            (type === 'text' ? 'text' : 'icon') +
            ` van-toast--${position} ${className}`
          }
          style={style}
          onTouchmove={this.privateStopNoop.bind(this, this.noop)}
          {...others}
        >
          {type === 'text' ? (
            <Text>{message}</Text>
          ) : (
            <Block>
              {type === 'loading' ? (
                <VanLoading
                  color="white"
                  type={loadingType}
                  customClass="van-toast__loading"
                ></VanLoading>
              ) : (
                <VanIcon
                  info={null}
                  className="van-toast__icon"
                  name={type}
                ></VanIcon>
              )}
              {message && <Text className="van-toast__text">{message}</Text>}
            </Block>
          )}
          {/*  with icon  */}
          {children}
        </View>
      </VanTransition>
    </Block>
  )
}
