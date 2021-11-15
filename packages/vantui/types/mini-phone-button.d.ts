import { ComponentClass } from 'react'
import { BaseEventOrig } from '@tarojs/components/types/common.d'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'
import { ButtonProps } from './button.d'

export interface MiniPhoneButtonProps extends ButtonProps {
  onFail: (
    error:
      | Taro.General.CallbackResult
      | BaseEventOrig<TaroButtonProps.onGetPhoneNumberEventDetail>,
  ) => void
  onGetPhone: (phoneInfo: TaroButtonProps.onGetPhoneNumberEventDetail) => void
}

declare const MiniPhoneButton: ComponentClass<MiniPhoneButtonProps>

export { MiniPhoneButton }
export default MiniPhoneButton
