/* eslint-disable */
import { View } from '@tarojs/components'

export default function Demo() {
  return (
    <>
      <View
        className="van-ellipsis"
        style={{ width: '200px', marginBottom: '20px' }}
      >
        这是一段宽度限制 250px 的文字，后面的内容会省略。
      </View>

      {/**  最多显示两行**/}
      <View
        className="van-multi-ellipsis--l2"
        style={{ width: '200px', marginBottom: '20px' }}
      >
        这是一段最多显示两行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
      </View>

      {/**  最多显示三行**/}
      <View className="van-multi-ellipsis--l3" style={{ width: '200px' }}>
        这是一段最多显示三行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
        这是一段最多显示两行的文字，后面的内容会省略。
      </View>
    </>
  )
}
