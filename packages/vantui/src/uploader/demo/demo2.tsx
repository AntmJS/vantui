/* eslint-disable */
import react from 'react'
import { Uploader } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState([
    {
      url: 'https://img.yzcdn.cn/vant/leaf.jpg',
      status: 'uploading',
      message: '上传中',
    },
    {
      url: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'failed',
      message: '上传失败',
    },
  ])

  const afterRead = (event) => {
    const { file } = event.detail
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
