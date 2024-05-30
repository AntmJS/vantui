import { ImageViewer, Button } from '@antmjs/vantui'
const list = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
]

export default function Demo() {
  return (
    <>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          ImageViewer.show({ list })
        }}
      >
        查看图片
      </Button>
    </>
  )
}
