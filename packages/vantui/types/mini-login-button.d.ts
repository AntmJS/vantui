import { ComponentClass } from 'react'
import { ButtonProps } from './button.d'
export interface MiniLoginButtonProps extends ButtonProps {
  onFail: (error: Taro.General.CallbackResult) => void
  onGetLoginCode: (loginInfo: Taro.login.SuccessCallbackResult) => void
}

declare const MiniLoginButton: ComponentClass<MiniLoginButtonProps>

export { MiniLoginButton }
export default MiniLoginButton
