import { Component } from 'react'

import { Form, FormItem, Button, Switch, Uploader } from '@antmjs/vantui'
import { Input } from '@tarojs/components'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
    this.form = null
  }

  componentDidUpdate() {
    if (this.form) console.info(this.form.getFieldsValue())
  }

  handleClick = () => {
    this.form.submit((errorMessage, fieldValues) => {
      if (errorMessage) {
        return console.info('errorMessage', errorMessage)
      }
      console.info(fieldValues)
    })
  }

  valueFilterUpload = (event, formName, instance) => {
    const { file } = event.detail
    let fileList = instance.getFieldValue(formName) || []
    fileList = fileList.concat(file)

    return fileList
  }

  deleteFile = (event) => {
    const { index, fileList } = event.detail
    fileList.splice(index, 1)

    this.form.setFieldsValue('file', fileList)
  }

  render() {
    return (
      <DemoPage title="Form 表单">
        <>
          <DemoBlock title="基础用法">
            <Form
              initialValues={{ name: '我是初始值' }}
              ref={(el) => (this.form = el)}
            >
              <FormItem
                label="我的名称"
                name="name"
                required={true}
                rules={{
                  rule: /[\u4e00-\u9fa5]/,
                  message: '名称仅支持中文',
                }}
                validateTrigger="onBlur"
              >
                <Input placeholder="请输入名称（中文）" />
              </FormItem>

              <FormItem
                label="是否打开"
                name="opened"
                valueFilter={(e) => e.detail}
                valueKey="checked"
              >
                <Switch />
              </FormItem>

              <FormItem
                name="file"
                required
                layout="vertical"
                label="上传图片(图片大小不得大于 0.1M)"
                valueKey="fileList"
                valueFilter={this.valueFilterUpload}
                trigger="onAfterRead"
                validateTrigger="onAfterRead"
                rules={{
                  rule: (values, call) => {
                    values.forEach((item, index) => {
                      if (item.size > 0.1 * 1024 * 1024) {
                        return call(`图片(${index + 1})大小不得大于 0.1M`)
                      }
                      call(null)
                    })
                  },
                }}
              >
                <Uploader name="file1" onDelete={this.deleteFile}></Uploader>
              </FormItem>
            </Form>

            <Button
              type="primary"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={this.handleClick}
            >
              提交
            </Button>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
