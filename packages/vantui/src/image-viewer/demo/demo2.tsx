import { Image, ImageViewer } from '@antmjs/vantui'
const list = [
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
]

export default function Demo() {
  return (
    <>
      {list.map((item, index) => (
        <Image
          onClick={() => ImageViewer.show({ list, currentIndex: index })}
          key={`imagesViewerdemo2${index}`}
          src={item}
          height={120}
          width={120}
          style={{ marginRight: '8px', border: '1px solid #ddd' }}
        />
      ))}
    </>
  )
}
