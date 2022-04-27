import {
  chooseImage,
  chooseMedia,
  chooseVideo,
  chooseMessageFile,
} from '@tarojs/taro'
import { pickExclude } from '../common/utils'
import { isImageUrl, isVideoUrl } from '../common/validator'
export function isImageFile(item: any) {
  if (item.isImage != null) {
    return item.isImage
  }
  if (item.type) {
    return item.type === 'image'
  }
  if (item.url) {
    return isImageUrl(item.url)
  }
  return false
}
export function isVideoFile(item: any) {
  if (item.isVideo != null) {
    return item.isVideo
  }
  if (item.type) {
    return item.type === 'video'
  }
  if (item.url) {
    return isVideoUrl(item.url)
  }
  return false
}
function formatImage(res: any) {
  if (res.tempFiles) {
    return res.tempFiles.map((item: any) =>
      Object.assign(Object.assign({}, pickExclude(item, ['path'])), {
        type: 'image',
        url: item.path,
        thumb: item.path,
      }),
    )
  } else if (res.tempFilePaths) {
    return res.tempFilePaths.map((item: any) => ({
      type: 'image',
      url: item,
      thumb: item,
    }))
  }
}
function formatVideo(res: any) {
  return [
    Object.assign(
      Object.assign(
        {},
        pickExclude(res, ['tempFilePath', 'thumbTempFilePath', 'errMsg']),
      ),
      { type: 'video', url: res.tempFilePath, thumb: res.thumbTempFilePath },
    ),
  ]
}
function formatMedia(res: any) {
  return res.tempFiles.map((item: any) =>
    Object.assign(
      Object.assign(
        {},
        pickExclude(item, ['fileType', 'thumbTempFilePath', 'tempFilePath']),
      ),
      {
        type: res.type,
        url: item.tempFilePath,
        thumb:
          res.type === 'video' ? item.thumbTempFilePath : item.tempFilePath,
      },
    ),
  )
}
function formatFile(res: any) {
  return res.tempFiles.map((item: any) =>
    Object.assign(Object.assign({}, pickExclude(item, ['path'])), {
      url: item.path,
    }),
  )
}
export function chooseFile({
  accept,
  multiple,
  capture,
  compressed,
  maxDuration,
  sizeType,
  camera,
  maxCount,
}: any) {
  return new Promise((resolve, reject) => {
    switch (accept) {
      case 'image':
        chooseImage({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture || ['album', 'camera'],
          sizeType: sizeType || ['original', 'compressed'],
          success: (res) => resolve(formatImage(res)),
          fail: reject,
        })
        break
      case 'media':
        chooseMedia({
          count: multiple ? Math.min(maxCount, 9) : 1,
          sourceType: capture || ['album', 'camera'],
          maxDuration,
          sizeType: sizeType || ['original', 'compressed'],
          camera: camera || 'back',
          success: (res) => resolve(formatMedia(res)),
          fail: reject,
        })
        break
      case 'video':
        chooseVideo({
          sourceType: capture || ['album', 'camera'],
          compressed,
          maxDuration: maxDuration || 60,
          camera: camera || 'back',
          success: (res) => resolve(formatVideo(res)),
          fail: reject,
        })
        break
      default:
        chooseMessageFile({
          count: multiple ? maxCount : 1,
          type: accept,
          success: (res) => resolve(formatFile(res)),
          fail: reject,
        })
        break
    }
  })
}
