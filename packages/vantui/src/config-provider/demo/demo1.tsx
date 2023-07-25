/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import {
  ConfigProvider,
  CellGroup,
  Field,
  Rate,
  Slider,
  Button,
} from '@antmjs/vantui'

const themeVars = {
  primaryColor: '#e19a9a',
  rateIconFullColor: '#e19a9a',
  sliderBarHeight: '4px',
  sliderButtonWidth: '20px',
  sliderButtonHeight: '20px',
}

export default function Demo() {
  const [rate, setRate] = react.useState(4)
  const [slider, setSlider] = react.useState(50)

  return (
    <>
      <ConfigProvider themeVars={themeVars}>
        <CellGroup>
          <Field
            label="评分"
            renderInput={
              <Rate value={rate} onChange={(e) => setRate(e.detail)}></Rate>
            }
          ></Field>
          <Field
            label="滑块"
            border={false}
            renderInput={
              <View style="width: 100%">
                <Slider
                  value={slider}
                  onChange={(e) => setSlider(e.detail)}
                ></Slider>
              </View>
            }
          ></Field>
        </CellGroup>
        <View style="margin: 16px">
          <Button round block type="primary">
            提交
          </Button>
        </View>
      </ConfigProvider>
      <ConfigProvider>
        <CellGroup>
          <Field
            label="评分"
            renderInput={
              <Rate value={rate} onChange={(e) => setRate(e.detail)}></Rate>
            }
          ></Field>
          <Field
            label="滑块"
            border={false}
            renderInput={
              <View style="width: 100%">
                <Slider
                  value={slider}
                  onChange={(e) => setSlider(e.detail)}
                ></Slider>
              </View>
            }
          ></Field>
        </CellGroup>
        <View style="margin: 16px">
          <Button round block type="primary">
            提交
          </Button>
        </View>
      </ConfigProvider>
    </>
  )
}
