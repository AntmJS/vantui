import { FunctionComponent } from 'react'
import { ButtonProps } from './button.d'
export interface MiniLoginButtonProps extends ButtonProps {
  onFail: (error: TaroGeneral.CallbackResult) => void
  onGetLoginCode: (loginInfo: Taro.login.SuccessCallbackResult) => void
}

declare const MiniLoginButton: FunctionComponent<MiniLoginButtonProps>

export { MiniLoginButton }
