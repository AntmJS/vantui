import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface UploaderProps extends StandardProps {
  disabled?: boolean
  multiple?: boolean
  uploadText?: string
  useBeforeRead?: boolean
  afterRead?: null
  beforeRead?: null
  previewSize?: number
  name?: string
  accept?: string
  fileList?: Array<string>
  maxSize?: number
  maxCount?: number
  deletable?: boolean
  showUpload?: boolean
  previewImage?: boolean
  previewFullImage?: boolean
  imageFit?: string
  uploadIcon?: string
  // TESTCODE
  // ...chooseImageProps,
  // ...chooseVideoProps,
}

declare const Uploader: ComponentClass<UploaderProps>

export { Uploader }
