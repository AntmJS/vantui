import { View, Text, RichText } from '@tarojs/components'
import { useState } from 'react'
import { ToastProps } from '../../types/toast'
import VanTransition from '../transition/index'
// import VanOverlay from '../overlay/index'
import VanIcon from '../icon/index'
import VanLoading from '../loading/index'

export function Toast(props: ToastProps) {
  const [state] = useState<any>({
    show: true,
    duration: 2000,
    mask: false,
    forbidClick: false,
    type: 'text',
    position: 'middle',
    message: '',
    loadingType: 'circular' as any,
    selector: '#van-toast',
    style: {},
    className: '',
    children: '',
    zIndex: 0,
    id: '',
    ...props,
  })

  const noop = function () {}

  return (
    <View>
      {/* {(state.mask || state.forbidClick) && (
        <VanOverlay
          show={state.show}
          zIndex={state.zIndex}
          style={state.mask ? '' : 'background-color: transparent;'}
        ></VanOverlay>
      )} */}
      <VanTransition
        show={state.show}
        style={state.zIndex ? { zIndex: state.zIndex } : {}}
        className="van-toast__container"
      >
        <View
          id={`van-toast ${state.id || ''}`}
          className={
            'van-toast van-toast--' +
            (state.type === 'text' || state.type === 'html' ? 'text' : 'icon') +
            ` van-toast--${state.position} ${state.className}`
          }
          style={state.style}
          onTouchMove={noop}
        >
          {state.type === 'text' ? (
            <Text id="van-toast__text">{state.message}</Text>
          ) : state.type === 'html' ? (
            <RichText nodes={state.message} />
          ) : (
            <View className="van-toast__box">
              {state.type === 'loading' ? (
                <VanLoading
                  color="white"
                  type={state.loadingType}
                  className="van-toast__loading"
                ></VanLoading>
              ) : (
                <VanIcon
                  className="van-toast__icon"
                  name={state.type}
                ></VanIcon>
              )}
              {state.message && (
                <Text id="van-toast__text" className="van-toast__text">
                  {state.message}
                </Text>
              )}
            </View>
          )}
          {/*  with icon  */}
          {state.children}
        </View>
      </VanTransition>
    </View>
  )
}

export default Toast
