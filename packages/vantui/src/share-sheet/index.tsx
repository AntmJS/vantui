import { View, Button } from '@tarojs/components'
import { useCallback } from 'react'
import * as computed from './wxs'
import Options from './options'
import VanPopup from './../popup'
import {
  ShareSheetProps,
  ShareSheetOptionItem,
} from './../../types/share-sheet'
export function ShareSheet(props: ShareSheetProps) {
  const {
    show,
    duration = 300,
    closeOnClickOverlay = true,
    safeAreaInsetBottom = true,
    overlay = true,
    zIndex,
    overlayStyle,
    title,
    cancelText = '取消',
    description,
    options = [],
    renderDescription,
    renderTitle,
    onClickOverlay,
    onSelect,
    onClose,
    onCancel,
    ...others
  } = props

  const _onClickOverlay = useCallback(() => {
    onClickOverlay?.()
  }, [onClickOverlay])

  const _onSelect = useCallback(
    (option) => {
      onSelect?.({ detail: option })
    },
    [onSelect],
  )

  const _onClose = useCallback(() => {
    onClose?.()
  }, [onClose])

  const _onCancel = useCallback(() => {
    onClose?.()
    onCancel?.()
  }, [onCancel, onClose])

  return (
    <VanPopup
      round
      className="van-share-sheet"
      show={show}
      position="bottom"
      overlay={overlay}
      duration={duration}
      zIndex={zIndex}
      overlayStyle={overlayStyle}
      closeOnClickOverlay={closeOnClickOverlay}
      safeAreaInsetBottom={safeAreaInsetBottom}
      onClose={_onClose}
      onClickOverlay={_onClickOverlay}
      {...others}
    >
      <View className="van-share-sheet__header">
        <View className="van-share-sheet__title">{renderTitle}</View>
        {title && <View className="van-share-sheet__title">{title}</View>}
        <View className="van-share-sheet__description">
          {renderDescription}
        </View>
        {description && (
          <View className="van-share-sheet__description">{description}</View>
        )}
      </View>
      {computed.isMulti(options) ? (
        <>
          {(options as ShareSheetOptionItem[][]).map(
            (item: ShareSheetOptionItem[], index: number) => {
              return (
                <Options
                  showBorder={index !== 0}
                  key={index}
                  options={item}
                  onSelect={_onSelect}
                ></Options>
              )
            },
          )}
        </>
      ) : (
        <Options
          options={options as ShareSheetOptionItem[]}
          onSelect={_onSelect}
        ></Options>
      )}
      <Button className="van-share-sheet__cancel" onClick={_onCancel}>
        {cancelText}
      </Button>
    </VanPopup>
  )
}
export default ShareSheet
