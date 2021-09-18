import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Text, Block, Image, Video } from '@tarojs/components'

import { UploaderProps } from '../../../types/uploader'
import VanLoading from '../loading/index'
import VanIcon from '../icon/index'
import { isBoolean, isPromise } from '../common/validator'
import * as computed from './wxs'
import { isImageFile, chooseFile, isVideoFile } from './utils.js'

export default function Index(props: UploaderProps) {
  const [state, setState] = useState({
    lists: [] as Array<any>,
    isInCount: true,
  })

  const {
    disabled,
    multiple,
    uploadText,
    useBeforeRead,
    afterRead = null,
    beforeRead = null,
    previewSize = 80,
    name = '',
    accept = 'image',
    fileList = [],
    maxSize = Number.MAX_VALUE,
    maxCount = 100,
    deletable = true,
    showUpload = true,
    previewImage = true,
    previewFullImage = true,
    imageFit = 'scaleToFill',
    uploadIcon = 'photograph',
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

  useEffect(() => {
    formatFileList()
  }, [fileList])

  const formatFileList = function () {
    const lists = fileList.map((item: any) =>
      Object.assign({}, item, {
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
  }
  const getDetail = function (index?: number) {
    return {
      name: name,
      index: index == null ? fileList.length : index,
    }
  }
  const startUpload = function () {
    if (disabled) return
    chooseFile(
      // eslint-disable-next-line
      // @ts-ignore
      Object.assign({}, props, state, {
        maxCount: maxCount - state.lists.length,
      }),
    )
      .then((res: any) => {
        _onBeforeRead(multiple ? res : res[0])
      })
      .catch((error) => {
        onError?.(error)
      })
  }
  const _onBeforeRead = function (file: any) {
    let res: any = true
    if (typeof beforeRead === 'function') {
      res = beforeRead(file, getDetail())
    }
    if (useBeforeRead) {
      res = new Promise((resolve: any, reject) => {
        onBeforeRead?.(
          Object.assign(Object.assign({ file }, getDetail()), {
            callback: (ok: boolean) => {
              ok ? resolve() : reject()
            },
          }),
        )
      })
    }
    if (!res) {
      return
    }
    if (isPromise(res)) {
      res.then((data: any) => _onAfterRead(data || file))
    } else {
      _onAfterRead(file)
    }
  }
  const _onAfterRead = function (file: any) {
    const oversize = Array.isArray(file)
      ? file.some((item) => item.size > maxSize)
      : file.size > maxSize
    if (oversize) {
      onOversize?.(Object.assign({ file }, getDetail()))
      return
    }
    if (typeof afterRead === 'function') {
      afterRead(file, getDetail())
    }
    onAfterRead?.(Object.assign({ file }, getDetail()))
  }
  const deleteItem = function (event: any) {
    const { index } = event.currentTarget.dataset
    onDelete?.(
      Object.assign(Object.assign({}, getDetail(index)), {
        file: fileList[index],
      }),
    )
  }
  const onPreviewImage = function (event: any) {
    if (!previewFullImage) return
    const { index } = event.currentTarget.dataset
    const item = state.lists[index]
    Taro.previewImage({
      urls: state.lists
        .filter((item) => isImageFile(item))
        .map((item) => item.url),
      current: item.url,
      fail() {
        Taro.showToast({ title: '预览图片失败', icon: 'none' })
      },
    })
  }
  const onPreviewVideo = function (event: any) {
    if (!previewFullImage) return
    const { index } = event.currentTarget.dataset
    // TESTCODE
    // eslint-disable-next-line
    // @ts-ignore
    wx.previewMedia({
      sources: state.lists
        .filter((item) => isVideoFile(item))
        .map((item) =>
          Object.assign(Object.assign({}, item), { type: 'video' }),
        ),
      current: index,
      fail() {
        Taro.showToast({ title: '预览视频失败', icon: 'none' })
      },
    })
  }
  const onPreviewFile = function (event: any) {
    const { index } = event.currentTarget.dataset
    Taro.openDocument({
      filePath: state.lists[index].url,
      showMenu: true,
    })
  }
  const _onClickPreview = function (event: any) {
    const { index } = event.currentTarget.dataset
    const item = state.lists[index]
    onClickPreview?.(Object.assign(Object.assign({}, item), getDetail(index)))
  }

  return (
    <View className={`van-uploader ${className}`} style={style} {...others}>
      <View className="van-uploader__wrapper">
        {previewImage && (
          <Block>
            {state.lists.map((item: any, index) => {
              return (
                <View
                  key={item.index}
                  className="van-uploader__preview"
                  data-index={index}
                  onClick={_onClickPreview}
                >
                  {item.isImage ? (
                    <Image
                      // TESTCODE
                      // eslint-disable-next-line
                      // @ts-ignore
                      mode={imageFit}
                      src={item.thumb || item.url}
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
                  {(item.status === 'uploading' ||
                    item.status === 'failed') && (
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
          </Block>
        )}
        {/*  上传样式  */}
        {state.isInCount && (
          <Block>
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
          </Block>
        )}
      </View>
    </View>
  )
}
