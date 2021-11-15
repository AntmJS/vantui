import { ComponentClass } from 'react'
import { BaseEventOrig } from '@tarojs/components/types/common.d'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'
import { ButtonProps } from './button.d'

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

declare const MiniUserButton: ComponentClass<MiniUserButtonProps>

export { MiniUserButton }
export default MiniUserButton
