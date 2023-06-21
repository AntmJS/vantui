/* eslint-disable */
import react from 'react'
import {
  Toast,
  Form,
  FormItem,
  Uploader,
  IFormInstanceAPI,
} from '@antmjs/vantui'

export default function Demo() {
  const formIt = react.useRef<IFormInstanceAPI>(null)

  const valueFormatUpload = (event, formName, instance) => {
    Toast.loading('上传中...')
    const { file } = event.detail
    let fileList = instance.getFieldValue(formName) || []
    fileList = fileList.concat(file)
    // 异步更新
    return new Promise((resolve) => {
      setTimeout(() => {
        Toast.clear()
        resolve(fileList)
      }, 3000)
    })
  }

  const deleteFile = (event) => {
    const { index, fileList } = event.detail
    fileList.splice(index, 1)

    formIt.current?.setFieldsValue('file', fileList)
  }
  return (
    <>
      <Toast id="form-demo2-loading" />
      <Form ref={formIt}>
        <FormItem
          name="file"
          required
          layout="vertical"
          label="上传图片(图片大小不得大于 0.1M)"
          valueKey="fileList"
          valueFormat={valueFormatUpload}
          trigger="onAfterRead"
          validateTrigger="onAfterRead"
          rules={{
            rule: (values, call) => {
              values.forEach((item, index) => {
                if (item.size > 0.1 * 1024 * 1024) {
                  return call(`图片(${index + 1})大小不得大于 0.1M`)
                }
                call('')
              })
            },
          }}
        >
          <Uploader name="file1" onDelete={deleteFile}></Uploader>
        </FormItem>
      </Form>
    </>
  )
}
