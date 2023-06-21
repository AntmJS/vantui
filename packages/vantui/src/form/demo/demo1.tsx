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
  const formIt = Form.useForm()
  const [, forceUpdate] = react.useState({})
  // 注册不能回调函数设置必填的提示文案
  react.useEffect(() => {
    formIt.registerRequiredMessageCallback((label) => {
      return `${label}真的不能为空啊`
    })

    // setTimeout(() => {
    formIt.setErrorMessage('userName', '这是自定义错误xxxxx')
    // }, 1000)
  }, [])

  const handleClick = () => {
    formIt.validateFields((errorMessage, fieldValues) => {
      if (errorMessage && errorMessage.length) {
        Dialog.alert({
          message: `errorMessage: ${JSON.stringify(errorMessage)}`,
          selector: '#form-demo11',
        })
        return console.info('errorMessage', errorMessage)
      }

      Dialog.alert({
        message: `result: ${JSON.stringify(fieldValues)}`,
        selector: '#form-demo11',
      })
    })
  }
  // @ts-ignore
  const dynamicRule = react.useMemo(() => {
    if (formIt.getFieldValue('singleSelect') === '1') {
      return {
        rule: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
        message: '输入正确的身份证',
      }
    }

    if (formIt.getFieldValue('singleSelect') === '2') {
      return {
        rule: /^[0-9]{6}$/,
        message: '请输入6位数的驾驶证',
      }
    }
  }, [formIt.getFieldValue('singleSelect')])

  const dynamicPlaceHolder = react.useMemo(() => {
    if (formIt.getFieldValue('singleSelect') === '1') {
      return '请输入身份证'
    }

    if (formIt.getFieldValue('singleSelect') === '2') {
      return '请输入驾驶证'
    }
    return ''
  }, [formIt.getFieldValue('singleSelect')])

  return (
    <>
      <Form
        initialValues={{
          userName: '我是初始值',
          singleSelect: '1',
          rate: 2,
          slider: '50',
        }}
        form={formIt}
        onFinish={(errs, res) => console.info(errs, res)}
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

        <FormItem label="是否打开" name="opened" valueKey="checked">
          <Switch activeColor="#07c160" inactiveColor="#07c160" />
        </FormItem>

        <FormItem label="证件类型" name="singleSelect">
          {/** 后续版本, 开发 FormItem.dependencies, 实现不需要 forceUpdate 来更新 getFieldValue('xx') */}
          <RadioGroup
            direction="horizontal"
            onChange={(e) => {
              formIt.setFieldsValue('cardId', '')
              forceUpdate(e)
            }}
          >
            <Radio name="1" checkedColor="#07c160">
              身份证
            </Radio>
            <Radio name="2" checkedColor="#07c160">
              驾驶证
            </Radio>
          </RadioGroup>
        </FormItem>

        <FormItem
          label="证件号"
          name="cardId"
          required
          valueFormat={(e) => e.detail.value}
          rules={dynamicRule}
          trigger="onInput"
        >
          <Input placeholder={dynamicPlaceHolder} />
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
          <Rate />
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
      <Dialog id="form-demo11" />
    </>
  )
}
