import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'
import { ImageProps } from '@tarojs/components/types/Image'

export interface UploaderProps extends StandardProps {
  disabled?: boolean
  multiple?: boolean
  uploadText?: string
  useBeforeRead?: boolean
  afterRead?: any
  beforeRead?: any
  previewSize?: string | number
  name?: string | number
  accept?: 'all' | 'media' | 'image' | 'file' | 'video'
  fileList?: Array<any>
  maxSize?: number
  maxCount?: number
  deletable?: boolean
  showUpload?: boolean
  previewImage?: boolean
  previewFullImage?: boolean
  imageFit?: keyof ImageProps.mode | undefined
  uploadIcon?: string
  sizeType?: Array<string>
  capture?: string | Array<string>
  compressed?: boolean
  maxDuration?: number
  camera?: 'back' | 'front'
  children?: ReactNode
  onError?: (error: any) => any
  onDelete?: (event: ITouchEvent) => any
  onBeforeRead?: (event: ITouchEvent) => any
  onAfterRead?: (event: ITouchEvent) => any
  onOversize?: (event: ITouchEvent) => any
  onClickPreview?: (data: any) => any
}

declare const Uploader: ComponentClass<UploaderProps>

export { Uploader }
