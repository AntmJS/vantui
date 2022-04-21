import type { MiniLoginButtonProps } from '../../types/mini-login-button'
import { login as TaroLogin } from '@tarojs/taro'
import { Button } from '../button'

declare const my: any

export function MiniLoginButton(props: MiniLoginButtonProps): JSX.Element {
  const { onGetLoginCode, onFail, children, ...others } = props

  const onLogin = function () {
    if (process.env.TARO_ENV === 'alipay') {
      my.getAuthCode({
        scopes: ['auth_base'],
        success(res: any) {
          if (res.authCode) {
            onGetLoginCode({
              errMsg: 'login:ok',
              code: res.authCode,
            })
          } else {
            onFail({
              errMsg: res.errorMessage || 'login:error',
            })
          }
        },
        fail(e: any) {
          onFail({
            errMsg: e.errorMessage,
          })
        },
      })
    } else {
      TaroLogin({
        success(res) {
          onGetLoginCode(res)
        },
        fail(e) {
          onFail(e)
        },
      })
    }
  }

  return (
    <Button {...others} onClick={onLogin}>
      {children}
    </Button>
  )
}
export default MiniLoginButton
