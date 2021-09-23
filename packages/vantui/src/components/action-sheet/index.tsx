import { View, Button } from '@tarojs/components'
import { useCallback } from 'react'
import * as utils from '../wxs/utils'
import { ActionSheetProps, ActionSheetItem } from '../../../types/action-sheet'
// import { button } from '../mixins/button.js'
import VanLoading from '../loading/index'
import VanPopup from '../popup/index'
import VanIcon from '../icon/index'
export default function Index(props: ActionSheetProps) {
  const {
    round = true,
    zIndex = 100,
    overlay = true,
    closeOnClickOverlay = true,
    closeOnClickAction = true,
    safeAreaInsetBottom = true,
    show,
    title,
    description,
    actions,
    cancelText,
    children,
    onSelect,
    onCancel,
    onClose,
    onClickOverlay,
    onGetUserInfo,
    className,
    ...others
  } = props

  const _onCancel = useCallback(() => {
    onCancel?.()
  }, [onCancel])

  const _onClose = useCallback(() => {
    onClose?.()
  }, [onClose])

  const _onSelect = useCallback(
    (event) => {
      const { index } = event.currentTarget.dataset
      // const { actions, closeOnClickAction, canIUseGetUserProfile } = data
      const item = actions[index]
      if (item) {
        onSelect?.(item)
        if (closeOnClickAction) {
          _onClose()
        }
        if (item.openType === 'getUserInfo') {
          Taro.getUserProfile({
            desc: item?.getUserProfileDesc || '  ',
            complete: (userProfile) => {
              onGetUserInfo?.(userProfile)
            },
          })
        }
      }
    },
    [_onClose, actions, closeOnClickAction, onGetUserInfo, onSelect],
  )

  const _onClickOverlay = useCallback(() => {
    onClickOverlay?.()
    onClose?.()
  }, [onClickOverlay, onClose])

  return (
    <VanPopup
      show={show}
      position="bottom"
      round={round}
      zIndex={zIndex}
      overlay={overlay}
      className={`van-action-sheet ${className || ''}`}
      safeAreaInsetBottom={safeAreaInsetBottom}
      closeOnClickOverlay={closeOnClickOverlay}
      onClose={_onClickOverlay}
      {...others}
    >
      <>
        {title && (
          <View className="van-action-sheet__header">
            {title}
            <VanIcon
              name="cross"
              className="van-action-sheet__close"
              onClick={_onClose}
            ></VanIcon>
          </View>
        )}

        {description && (
          <View className="van-action-sheet__description van-hairline--bottom">
            {description}
          </View>
        )}
        {actions && actions.length && (
          <View>
            {actions.map((item: ActionSheetItem, index: number) => {
              const {
                name,
                subname,
                disabled,
                loading,
                openType,
                color,
                className,
                type,
                size,
                ...rest
              } = item
              return (
                <Button
                  key={index}
                  openType={
                    disabled || loading || openType === 'getUserInfo'
                      ? ''
                      : openType
                  }
                  style={color ? 'color: ' + color : ''}
                  className={
                    utils.bem('action-sheet__item', {
                      disabled: disabled || loading,
                    }) +
                    ' ' +
                    (className || '')
                  }
                  hoverClass="van-action-sheet__item--hover"
                  data-index={index}
                  onClick={disabled || loading ? () => {} : _onSelect}
                  {...rest}
                >
                  {!loading ? (
                    <>
                      {name}
                      {subname && (
                        <View className="van-action-sheet__subname">
                          {subname}
                        </View>
                      )}
                    </>
                  ) : (
                    <VanLoading
                      className="van-action-sheet__loading"
                      size="22px"
                    ></VanLoading>
                  )}
                </Button>
              )
            })}
          </View>
        )}
        {children}
        {cancelText && (
          <>
            <View className="van-action-sheet__gap"></View>
            <View
              className="van-action-sheet__cancel"
              hoverClass="van-action-sheet__cancel--hover"
              // hoverStayTime="70"
              onClick={_onCancel}
            >
              {cancelText}
            </View>
          </>
        )}
      </>
    </VanPopup>
  )
}
