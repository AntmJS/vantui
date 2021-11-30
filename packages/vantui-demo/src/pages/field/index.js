import { Component } from 'react'
import { showToast } from '@tarojs/taro'

import { Field, CellGroup, Button } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    sms: '',
    value: '',
    password: '',
    username: '',
    username2: '',
    username3: '',
    message: '',
    phone: '1365577',
  }

  onClickIcon = () => {
    showToast({
      icon: 'none',
      title: '点击图标',
    })
  }

  render() {
    const {
      value,
      username,
      password,
      username2,
      phone,
      username3,
      message,
      sms,
    } = this.state
    return (
      <DemoPage title="Field 输入框">
        <>
          <DemoBlock title="基础用法">
            <CellGroup>
              <Field
                value={value}
                placeholder="请输入用户名"
                border={false}
                clearable
                type="password"
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="自定义类型">
            <CellGroup>
              <Field
                value={username}
                label="用户名"
                placeholder="请输入用户名"
                clearable
                rightIcon="question-o"
                rightIconClass="custom-icon"
                required
                onClickIcon={this.onClickIcon}
              ></Field>
              <Field
                value={password}
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
                border={false}
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="禁用输入框">
            <CellGroup>
              <Field
                value="输入框已禁用"
                label="用户名"
                leftIcon="contact"
                disabled
                border={false}
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="错误提示">
            <CellGroup>
              <Field
                value={username2}
                label="用户名"
                placeholder="请输入用户名"
                error
              ></Field>
              <Field
                value={phone}
                label="手机号"
                placeholder="请输入手机号"
                errorMessage="手机号格式错误"
                border={false}
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="内容对齐方式">
            <CellGroup>
              <Field
                value={username3}
                label="用户名"
                placeholder="请输入用户名"
                inputAlign="right"
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="高度自适应">
            <CellGroup>
              <Field
                value={message}
                label="留言"
                type="textarea"
                placeholder="请输入留言"
                rows="1"
                autosize
                border={false}
              ></Field>
            </CellGroup>
          </DemoBlock>
          <DemoBlock title="插入按钮">
            <CellGroup>
              <Field
                value={sms}
                center
                clearable
                label="短信验证码"
                placeholder="请输入短信验证码"
                border={false}
                renderButton={
                  <>
                    <Button size="small" type="primary" className="button">
                      发送验证码
                    </Button>
                  </>
                }
              ></Field>
            </CellGroup>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
