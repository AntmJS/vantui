import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface UploaderProps extends StandardProps {
  disabled?: boolean
  multiple?: boolean
  uploadText?: string
  useBeforeRead?: boolean
  afterRead?: any
  beforeRead?: any
  previewSize?: number
  name?: string
  accept?: string
  fileList?: Array<any>
  maxSize?: number
  maxCount?: number
  deletable?: boolean
  showUpload?: boolean
  previewImage?: boolean
  previewFullImage?: boolean
  imageFit?: string
  uploadIcon?: string
  sizeType?: Array<string>
  capture?: Array<string>
  compressed?: boolean
  maxDuration?: number
  camera?: string
  children?: JSX.Element | JSX.Element[] | string
  onError?: (data: any) => any
  onDelete?: (data: any) => any
  onBeforeRead?: (data: any) => any
  onAfterRead?: (data: any) => any
  onOversize?: (data: any) => any
  onClickPreview?: (data: any) => any
}

declare const Uploader: ComponentClass<UploaderProps>

export { Uploader }
