import type { MiniPhoneButtonProps } from '../../../types/button.d'
import { ButtonProps, CommonEventFunction } from '@tarojs/components'
import Button from './index'

declare const my: any

export default function Index(props: MiniPhoneButtonProps): JSX.Element {
  const { onGetPhone, onFail, children, ...others } = props

  const getPhone: CommonEventFunction<ButtonProps.onGetPhoneNumberEventDetail> =
    function (e) {
      if (process.env.TARO_ENV === 'alipay') {
        my.getPhoneNumber({
          success: (res: any) => {
            if (res.response) {
              onGetPhone({
                encryptedData: res.response,
                iv: '',
                errMsg: 'getPhoneNumber:ok',
              })
            }
          },
          fail: (e: any) => {
            onFail({
              errMsg: e.errorMessage || JSON.stringify(e),
            })
          },
        })
      } else {
        if (e.detail) {
          onGetPhone(e.detail)
        } else {
          onFail(e)
        }
      }
    }
  const getError = function (e: any) {
    onFail({
      errMsg: /取消/.test(e.detail?.errorMessage ?? '')
        ? 'getUserInfo:fail auth deny'
        : e.detail?.errorMessage,
    })
  }

  return (
    <>
      {process.env.TARO_ENV === 'alipay' ? (
        <Button
          {...others}
          openType="getAuthorize"
          scope="phoneNumber"
          onError={getError}
          onGetAuthorize={getPhone}
        >
          {children}
        </Button>
      ) : (
        <Button
          {...others}
          openType="getPhoneNumber"
          onGetPhoneNumber={getPhone}
        >
          {children}
        </Button>
      )}
    </>
  )
}
