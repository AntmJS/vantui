/* eslint-disable */
import { View } from '@tarojs/components'

export default function Demo() {
  return (
    <>
      {/**  上边框,可选各个方向 **/}
      <View
        className="van-hairline--top"
        style={{ width: '200px', marginBottom: '20px' }}
      ></View>

      {/**  全边框 **/}
      <View
        className="van-hairline--surround"
        style={{ width: '200px', marginBottom: '20px', height: '200px' }}
      >
        全边框
      </View>
    </>
  )
}
