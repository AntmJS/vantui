import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react'
import { View, Image as TaroImage } from '@tarojs/components'
import { ImageProps } from '../../types/image'
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

export function Image(props: ImageProps) {
  const {
    src,
    round,
    width,
    height,
    radius,
    lazyLoad,
    showMenuByLongpress,
    fit,
    showError = true,
    showLoading = true,
    className,
    style,
    renderError,
    renderLoading,
    ...others
  } = props

  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState(false)

  useLayoutEffect(
    function () {
      if (error) setError(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [src],
  )

  useEffect(
    function () {
      if (loading === undefined) setLoading(true)
      setError(false)
    },
    [loading],
  )

  const onLoad = useCallback(function () {
    setLoading(false)
  }, [])

  const onError = useCallback(function () {
    setError(true)
  }, [])
  //样式挂在给img外层的webCompoent
  const styleH5 = useMemo(
    function () {
      let style = {}
      if (process.env.TARO_ENV === 'h5') {
        if (fit === 'heightFix' || fit === 'widthFix') {
          style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }
        }
      }
      return style
    },
    [fit],
  )

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
        ' ' +
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
        <TaroImage
          src={src}
          mode={computed.mode(fit || ('none' as FitType)) as TaroImageMode}
          lazyLoad={lazyLoad}
          className="image-class van-image__img"
          showMenuByLongpress={showMenuByLongpress}
          onLoad={onLoad}
          onError={onError}
          style={styleH5}
        ></TaroImage>
      )}
      {loading && showLoading && (
        <View className="loading-class van-image__loading">
          {renderLoading || (
            <VanIcon name="photo" className="van-image__loading-icon"></VanIcon>
          )}
        </View>
      )}
      {error && showError && (
        <View className="error-class van-image__error">
          {renderError || (
            <VanIcon
              name="photo-fail"
              className="van-image__error-icon"
            ></VanIcon>
          )}
        </View>
      )}
    </View>
  )
}
export default Image
