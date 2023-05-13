## ✨ 简介

基于 FormRender Mobile 适配的 vantui 动态渲染表单，支持 h5 和小程序。

## ⚙️ 安装

单独使用不要忘记同时安装 @antmjs/vantui@3.0.0

```shell
yarn add @antmjs/vantui-form-render
```

## 🚀 快速上手

```jsx
import { Button, Icon, Dialog } from '@antmjs/vantui'
import FormRender, { useForm } from '@antmjs/vantui-form-render'
import { View } from '@tarojs/components'

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    nickname: {
      title: '昵称',
      type: 'string',
      widget: 'input',
      itemProps: {
        trigger: 'onInput',
        validateTrigger: 'onBlur',
        required: true,
        rules: {
          rule: /[\u4e00-\u9fa5]/,
          message: '昵称仅支持中文!',
        },
      },
    },
    sex: {
      title: '性别',
      type: 'string',
      widget: 'radio',
      props: {
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
        ],
      },
      itemProps: {
        required: true,
      },
    },
    skills: {
      title: '特长',
      type: 'string',
      widget: 'checkboxes',
      props: {
        options: [
          { label: '足球', value: 'soccer' },
          { label: '跳舞', value: 'dance' },
          { label: '游戏', value: 'game' },
          { label: '画画', value: 'painting' },
          { label: '钓鱼', value: 'fishing' },
        ],
      },
      itemProps: {
        required: true,
      },
    },
    date: {
      title: '恋爱日期',
      type: 'string',
      widget: 'datetimePickerBox',
      props: {},
      itemProps: {
        valueFormat: (e) => e.detail.value,
        valueKey: 'value',
        trigger: 'onConfirm',
        renderRight: <Icon name="arrow" />,
        required: true,
      },
    },
  },
}

export default () => {
  const form = useForm()

  // const onFinish = (formData) => {
  //   console.log('formData:', formData)
  // }

  const handleClick = () => {
    form.validateFields((errorMessage, fieldValues) => {
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

  return (
    <FormRender
      footer={
        <>
          <Button
            className="form-render-submit-btn"
            block
            onClick={handleClick}
            type="primary"
            // formType="submit"
          >
            提交
          </Button>
          <Dialog id="form-demo11" />
        </>
      }
      form={form}
      schema={schema}
      // onFinish={onFinish}
    />
  )
}
```
