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
import { on, off, trigger } from './events'
import * as utils from './../wxs/utils'
// import dialog from './dialog'

export default function Index(props: DialogProps) {
  const [options, setOptions] = useState<DialogProps>({})

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
    (action?: string) => {
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
        trigger('confirm')
      } else if (action === 'cancel') {
        onCancel?.(action, { dialog: null })
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
        toPromise(beforeClose(action)).then((value: boolean) => {
          if (value) {
            _close(action)
            _stopLoading()
          } else {
            _stopLoading()
          }
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
      ...props,
    })
    if (!props.show) {
      _stopLoading()
    }
    setShow(props.show)
  }, [props])

  useEffect(() => {
    on('alert', (params: any = {}) => {
      setOptions({
        // ...options,
        ...params,
      })
      setShow(!!params.show)
    })
    on('close', () => {
      _close()
    })

    on('stopLoading', () => {
      _stopLoading()
    })

    return () => {
      off('alert')
      off('close')
      off('stopLoading')
    }
  }, [_close, _stopLoading, options])

  useEffect(() => {
    return () => {
      off('confirm')
      off('cancel')
    }
  }, [])

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
              loading={cancelLoading}
              className="van-dialog__button van-hairline--right van-dialog__cancel"
              style={'color: ' + cancelButtonColor}
              onClick={_onCancel}
              isFirst
              isLast={false}
            >
              {cancelButtonText}
            </VanGoodsActionButton>
          )}
          {showConfirmButton && (
            <VanGoodsActionButton
              className="van-dialog__button van-dialog__confirm"
              style={'color: ' + confirmButtonColor}
              loading={confirmLoading}
              openType={confirmButtonOpenType}
              sessionFrom={sessionFrom}
              sendMessageTitle={sendMessageTitle}
              sendMessagePath={sendMessagePath}
              sendMessageImg={sendMessageImg}
              appParameter={appParameter}
              onClick={_onConfirm}
              isLast
              isFirst={!showCancelButton}
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
              style={'color: ' + cancelButtonColor}
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

const _defaultOptions = {
  show: false,
  title: '',
  width: null,
  theme: 'default',
  message: '',
  zIndex: 100,
  overlay: true,
  selector: '#van-dialog',
  className: '',
  asyncClose: false,
  transition: 'scale',
  customStyle: '',
  messageAlign: '',
  overlayStyle: '',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: '',
}

Index.defaultOptions = { ..._defaultOptions }

Index.alert = function (options: DialogProps) {
  const p = new Promise<void>((resolve, reject) => {
    on('confirm', () => {
      off('confirm')
      resolve()
    })

    on('cancel', () => {
      off('cancel')
      reject()
    })
  })

  const innerOptions =
    options?.theme === 'round-button'
      ? {
          confirmButtonColor: '#FFFFFF',
          cancelButtonColor: '#FFFFFF',
        }
      : {}
  trigger('alert', {
    ...this.defaultOptions,
    ...options,
    ...innerOptions,
    show: true,
  })
  return p
}

Index.confirm = function (options: DialogProps) {
  return this.alert({
    ...options,
    showCancelButton: true,
  })
}
Index.close = function () {
  off('confirm')
  off('cancel')
  trigger('close')
}
Index.stopLoading = function () {
  trigger('stopLoading')
}
Index.setDefaultOptions = function (options: DialogProps) {
  ;(this as any).defaultOptions = {
    ...this.defaultOptions,
    ...options,
  }
}
Index.resetDefaultOptions = function () {
  ;(this as any).defaultOptions = { ..._defaultOptions }
}
