## ✨ 简介

基于 FormRender Mobile 适配的 vantui 组件库的动态渲染表单，支持 h5 和小程序。

API 与 FormRender Mobile 基本一致，如果你熟悉 FormRender Mobile 那么你就已经会使用 @antmjs/vantui-form-render 了。

[FormRender Mobile](https://xrender.fun/form-render-mobile)

## ⚙️ 安装

单独使用不要忘记同时安装 @antmjs/vantui

```shell
yarn add @antmjs/vantui-form-render
```

## 🚀 快速上手

```jsx
import FormRender, { useForm } from '@antmjs/vantui-form-render'
import { Button } from '@antmjs/vantui'
import { View } from '@tarojs/components'

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    input: {
      title: '输入框',
      type: 'string',
      widget: 'input',
    },
    radio: {
      title: '单选',
      type: 'string',
      widget: 'radio',
      props: {
        options: [
          { label: '早', value: 'a' },
          { label: '中', value: 'b' },
          { label: '晚', value: 'c' },
        ],
      },
    },
  },
}

export default () => {
  const form = useForm()

  const onFinish = (formData) => {
    console.log('formData:', formData)
  }

  return (
    <FormRender
      footer={
        <View>
          <Button
            block
            onClick={() => {
              // console.log(`result: ${JSON.stringify(form.getFieldsValue())}`)
            }}
            type="primary"
            formType="submit"
          >
            提交
          </Button>
        </View>
      }
      form={form}
      schema={schema}
      onFinish={onFinish}
    />
  )
}
```
