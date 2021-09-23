import { ComponentClass, ReactNode } from 'react'
import { BaseEventOrig } from '@tarojs/components/types/common.d'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'

export interface ButtonProps extends Omit<TaroButtonProps, 'size' | 'type'> {
  icon?: string
  classPrefix?: string
  type?: 'default' | 'primary' | 'info' | 'warning' | 'danger'
  size?: 'small' | 'normal' | 'large' | 'mini'
  block?: boolean
  round?: boolean
  square?: boolean
  loading?: boolean
  hairline?: boolean
  disabled?: boolean
  loadingText?: string
  loadingSize?: string
  customStyle?: string
  loadingType?: 'spinner' | 'circular'
  color?: string
  children: ReactNode
}

export interface MiniLoginButtonProps extends ButtonProps {
  onFail: (error: Taro.General.CallbackResult) => void
  onGetLoginCode: (loginInfo: Taro.login.SuccessCallbackResult) => void
}

export interface MiniUserButtonProps
  extends Omit<ButtonProps, 'onGetUserInfo'> {
  onGetUserInfo: (
    userInfo:
      | Taro.UserInfo
      | Taro.getUserProfile.SuccessCallbackResult
      | TaroButtonProps.onGetUserInfoEventDetail,
  ) => void
  onFail: (
    error:
      | Taro.General.CallbackResult
      | BaseEventOrig<TaroButtonProps.onGetUserInfoEventDetail>,
  ) => void
  desc?: string
}

export interface MiniPhoneButtonProps extends ButtonProps {
  onFail: (
    error:
      | Taro.General.CallbackResult
      | BaseEventOrig<TaroButtonProps.onGetPhoneNumberEventDetail>,
  ) => void
  onGetPhone: (phoneInfo: TaroButtonProps.onGetPhoneNumberEventDetail) => void
}

declare const Button: ComponentClass<ButtonProps>
declare const MiniLoginButton: ComponentClass<MiniLoginButtonProps>
declare const MiniUserButton: ComponentClass<MiniUserButtonProps>
declare const MiniPhoneButton: ComponentClass<MiniPhoneButtonProps>

export { Button, MiniLoginButton, MiniUserButton, MiniPhoneButton }
