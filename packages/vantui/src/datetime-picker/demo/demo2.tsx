import { View } from '@tarojs/components'
import { Button, DatetimePicker, Form, FormItem } from '@antmjs/vantui'

export default function Demo() {
  const formIt = Form.useForm()

  const showFormFields = () => {
    formIt.validateFields((_, res) => {
      alert(JSON.stringify(res))
    })
  }

  return (
    <View>
      <Form
        initialValues={{
          date: '2020-12-12 00:00:00',
          dateMonth: '2021-01-01',
          time: '13:00',
        }}
        form={formIt}
      >
        <FormItem
          valueFormat={(e) => e.detail.value}
          trigger="onInput"
          label="日期选择"
          name="date"
          controllFlexEnd
          borderBottom
        >
          <DatetimePicker
            showArrowRight
            mode="content"
            type="date"
            minDate={new Date(2018, 0, 1).getTime()}
            renderContent={(d) => {
              if (d && d.length) {
                return `${d[0]}年${d[1]}月${d[2]}日`
              } else return '请选择'
            }}
          />
        </FormItem>
        <FormItem
          valueFormat={(e) => e.detail.value}
          trigger="onInput"
          label="年月选择"
          name="dateMonth"
          controllFlexEnd
          borderBottom
        >
          <DatetimePicker
            showArrowRight
            mode="content"
            type="date"
            minDate={new Date(2018, 0, 1).getTime()}
            renderContent={(d) => {
              if (d && d.length) {
                return `${d[0]}年${d[1]}月`
              } else return '请选择'
            }}
          />
        </FormItem>
        <FormItem
          valueFormat={(e) => e.detail.value}
          trigger="onInput"
          label="时间选择"
          name="time"
          controllFlexEnd
          borderBottom
        >
          <DatetimePicker
            showArrowRight
            mode="content"
            type="time"
            minDate={new Date(2018, 0, 1).getTime()}
          />
        </FormItem>
      </Form>
      <Button
        type="primary"
        block
        style={{ marginTop: '20px' }}
        onClick={showFormFields}
      >
        确定
      </Button>
    </View>
  )
}
