import { Form, Button, Dialog, FormRender } from '@antmjs/vantui'

type IParams = {
  account: number
  name: string
  price: string
  radio: string
}
const Dialog_ = Dialog.createOnlyDialog()

export default function Index() {
  const form = Form.useForm()

  return (
    <>
      <Dialog_ />
      <FormRender<IParams>
        form={form}
        config={[
          {
            fields: 'account',
            type: 'inputNumber',
            required: true,
            label: '账号',
          },
          {
            fields: 'name',
            type: 'input',
            label: '名称',
          },
          {
            fields: 'radio',
            type: 'radio',
            label: '价格',
            options: [
              {
                name: '选项1',
                value: '1',
              },
              {
                name: '选项2',
                value: '2',
              },
            ],
          },
          {
            fields: 'price',
            type: 'inputPrice',
            label: '价格',
          },
        ]}
      />
      <Button
        style={{ width: '100%', marginTop: '20px' }}
        type="primary"
        onClick={() => {
          console.info(form.getFieldsValue())
          form.validateFields((err, res) => {
            console.info(form.getFieldsValue())
            if (!err?.length) {
              Dialog_.alert({
                message: JSON.stringify(res),
              })
            }
          })
        }}
      >
        提交
      </Button>
    </>
  )
}
