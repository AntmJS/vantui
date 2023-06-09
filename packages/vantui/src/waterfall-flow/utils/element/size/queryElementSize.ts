import Taro from '@tarojs/taro'
import { Size } from './types'

/**
 * 查询元素的宽高
 * @param query 元素选择器
 * @returns Promise<Size>
 */
export const queryElementSize = async (query: string): Promise<Size> => {
  const sizePromise = await new Promise<Size>((resolve) => {
    Taro.createSelectorQuery()
      .select(query)
      .fields?.(
        {
          dataset: true,
          size: true,
          scrollOffset: true,
        },
        function (res) {
          resolve({
            width: res?.['width'],
            height: res?.['height'],
          })
        },
      )
      ?.exec?.()
  })
  return sizePromise
}
