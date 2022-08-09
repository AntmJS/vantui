import type { MiniUserButtonProps } from '../../types/mini-user-button'
import { useEffect, useState } from 'react'
import {
  canIUse as TaroCanIUse,
  getUserProfile as TaroGetUserProfile,
  getUserInfo as TaroGetUserInfo,
} from '@tarojs/taro'
import { ButtonProps, CommonEventFunction } from '@tarojs/components'
import { Button } from '../button'

declare const my: any

export function MiniUserButton(props: MiniUserButtonProps): JSX.Element {
  const { onGetUserInfo, onFail, desc, children, ...others } = props
  const [userProfile, setUserProfile] = useState(true)

  useEffect(function () {
    let canIUse = false
    if (process.env.TARO_ENV !== 'h5') {
      try {
        canIUse = TaroCanIUse('getUserProfile')
      } catch {}
    }
    setUserProfile(canIUse)
  }, [])

  const getUserProfile = function () {
    TaroGetUserProfile({
      desc: desc || '用于快速登录', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success(res: any) {
        onGetUserInfo(res)
      },
      fail(error) {
        onFail(error)
      },
    })
  }

  const getTTUserInfo = function () {
    TaroGetUserInfo({
      success(res: any) {
        onGetUserInfo(res)
      },
      fail(error) {
        onFail(error)
      },
    })
  }

  const getUserInfo: CommonEventFunction<ButtonProps.onGetUserInfoEventDetail> =
    function (e) {
      if (process.env.TARO_ENV === 'alipay') {
        my.getOpenUserInfo({
          fail: (e: any) => {
            onFail({
              errMsg: e.errorMessage || JSON.stringify(e),
            })
          },
          success: (res: any) => {
            const userInfo = JSON.parse(res.response).response // 以下方的报文格式解析两层 response
            onGetUserInfo(userInfo)
          },
        })
      } else {
        if (e.detail) {
          onGetUserInfo(e.detail)
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

  if (process.env.TARO_ENV === 'alipay') {
    return (
      <Button
        {...others}
        openType="getAuthorize"
        scope="userInfo"
        onError={getError}
        onGetAuthorize={getUserInfo}
      >
        {children}
      </Button>
    )
  }

  return (
    <>
      {userProfile ? (
        <Button {...others} onClick={getUserProfile}>
          {children}
        </Button>
      ) : process.env.TARO_ENV === 'tt' ? (
        <Button {...others} onClick={getTTUserInfo}>
          {children}
        </Button>
      ) : (
        <Button {...others} openType="getUserInfo" onGetUserInfo={getUserInfo}>
          {children}
        </Button>
      )}
    </>
  )
}
export default MiniUserButton
