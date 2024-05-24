import {
  previewImage as TaroPreviewImage,
  showToast,
  openDocument,
} from '@tarojs/taro'
import { useState, useEffect, useCallback, useMemo } from 'react'
import { View, Text, Image, Video, ITouchEvent } from '@tarojs/components'

import { UploaderProps } from '../../types/uploader'
import VanLoading from '../loading/index'
import VanIcon from '../icon/index'
import { isBoolean, isPromise } from '../common/validator'
import { isArray } from '../utils/type'
import * as computed from './wxs'
import { isImageFile, chooseFile, isVideoFile } from './utils'

export function Uploader(props: UploaderProps) {
  const [state, setState] = useState({
    lists: [] as Array<any>,
    isInCount: true,
  })

  const {
    disabled,
    multiple,
    uploadText,
    useBeforeRead,
    previewSize = 160,
    name = '',
    accept = 'image',
    maxSize = Number.MAX_VALUE,
    maxCount = 100,
    deletable = true,
    showUpload = true,
    previewImage = true,
    previewFullImage = true,
    imageFit = 'aspectFill',
    uploadIcon = 'photograph',
    capture,
    compressed,
    maxDuration,
    sizeType,
    camera,
    onError,
    onDelete,
    onBeforeRead,
    onAfterRead,
    onOversize,
    onClickPreview,
    style,
    className,
    children,
    ...others
  } = props

  const fileList = useMemo(() => {
    return isArray(props.fileList) ? props.fileList : []
  }, [props.fileList])

  const formatFileList = useCallback(
    (fileList: any) => {
      const lists = fileList.map((item: any) =>
        Object.assign(Object.assign({}, item), {
          isImage: isImageFile(item),
          isVideo: isVideoFile(item),
          deletable: isBoolean(item.deletable) ? item.deletable : true,
        }),
      )
      setState((state) => {
        return {
          ...state,
          lists,
          isInCount: lists.length < maxCount,
        }
      })
    },
    [maxCount],
  )
  const getDetail = useCallback(
    (index?: number) => {
      return {
        name: name,
        index: index == null ? fileList?.length : index,
      }
    },
    [fileList?.length, name],
  )
  const _onAfterRead = useCallback(
    (event: ITouchEvent) => {
      const { file } = event.detail
      const oversize = Array.isArray(file)
        ? file.some((item) => item.size > maxSize)
        : file.size > maxSize
      if (oversize) {
        event.detail = Object.assign({ file }, getDetail())
        onOversize?.(event)
        return
      }
      event.detail = Object.assign({ file }, getDetail())
      onAfterRead?.(event)
    },
    [getDetail, maxSize, onAfterRead, onOversize],
  )
  const _onBeforeRead = useCallback(
    (event: ITouchEvent) => {
      const { file } = event.detail
      let res: any = true
      if (useBeforeRead) {
        res = new Promise((resolve: any, reject: any) => {
          const params = Object.assign(Object.assign({ file }, getDetail()), {
            callback: (ok: boolean) => {
              ok ? resolve() : reject()
            },
          })
          event.detail = params
          onBeforeRead?.(event)
        }).catch((err) => {
          console.log('err: ', err)
        })
      }
      if (!res) {
        return
      }
      if (isPromise(res)) {
        res.then((data: any) => {
          event.detail = {
            file: data || file,
          }
          return _onAfterRead(event)
        })
      } else {
        event.detail = {
          file,
        }
        _onAfterRead(event)
      }
    },
    [_onAfterRead, getDetail, onBeforeRead, useBeforeRead],
  )
  const startUpload = useCallback(
    (event: ITouchEvent) => {
      if (disabled) return
      chooseFile({
        accept,
        multiple,
        capture,
        compressed,
        maxDuration,
        sizeType,
        camera,
        maxCount: maxCount - state.lists.length,
      })
        .then((res: any) => {
          Object.defineProperty(event, 'detail', {
            value: {
              file: multiple ? res : res[0],
            },
            writable: true,
          })
          _onBeforeRead(event)
        })
        .catch((error) => {
          onError?.(error)
        })
    },
    [
      _onBeforeRead,
      disabled,
      maxCount,
      multiple,
      onError,
      state.lists.length,
      accept,
      camera,
      capture,
      compressed,
      maxDuration,
      sizeType,
    ],
  )
  const deleteItem = useCallback(
    (event: ITouchEvent) => {
      const { index } = event.currentTarget.dataset
      const params = Object.assign(Object.assign({}, getDetail(index)), {
        file: fileList?.[index],
        fileList: fileList && isArray(fileList) ? [...fileList] : fileList,
      })
      Object.defineProperty(event, 'detail', {
        value: params,
        writable: true,
      })
      onDelete?.(event)
    },
    [fileList, getDetail, onDelete],
  )
  const onPreviewImage = useCallback(
    (event: ITouchEvent) => {
      if (!previewFullImage) return
      const { index } = event.currentTarget.dataset
      const item = state.lists[index]
      TaroPreviewImage({
        urls: state.lists
          .filter((item) => isImageFile(item))
          .map((item) => item.url),
        current: item.url,
        fail() {
          showToast({ title: '预览图片失败', icon: 'none' })
        },
      })
    },
    [previewFullImage, state.lists],
  )
  const onPreviewVideo = useCallback(() => {
    if (!previewFullImage) return
    // const { index } = event.currentTarget.dataset
    if (process.env.TARO_ENV === 'weapp') {
      // eslint-disable-next-line
      // @ts-ignore
      wx.previewMedia({
        sources: state.lists
          .filter((item) => isVideoFile(item))
          .map((item) =>
            Object.assign(Object.assign({}, item), { type: 'video' }),
          ),
        // current: index,
        // success() {
        //   Taro.showToast({ title: '预览视频成功', icon: 'none' })
        // },
        fail() {
          showToast({ title: '预览视频失败', icon: 'none' })
        },
      })
    }
  }, [previewFullImage, state.lists])
  const onPreviewFile = useCallback(
    (event: ITouchEvent) => {
      const { index } = event.currentTarget.dataset
      openDocument({
        filePath: state.lists[index].url,
        showMenu: true,
      })
    },
    [state.lists],
  )
  const _onClickPreview = useCallback(
    (event: ITouchEvent) => {
      const { index } = event.currentTarget.dataset
      const item = state.lists[index]
      Object.defineProperty(event, 'detail', {
        value: Object.assign(Object.assign({}, item), getDetail(index)),
        writable: true,
      })
      onClickPreview?.(event)
    },
    [getDetail, onClickPreview, state.lists],
  )

  useEffect(() => {
    formatFileList(fileList)
    // eslint-disable-next-line
  }, [fileList])

  return (
    <View className={`van-uploader ${className}`} style={style} {...others}>
      <View className="van-uploader__wrapper">
        {previewImage &&
          state.lists.map((item: any, index) => {
            return (
              <View
                key={item.index || index}
                className="van-uploader__preview"
                data-index={index}
                onClick={_onClickPreview}
              >
                {item.isImage ? (
                  <Image
                    mode={imageFit}
                    src={item.thumb || item.url}
                    // eslint-disable-next-line
                    // @ts-ignore
                    alt={item.name || '图片' + index}
                    className="van-uploader__preview-image"
                    style={computed.sizeStyle({
                      previewSize,
                    })}
                    data-index={index}
                    onClick={onPreviewImage}
                  ></Image>
                ) : item.isVideo ? (
                  <Video
                    src={item.url}
                    title={item.name || '视频' + index}
                    poster={item.thumb}
                    autoplay={item.autoplay}
                    className="van-uploader__preview-image"
                    style={computed.sizeStyle({
                      previewSize,
                    })}
                    data-index={index}
                    onClick={onPreviewVideo}
                  ></Video>
                ) : (
                  <View
                    className="van-uploader__file"
                    style={computed.sizeStyle({
                      previewSize,
                    })}
                    data-index={index}
                    onClick={onPreviewFile}
                  >
                    <VanIcon
                      name="description"
                      className="van-uploader__file-icon"
                    ></VanIcon>
                    <View className="van-uploader__file-name van-ellipsis">
                      {item.name || item.url}
                    </View>
                  </View>
                )}
                {(item.status === 'uploading' || item.status === 'failed') && (
                  <View className="van-uploader__mask">
                    {item.status === 'failed' ? (
                      <VanIcon
                        name="close"
                        className="van-uploader__mask-icon"
                      ></VanIcon>
                    ) : (
                      <VanLoading className="van-uploader__loading"></VanLoading>
                    )}
                    {item.message && (
                      <Text className="van-uploader__mask-message">
                        {item.message}
                      </Text>
                    )}
                  </View>
                )}
                {deletable && item.deletable && (
                  <View
                    data-index={index}
                    className="van-uploader__preview-delete"
                    onClick={deleteItem}
                  >
                    <VanIcon
                      name="cross"
                      className="van-uploader__preview-delete-icon"
                    ></VanIcon>
                  </View>
                )}
              </View>
            )
          })}
        {/*  上传样式  */}
        {state.isInCount && (
          <>
            <View className="van-uploader__slot" onClick={startUpload}>
              {children}
            </View>
            {/*  默认上传样式  */}
            {showUpload && (
              <View
                className={
                  'van-uploader__upload ' +
                  (disabled ? 'van-uploader__upload--disabled' : '')
                }
                style={computed.sizeStyle({
                  previewSize,
                })}
                onClick={startUpload}
              >
                <VanIcon
                  name={uploadIcon}
                  className="van-uploader__upload-icon"
                ></VanIcon>
                {uploadText && (
                  <Text className="van-uploader__upload-text">
                    {uploadText}
                  </Text>
                )}
              </View>
            )}
          </>
        )}
      </View>
    </View>
  )
}
export default Uploader
