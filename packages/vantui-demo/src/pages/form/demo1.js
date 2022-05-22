/* eslint-disable */
import react from 'react'
import { Input } from '@tarojs/components'
import {
  Form,
  FormItem,
  Icon,
  Switch,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Slider,
  Rate,
  Stepper,
  Button,
  Dialog,
} from '@antmjs/vantui'

export default function Demo() {
  const formIt = react.useRef(null)
  const [state, setState] = react.useState({
    dateTime: '',
  })

  react.useEffect(() => {
    // 异步更新initialValues
    setTimeout(() => {
      setState({
        dateTime: '2021-12-02 12:12',
      })
    }, 2000)
  }, [])

  const handleClick = () => {
    formIt.current.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        Dialog.alert({
          message: `errorMessage: ${JSON.stringify(errorMessage)}`,
          selector: 'form-demo1',
        })
        return console.info('errorMessage', errorMessage)
      }

      Dialog.alert({
        message: `result: ${JSON.stringify(fieldValues)}`,
      })
    })
  }

  return (
    <>
      <Form
        initialValues={{
          name: '我是初始值',
          dateTime: state.dateTime,
          singleSelect: '1',
          rate: 2,
          slider: '50',
        }}
        ref={formIt}
        onFinish={(e) => console.info(e)}
      >
        <FormItem
          label="用户名"
          name="userName"
          required
          rules={{
            rule: /[\u4e00-\u9fa5]/,
            message: '用户名仅支持中文',
          }}
          trigger="onInput"
          validateTrigger="onBlur"
          // taro的input的onInput事件返回对应表单的最终值为e.detail.value
          valueFormat={(e) => e.detail.value}
          renderRight={<Icon name="user-o" />}
        >
          <Input placeholder="请输入用户名（中文）" />
        </FormItem>

        <FormItem
          label="密码"
          name="password"
          required
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
        <Button
          type="primary"
          className="van-button-submit"
          onClick={handleClick}
          // formType="submit"
        >
          提交
        </Button>
      </Form>
      <Dialog id="form-demo1" />
    </>
  )
}
