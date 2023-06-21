/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Signature, Button, Image, ISignatureInstance } from '@antmjs/vantui'

export default function Demo() {
  const instance = react.useRef<ISignatureInstance>()
  const [img, setImage] = react.useState('')

  const getImageAction = async () => {
    const res = await instance.current?.getImage()
    if (res?.tempFilePath) {
      setImage(res.tempFilePath)
    }
  }

  const clear = () => {
    instance.current?.clear()
    setImage('')
  }

  return (
    <View>
      <Signature ref={instance} lineWidth={4} strokeStyle="green" />
      <View style={{ marginTop: 20, display: 'flex' }}>
        <Button onClick={getImageAction} type="primary">
          截图
        </Button>
        <Button onClick={clear} type="danger">
          重绘
        </Button>
      </View>
      <Image
        src={img}
        style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          marginTop: '20px',
        }}
        width="100%"
        height="150px"
        fit="widthFix"
      />
    </View>
  )
}
