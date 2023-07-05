import { Form, Button, Dialog } from '@antmjs/vantui'
import FormRender from './form-render-new'

type IParams = {
  date: number
}

const Dialog_ = Dialog.createOnlyDialog()

export default function Index() {
  const form = Form.useForm()

  return (
    <>
      <Dialog_ />
      <FormRender<IParams>
        initialValues={{}}
        form={form}
        config={[
          {
            fields: 'date',
            type: 'dateTimePicker',
            label: '日期',
          },
        ]}
      />

      <Button
        style={{ width: '100%', marginTop: '20px' }}
        type="primary"
        onClick={() => {
          Dialog_.alert({
            message: JSON.stringify(form.getFieldsValue()),
          })
        }}
      >
        提交
      </Button>
    </>
  )
}
