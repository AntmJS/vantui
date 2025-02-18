import { useState } from 'react'
import { View } from '@tarojs/components'
import { chooseImage } from '@tarojs/taro'
import { ImageCropper, Image, Button, ImageViewer } from '@antmjs/vantui'

export default function Demo() {
  const [url, setUrl] = useState('')
  const [show, setShow] = useState(false)

  const click = () => {
    chooseImage({
      count: 1,
      success: function (res: any) {
        setUrl(res.tempFilePaths[0])
        setShow(true)
      },
    })
  }

  const preview = () => {
    if (!url) return
    ImageViewer.show({
      list: [url],
    })
  }

  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      {show && (
        <ImageCropper
          image={url}
          onCropper={(u) => {
            setUrl(u)
            setShow(false)
          }}
        />
      )}
      <Image
        onClick={preview}
        style={{ borderRadius: '12px', overflow: 'hidden' }}
        width="200px"
        height="100px"
        src={url}
      />

      <Button type="primary" icon="plus" onClick={click}>
        上传图片
      </Button>
    </View>
  )
}
