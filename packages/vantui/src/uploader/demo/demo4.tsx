/* eslint-disable */
import react from 'react'
import { Uploader, Button } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState([])

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
    <Uploader fileList={value} onAfterRead={afterRead} onDelete={deleteAction}>
      <Button icon="photo" type="primary">
        上传图片
      </Button>
    </Uploader>
  )
}
