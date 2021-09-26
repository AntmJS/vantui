import { Block, View, Text } from '@tarojs/components'
import { useState, useCallback, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { GRAY, RED } from '../common/color.js'
import { toPromise } from '../common/utils.js'
import VanGoodsActionButton from '../goods-action-button/index'
import VanGoodsAction from '../goods-action/index'
import VanButton from '../button/index'
import VanPopup from '../popup/index'
import { DialogProps } from '../../../types/dialog'
import * as utils from './../wxs/utils'
export default function Index(props: DialogProps) {
  const {
    show: _show,
    overlay = true,
    transition = 'scale',
    theme = 'default',
    zIndex = 2000,
    width,
    overlayStyle,
    closeOnClickOverlay,
    message,
    title,
    messageAlign,
    showCancelButton,
    cancelButtonColor = GRAY,
    confirmButtonColor = RED,
    cancelButtonText = '取消',
    showConfirmButton = true,
    confirmButtonOpenType,
    sessionFrom,
    sendMessageTitle,
    sendMessagePath,
    sendMessageImg,
    showMessageCard,
    appParameter,
    confirmButtonText = '确认',
    renderTitle,
    onClose,
    onConfirm,
    onCancel,
    onBeforeClose,
    asyncClose,
    children,
    style,
    className,
    ...others
  } = props

  const [confirmLoading, setConfirmLoading] = useState(false)
  const [cancelLoading, setCancelLoading] = useState(false)

  const [show, setShow] = useState(_show)

  const _close = useCallback(
    (action) => {
      setShow(false)

      Taro.nextTick(() => {
        onClose?.(action)

        // const { callback } = this.data
        // if (callback) {
        //   callback(action, this)
        // }
      })
    },
    [onClose],
  )
  const _onClickOverlay = useCallback(() => {
    _close('overlay')
  }, [_close])

  const _stopLoading = useCallback(() => {
    setConfirmLoading(false)
    setCancelLoading(false)
  }, [])
  const _handleAction = useCallback(
    (action) => {
      if (action === 'confirm') {
        onConfirm?.(action, { dialog: null })
      } else if (action === 'cancel') {
        onCancel?.(action, { dialog: null })
      }

      if (!asyncClose && !onBeforeClose) {
        _close(action)
        return
      }
      if (action === 'confirm') {
        setConfirmLoading(false)
      } else {
        setCancelLoading(false)
      }

      if (onBeforeClose) {
        toPromise(onBeforeClose(action)).then((value: any) => {
          if (value) {
            _close(action)
          } else {
            _stopLoading()
          }
        })
      }
    },
    [_close, _stopLoading, asyncClose, onBeforeClose, onCancel, onConfirm],
  )
  const _onConfirm = useCallback(() => {
    _handleAction('confirm')
  }, [_handleAction])
  const _onCancel = useCallback(() => {
    _handleAction('cancel')
  }, [_handleAction])
  useEffect(() => {
    if (!_show) {
      _stopLoading()
    }
    setShow(_show)
  }, [_show, _stopLoading])

  return (
    <VanPopup
      show={show}
      zIndex={zIndex}
      overlay={overlay}
      transition={transition}
      className={'van-dialog van-dialog--' + theme + ' ' + `${className || ''}`}
      style={utils.style(['width: ' + utils.addUnit(width) + ';', style])}
      overlayStyle={overlayStyle}
      closeOnClickOverlay={closeOnClickOverlay}
      onClose={_onClickOverlay}
    >
      {(title || renderTitle) && (
        <View
          className={utils.bem('dialog__header', {
            isolated: !(message || renderTitle),
          })}
        >
          {/* {renderTitle || } */}
          {renderTitle ? renderTitle : title && <Block>{title}</Block>}
        </View>
      )}
      {children
        ? children
        : message && (
            <View
              className={utils.bem('dialog__message', [
                theme,
                messageAlign,
                {
                  hasTitle: title,
                },
              ])}
            >
              <Text className="van-dialog__message-text">{message}</Text>
            </View>
          )}

      {theme === 'round-button' ? (
        <VanGoodsAction className="van-dialog__footer--round-button">
          {showCancelButton && (
            <VanGoodsActionButton
              size="large"
              loading={cancelLoading}
              className="van-dialog__button van-hairline--right van-dialog__cancel"
              style={'color: ' + cancelButtonColor}
              onClick={_onCancel}
            >
              {cancelButtonText}
            </VanGoodsActionButton>
          )}
          {showConfirmButton && (
            <VanGoodsActionButton
              size="large"
              className="van-dialog__button van-dialog__confirm"
              loading={confirmLoading}
              style={'color: ' + confirmButtonColor}
              openType={confirmButtonOpenType}
              sessionFrom={sessionFrom}
              sendMessageTitle={sendMessageTitle}
              sendMessagePath={sendMessagePath}
              sendMessageImg={sendMessageImg}
              showMessageCard={showMessageCard}
              appParameter={appParameter}
              onClick={_onConfirm}
              {...others}
            >
              {confirmButtonText}
            </VanGoodsActionButton>
          )}
        </VanGoodsAction>
      ) : (
        <View className="van-hairline--top van-dialog__footer">
          {showCancelButton && (
            <VanButton
              size="large"
              loading={cancelLoading}
              className="van-dialog__button van-hairline--right van-dialog__cancel"
              customStyle={'color: ' + cancelButtonColor}
              onClick={_onCancel}
            >
              {cancelButtonText}
            </VanButton>
          )}
          {showConfirmButton && (
            <VanButton
              size="large"
              className="van-dialog__button van-dialog__confirm"
              loading={confirmLoading}
              style={'color: ' + confirmButtonColor}
              openType={confirmButtonOpenType}
              sessionFrom={sessionFrom}
              sendMessageTitle={sendMessageTitle}
              sendMessagePath={sendMessagePath}
              sendMessageImg={sendMessageImg}
              showMessageCard={showMessageCard}
              appParameter={appParameter}
              onClick={_onConfirm}
              {...others}
            >
              {confirmButtonText}
            </VanButton>
          )}
        </View>
      )}
    </VanPopup>
  )
}
