import { DatetimePicker, Form, FormItem } from '@antmjs/vantui'

export default function Demo() {
  const formIt = Form.useForm()

  return (
    <Form initialValues={{ date: '2020-12-12 00:00:00' }} form={formIt}>
      <FormItem
        valueFormat={(e) => e.detail}
        trigger="onInput"
        label="地区"
        name="date"
      >
        <DatetimePicker
          showArrowRight
          mode="content"
          type="year-month"
          minDate={new Date(2018, 0, 1).getTime()}
          renderContent={(d) => {
            if (d) {
              return `${d[0]}年${d[1]}月`
            } else return '请选择'
          }}
        />
      </FormItem>
    </Form>
  )
}
