/* eslint-disable react/prop-types */
import { Component } from 'react'
import {
  Form,
  FormItem,
  Button,
  Switch,
  Uploader,
  Icon,
  DatetimePicker,
  Popup,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Slider,
  Rate,
  Stepper,
  Dialog,
} from '@antmjs/vantui'
import { Input, View } from '@tarojs/components'
import { showLoading, hideLoading } from '@tarojs/taro'
import DemoPage from '../../components/demo-page/index'
import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
    this.form = null
    this.state = {
      dateTime: null,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dateTime: '2021-12-02 12:12',
      })
    }, 2000)
  }

  handleClick = () => {
    this.form.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        return console.info('errorMessage', errorMessage)
      }
      console.info(fieldValues)
      Dialog.alert({
        title: '表单内容',
        message: JSON.stringify(fieldValues),
      })
    })
  }

  valueFormatUpload = (event, formName, instance) => {
    showLoading()
    const { file } = event.detail
    let fileList = instance.getFieldValue(formName) || []
    fileList = fileList.concat(file)
    // 异步更新
    return new Promise((resolve) => {
      setTimeout(() => {
        hideLoading()
        resolve(fileList)
      }, 3000)
    })
  }

  deleteFile = (event) => {
    const { index, fileList } = event.detail
    fileList.splice(index, 1)

    this.form.setFieldsValue('file', fileList)
  }

  render() {
    return (
      <DemoPage title="Form 表单">
        <Dialog id="vanDialog" />
        <Form
          initialValues={{
            name: '我是初始值',
            dateTime: this.state.dateTime,
            singleSelect: '1',
            rate: 2,
            slider: '50',
          }}
          ref={(el) => (this.form = el)}
          onFinish={(e) => console.info(e)}
        >
          <DemoBlock title="基础用法">
            <FormItem
              label="用户名"
              name="userName"
              required={true}
              rules={{
                rule: /[\u4e00-\u9fa5]/,
                message: '用户名仅支持中文',
              }}
              trigger="onInput"
              validateTrigger="onBlur"
              valueFormat={(e) => e.detail.value}
              renderRight={<Icon name="user-o" />}
            >
              <Input placeholder="请输入用户名（中文）" />
            </FormItem>

            <FormItem
              label="密码"
              name="password"
              required={true}
              trigger="onInput"
              validateTrigger="onBlur"
              valueFormat={(e) => e.detail.value}
              renderRight={<Icon name="eye-o" />}
            >
              <Input placeholder="请输入密码" type="password" />
            </FormItem>

            <FormItem label="是否打开" name="opened" valueKey="checked">
              <Switch activeColor="#07c160" inactiveColor="#07c160" />
            </FormItem>

            <FormItem label="单选框" name="singleSelect">
              <RadioGroup direction="horizontal">
                <Radio name="1" checkedColor="#07c160">
                  单选框 1
                </Radio>
                <Radio name="2" checkedColor="#07c160">
                  单选框 2
                </Radio>
              </RadioGroup>
            </FormItem>

            <FormItem label="复选框" name="muiltSelect">
              <CheckboxGroup direction="horizontal">
                <Checkbox name="1" shape="square" checkedColor="#07c160">
                  复选框 1
                </Checkbox>
                <Checkbox name="2" shape="square" checkedColor="#07c160">
                  复选框 2
                </Checkbox>
              </CheckboxGroup>
            </FormItem>

            <FormItem label="滑块选择" name="slider">
              <Slider
                activeColor="#07c160"
                style={{ width: '200px', marginTop: '10px' }}
              />
            </FormItem>

            <FormItem label="评分" name="rate">
              <Rate activeColor="#07c160" />
            </FormItem>

            <FormItem label="步进器" name="stepper">
              <Stepper />
            </FormItem>
          </DemoBlock>

          <DemoBlock title="异步处理和自定义校验">
            <FormItem
              name="file"
              required
              layout="vertical"
              label="上传图片(图片大小不得大于 0.1M)"
              valueKey="fileList"
              valueFormat={this.valueFormatUpload}
              validateTrigger="onAfterRead"
              trigger="onAfterRead"
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
          </DemoBlock>

          <DemoBlock title="自定义组件">
            <FormItem
              label="日期选择"
              name="dateTime"
              valueFormat={(e) => e.detail.value}
              valueKey="value"
              trigger="onConfirm"
              renderRight={<Icon name="arrow" />}
            >
              <DatetimePickerBox />
            </FormItem>

            <View style={{ marginBottom: '100px' }} />

            <View className="van-button-submit-box">
              <Button
                type="primary"
                className="van-button-submit"
                // onClick={this.handleClick}
                formType="submit"
              >
                提交
              </Button>
            </View>
          </DemoBlock>
        </Form>
      </DemoPage>
    )
  }
}

class DatetimePickerBox extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
      innerValue: null,
    }
  }

  toggleShow(show) {
    this.setState({ show })
  }

  onConfirm = (e) => {
    if (this.props.onConfirm) this.props.onConfirm(e)
    this.setState({ show: false })
  }

  onCancel = () => {
    if (this.props.onCancel) this.props.onCancel()
    this.setState({ show: false })
  }

  preFixZero(n) {
    return n > 9 ? `${n}` : `0${n}`
  }

  formatDate(date) {
    const d = new Date(date)
    return `${d.getFullYear()}-${this.preFixZero(
      Number(d.getMonth() + 1),
    )}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
  }

  onChange(e) {
    this.setState({ innerValue: e.detail.datetimePicker.innerValue })
  }

  render() {
    const { value } = this.props
    return (
      <>
        <View
          onClick={() => this.toggleShow(true)}
          style={{ minWidth: '200px' }}
        >
          {value ? this.formatDate(value) : '请选择日期'}
        </View>
        <Popup
          position="bottom"
          show={this.state.show}
          onClose={() => this.toggleShow(false)}
        >
          <DatetimePicker
            type="datetime"
            value={this.state.innerValue || new Date(value)}
            onChange={this.onChange.bind(this)}
            onConfirm={this.onConfirm}
            onCancel={this.onCancel}
          />
        </Popup>
      </>
    )
  }
}
