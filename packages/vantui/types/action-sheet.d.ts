import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
export interface ActionSheetProps extends StandardProps {
  actions: {
    disabled?: boolean
    color?: string
    name?: string
    subname?: string
    openType?: string
    loading?: string
    className?: string
    getUserProfileDesc?: string
  }[]
  show?: boolean
  title?: string
  cancelText?: string
  description?: string
  round?: boolean
  zIndex?: number
  overlay?: boolean
  closeOnClickOverlay?: boolean
  closeOnClickAction?: boolean
  safeAreaInsetBottom?: boolean
  lang?: any
  sessionFrom?: string
  sendMessageTitle?: string
  sendMessagePath?: string
  sendMessageImg?: string
  showMessageCard?: boolean
  appParameter?: string
  canIUseGetUserProfile?: boolean
  onContact?: (...args: any[]) => any
  onGetPhoneNumber?: (...args: any[]) => any
  onError?: (...args: any[]) => any
  onLaunchApp?: (...args: any[]) => any
  onOpenSetting?: (...args: any[]) => any
  onGetUserInfo?: (...args: any[]) => any
  onSelect?: (...args: any[]) => any
  onGetuserinfo?: (...args: any[]) => any
  onCancel?: (...args: any[]) => any
  onClose?: (...args: any[]) => any
  onClickOverlay?: (...args: any[]) => any
  children?: JSX.Element | JSX.Element[] | string
}

declare const ActionSheet: ComponentClass<ActionSheetProps>
export { ActionSheet }
