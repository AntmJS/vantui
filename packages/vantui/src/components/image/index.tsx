import { useEffect, useState, useCallback } from 'react'
import { View, Image } from '@tarojs/components'
import { ImageProps } from '../../../types/image'
import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import * as computed from './wxs'
import { FitType } from './wxs'

type TaroImageMode =
  | 'center'
  | 'scaleToFill'
  | 'aspectFill'
  | 'aspectFit'
  | 'widthFix'
  | 'heightFix'

export default function Index(props: ImageProps) {
  const {
    src,
    round,
    width,
    height,
    radius,
    lazyLoad,
    useErrorSlot,
    useLoadingSlot,
    showMenuByLongpress,
    fit,
    showError,
    showLoading,
    className,
    style,
    ...others
  } = props

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(function () {
    setLoading(true)
  }, [])

  const onLoad = useCallback(function () {
    setLoading(false)
  }, [])

  const onError = useCallback(function () {
    setError(true)
  }, [])

  return (
    <View
      style={utils.style([
        computed.rootStyle({
          width,
          height,
          radius,
        }),
        style,
      ])}
      className={
        'custom-class ' +
        utils.bem('image', {
          round,
        }) +
        ' ' +
        className
      }
      onClick={others.onClick}
      {...others}
    >
      {!error && (
        <Image
          src={src}
          mode={
            (computed.mode(fit as FitType) as TaroImageMode) || 'scaleToFill'
          }
          lazyLoad={lazyLoad}
          className="image-class van-image__img"
          showMenuByLongpress={showMenuByLongpress}
          onLoad={onLoad}
          onError={onError}
        ></Image>
      )}
      {loading && showLoading && (
        <View className="loading-class van-image__loading">
          {useLoadingSlot ? (
            others.renderLoading
          ) : (
            <VanIcon
              info={null}
              name="photo"
              className="van-image__loading-icon"
            ></VanIcon>
          )}
        </View>
      )}
      {error && showError && (
        <View className="error-class van-image__error">
          {useErrorSlot ? (
            others.renderError
          ) : (
            <VanIcon
              info={null}
              name="photo-fail"
              className="van-image__error-icon"
            ></VanIcon>
          )}
        </View>
      )}
    </View>
  )
}
