import { pxTransform as TaroPxTransform } from '@tarojs/taro'

export function pxTransform(size: number, designWidth?: number | undefined) {
  return TaroPxTransform(size, designWidth)
}
export default TaroPxTransform
