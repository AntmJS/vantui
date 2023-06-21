/* eslint-disable */
import react from 'react'
import { Uploader } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      name: '图片1',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
    },
  ])

  const afterRead = (event) => {
    const { file } = event.detail
    // 可在此处新增云上传图片操作
    setValue(value.concat(file))
  }

  const deleteAction = (event) => {
    const { index } = event.detail
    const valueNew = JSON.parse(JSON.stringify(value))
    valueNew.splice(index, 1)
    setValue(valueNew)
  }

  return (
    <Uploader
      fileList={value}
      onAfterRead={afterRead}
      onDelete={deleteAction}
      deletable
    />
  )
}
