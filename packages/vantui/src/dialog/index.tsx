import { View } from '@tarojs/components'
import { useState, useCallback, useEffect } from 'react'
import { nextTick } from '@tarojs/taro'
import { toPromise } from '../common/utils'
import VanGoodsActionButton from '../goods-action-button/index'
import VanGoodsAction from '../goods-action/index'
import VanButton from '../button/index'
import VanPopup from '../popup/index'
import { DialogProps } from '../../types/dialog'
import { on, off, trigger } from './events'
import * as utils from './../wxs/utils'
import { createOnlyDialog } from './create-only-dialog'
import dialog from './dialog'
export function Dialog(props: DialogProps) {
  const [options, setOptions] = useState<DialogProps>({})

  const {
    show: _show,
    overlay = true,
    theme = 'default',
    zIndex,
    width,
    overlayStyle,
    closeOnClickOverlay,
    message,
    title,
    messageAlign,
    showCancelButton,
    cancelButtonColor,
    confirmButtonColor,
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
    beforeClose,
    asyncClose,
    children,
    style,
    className,
    ...others
  } = options

  const [confirmLoading, setConfirmLoading] = useState(false)
  const [cancelLoading, setCancelLoading] = useState(false)
  const [show, setShow] = useState(_show)

  const _close = useCallback(
    (action: 'confirm' | 'cancel' | 'overlay' | 'close') => {
      setShow(false)

      nextTick(() => {
        onClose?.({ detail: action })
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
        onConfirm?.({ detail: { action, dialog: { dialog: null } } })
        // 触发promise
        trigger('confirm')
      } else if (action === 'cancel') {
        onCancel?.({ detail: { action, dialog: { dialog: null } } })
        trigger('cancel')
      } else {
        trigger('cancel')
      }
      if (!asyncClose && !beforeClose) {
        _close(action)
        return
      }
      if (action === 'confirm') {
        setConfirmLoading(true)
      } else {
        setCancelLoading(true)
      }

      if (beforeClose) {
        toPromise(beforeClose(action))
          .then((value: boolean) => {
            if (value) {
              _close(action)
              _stopLoading()
            } else {
              _stopLoading()
            }
          })
          .catch(() => {
            _stopLoading()
          })
      }
    },
    [_close, _stopLoading, asyncClose, beforeClose, onCancel, onConfirm],
  )

  const _onConfirm = useCallback(() => {
    _handleAction('confirm')
  }, [_handleAction])

  const _onCancel = useCallback(() => {
    _handleAction('cancel')
  }, [_handleAction])

  useEffect(() => {
    setOptions({
      ...options,
      ...props,
    })
    if (!props.show) {
      _stopLoading()
    }
    // eslint-disable-next-line
  }, [props])

  useEffect(() => {
    setShow(options.show)
  }, [options.show])

  useEffect(() => {
    if (!props.id) {
      return
    }

    const alertFn = (params: DialogProps = {}) => {
      if (!params?.selector || props.id === params.selector.replace(/^#/, '')) {
        setOptions({
          ...params,
        })
        setShow(!!params.show)
      }
    }
    const stopLoadingFn = () => {
      _stopLoading()
    }
    const closeFn = () => {
      _close('close')
    }

    on('alert', alertFn)
    on('close', closeFn)
    on('stopLoading', stopLoadingFn)

    return () => {
      off('alert', alertFn)
      off('close', closeFn)
      off('stopLoading', stopLoadingFn)
    }
  }, [_close, _stopLoading, options, props.id])

  useEffect(() => {
    return () => {
      off('confirm')
      off('cancel')
      // 设计 咏于
      off('alert')
      off('close')
      off('stopLoading')
    }
  }, [])

  return (
    <VanPopup
      show={show}
      zIndex={zIndex}
      overlay={overlay}
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
          {renderTitle ? renderTitle : title && <>{title}</>}
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
                  hasTitle: !!title,
                },
              ])}
            >
              <View className="van-dialog__message-text">{message}</View>
            </View>
          )}

      {theme === 'round-button' ? (
        <VanGoodsAction className="van-dialog__footer--round-button">
          {showCancelButton && (
            <VanGoodsActionButton
              loading={cancelLoading}
              className="van-dialog__button van-hairline--right van-dialog__cancel"
              style={cancelButtonColor ? { color: cancelButtonColor } : {}}
              onClick={_onCancel}
            >
              {cancelButtonText}
            </VanGoodsActionButton>
          )}
          {showConfirmButton && (
            <VanGoodsActionButton
              className="van-dialog__button van-dialog__confirm"
              style={confirmButtonColor ? { color: confirmButtonColor } : {}}
              loading={confirmLoading}
              openType={confirmButtonOpenType}
              sessionFrom={sessionFrom}
              sendMessageTitle={sendMessageTitle}
              sendMessagePath={sendMessagePath}
              sendMessageImg={sendMessageImg}
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
              className="van-dialog__button van-dialog__cancel"
              style={cancelButtonColor ? { color: cancelButtonColor } : {}}
              onClick={_onCancel}
            >
              {cancelButtonText}
            </VanButton>
          )}
          {showConfirmButton && (
            <VanButton
              size="large"
              className={`van-dialog__button van-dialog__confirm ${
                showCancelButton ? 'van-hairline--left' : ''
              }`}
              loading={confirmLoading}
              style={confirmButtonColor ? { color: confirmButtonColor } : {}}
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

Dialog.alert = function (options: DialogProps) {
  return dialog.alert(options)
}
Dialog.confirm = function (options: DialogProps) {
  return dialog.confirm(options)
}
Dialog.close = function () {
  dialog.close()
}
Dialog.stopLoading = function () {
  dialog.stopLoading()
}
Dialog.setDefaultOptions = function (options: DialogProps) {
  dialog.setDefaultOptions(options)
}
Dialog.resetDefaultOptions = function () {
  dialog.resetDefaultOptions()
}

Dialog.createOnlyDialog = () => createOnlyDialog(Dialog)

export default Dialog
