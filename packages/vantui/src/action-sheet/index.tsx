import { View, Button, ITouchEvent } from '@tarojs/components'
import { useCallback } from 'react'
import * as utils from '../wxs/utils'
import { ActionSheetProps, ActionSheetItem } from '../../types/action-sheet'
import VanLoading from '../loading/index'
import VanPopup from '../popup/index'
import VanIcon from '../icon/index'
// import Button from './../button'
export function ActionSheet(props: ActionSheetProps) {
  const {
    round = true,
    zIndex,
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
    (event: ITouchEvent) => {
      const { index } = event.currentTarget.dataset
      // const { actions, closeOnClickAction, canIUseGetUserProfile } = data
      const item = actions?.[index]
      if (item) {
        Object.defineProperty(event, 'detail', {
          value: item,
        })
        onSelect?.(event)
        if (closeOnClickAction) {
          _onClose()
        }
      }
    },
    [_onClose, actions, closeOnClickAction, onSelect],
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
                ...rest
              } = item
              return (
                <Button
                  key={index}
                  openType={disabled || loading ? undefined : openType}
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
export default ActionSheet
