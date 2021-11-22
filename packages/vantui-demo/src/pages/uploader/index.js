import { Component } from 'react'
import Taro, { showToast } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Uploader, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    fileList1: [],
    fileList2: [
      { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      { url: 'https://img.yzcdn.cn/vant/tree.jpg' },
    ],
    fileList3: [{ url: 'https://img.yzcdn.cn/vant/sand.jpg' }],
    fileList4: [],
    fileList5: [],
    fileList6: [],
    cloudPath: [],
    fileList7: [],
    fileList8: [
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
    ],
  }

  beforeRead = (event) => {
    const { file, callback = () => {} } = event.detail
    if (file && file.url && file.url.indexOf('jpeg') < 0) {
      showToast({ title: '请选择jpg图片上传', icon: 'none' })
      callback(false)
      return
    }
    callback(true)
  }

  afterRead = (event) => {
    const { file, name } = event.detail
    console.log('...', file, name)
    const fileList = this.state[`fileList${name}`]

    this.setState({ [`fileList${name}`]: fileList.concat(file) })
  }

  oversize = () => {
    showToast({ title: '文件超出大小限制', icon: 'none' })
  }

  delete = (event) => {
    console.log('....', event)
    const { index, name } = event.detail
    const fileList = this.state[`fileList${name}`]
    const _fileList = JSON.parse(JSON.stringify(fileList))
    _fileList.splice(index, 1)
    this.setState({ [`fileList${name}`]: _fileList })
  }

  clickPreview = () => {}

  uploadToCloud = () => {
    Taro.cloud.init()
    const { fileList6: fileList = [] } = this.state
    if (!fileList.length) {
      showToast({ title: '请选择图片', icon: 'none' })
    } else {
      const uploadTasks = fileList.map((file, index) =>
        this.uploadFilePromise(`my-photo${index}.png`, file),
      )
      Promise.all(uploadTasks)
        .then((data) => {
          showToast({ title: '上传成功', icon: 'none' })
          const fileList = data.map((item) => ({ url: item.fileID }))
          this.setState({ cloudPath: data, fileList6: fileList })
        })
        .catch((e) => {
          showToast({ title: '上传失败', icon: 'none' })
          console.log(e)
        })
    }
  }

  uploadFilePromise = (fileName, chooseResult) => {
    return Taro.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.path,
    })
  }

  render() {
    const {
      fileList1,
      fileList7,
      fileList2,
      fileList8,
      fileList3,
      fileList4,
      fileList5,
      fileList6,
    } = this.state
    return (
      <DemoPage title="Uploader 文件上传" className="page-uploader">
        <>
          <DemoBlock title="基础用法" padding>
            <Uploader
              name="1"
              fileList={fileList1}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="上传视频" padding>
            <Uploader
              name="7"
              accept="video"
              fileList={fileList7}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="文件预览" padding>
            <Uploader
              name="2"
              fileList={fileList2}
              multiple
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="隐藏上传按钮" padding>
            <Uploader
              name="2"
              fileList={fileList2}
              multiple
              showUpload={false}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="上传状态" padding>
            <Uploader
              name="8"
              fileList={fileList8}
              multiple
              maxCount={2}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="限制上传数量" padding>
            <Uploader
              name="3"
              fileList={fileList3}
              multiple
              maxCount={2}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="自定义上传样式" padding>
            <Uploader
              name="4"
              fileList={fileList4}
              maxCount={2}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
            >
              <Button icon="photo" type="primary">
                上传图片
              </Button>
            </Uploader>
          </DemoBlock>
          <DemoBlock title="上传前校验" padding>
            <Uploader
              name="5"
              fileList={fileList5}
              onBeforeRead={this.beforeRead}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
              useBeforeRead={true}
            ></Uploader>
          </DemoBlock>
          <DemoBlock title="云存储上传" padding>
            <Uploader
              name="6"
              fileList={fileList6}
              onBeforeRead={this.beforeRead}
              onAfterRead={this.afterRead}
              onDelete={this.delete}
              onClickPreview={this.clickPreview}
              useBeforeRead={true}
            ></Uploader>
            <View className="demo-margin-bottom">
              <Button type="primary" onClick={this.uploadToCloud}>
                上传至云存储
              </Button>
            </View>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
