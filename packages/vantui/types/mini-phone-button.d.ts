import { FunctionComponent } from 'react'
import { BaseEventOrig } from '@tarojs/components/types/common.d'
import { ButtonProps as TaroButtonProps } from '@tarojs/components'
import { ButtonProps } from './button.d'

export interface MiniPhoneButtonProps extends ButtonProps {
  onFail: (
    error:
      | TaroGeneral.CallbackResult
      | BaseEventOrig<TaroButtonProps.onGetPhoneNumberEventDetail>,
  ) => void
  onGetPhone: (phoneInfo: TaroButtonProps.onGetPhoneNumberEventDetail) => void
}

declare const MiniPhoneButton: FunctionComponent<MiniPhoneButtonProps>

export { MiniPhoneButton }
