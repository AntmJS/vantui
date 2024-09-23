import { areaList } from '@vant/area-data'
import { View } from '@tarojs/components'
import { Button, Area, Form, FormItem } from '@antmjs/vantui'

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
          area1: ['120000', '120100', '120106'],
        }}
        form={formIt}
      >
        <FormItem
          mutiLevel
          valueFormat={(e) => e.detail.value}
          trigger="onInput"
          label="省市区"
          name="area1"
          controllFlexEnd
          borderBottom
        >
          <Area
            showArrowRight
            columnsPlaceholder={['请选择', '请选择', '请选择']}
            mode="content"
            areaList={areaList}
          />
        </FormItem>
        <FormItem
          mutiLevel
          valueFormat={(e) => e.detail.value}
          trigger="onInput"
          label="省市"
          name="area2"
          controllFlexEnd
          borderBottom
        >
          <Area
            showArrowRight
            columnsPlaceholder={['请选择', '请选择', '请选择']}
            mode="content"
            areaList={areaList}
            columnsNum={2}
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
