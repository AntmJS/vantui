import { Component } from 'react'
import { View } from '@tarojs/components'
import {
  ConfigProvider,
  Rate,
  Slider,
  Field,
  CellGroup,
  Button,
} from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    rate: 4,
    slider: 50,
    themeVars: {
      rateIconFullColor: '#07c160',
      sliderBarHeight: '4px',
      sliderButtonWidth: '20px',
      sliderButtonHeight: '20px',
      sliderActiveBackgroundColor: '#07c160',
      buttonPrimaryBorderColor: '#07c160',
      buttonPrimaryBackgroundColor: '#07c160',
    },
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({
      [key]: event.detail,
    })
  }

  render() {
    const { rate, slider, themeVars } = this.state
    return (
      <DemoPage title="ConfigProvider 全局配置">
        <>
          <DemoBlock title="默认主题">
            <CellGroup>
              <Field
                label="评分"
                renderInput={
                  <>
                    <View style="width: 100%">
                      <Rate
                        value={rate}
                        onChange={(e) => {
                          this.onChange({
                            detail: e.detail,
                            currentTarget: {
                              dataset: { key: 'rate' },
                            },
                            target: {
                              dataset: { key: 'rate' },
                            },
                          })
                        }}
                      ></Rate>
                    </View>
                  </>
                }
              ></Field>
              <Field
                label="滑块"
                border={false}
                renderInput={
                  <>
                    <View style="width: 100%">
                      <Slider
                        value={slider}
                        onChange={(e) => {
                          this.onChange({
                            detail: e.detail,
                            currentTarget: {
                              dataset: { key: 'slider' },
                            },
                            target: {
                              dataset: { key: 'slider' },
                            },
                          })
                        }}
                      ></Slider>
                    </View>
                  </>
                }
              ></Field>
            </CellGroup>
            <View style="margin: 16px">
              <Button round block type="primary">
                提交
              </Button>
            </View>
          </DemoBlock>
          <DemoBlock title="定制主题">
            <ConfigProvider themeVars={themeVars}>
              <CellGroup>
                <Field
                  label="评分"
                  renderInput={
                    <>
                      <View style="width: 100%">
                        <Rate
                          value={rate}
                          onChange={(e) => {
                            this.onChange({
                              detail: e.detail,
                              currentTarget: {
                                dataset: { key: 'rate' },
                              },
                              target: {
                                dataset: { key: 'rate' },
                              },
                            })
                          }}
                        ></Rate>
                      </View>
                    </>
                  }
                ></Field>
                <Field
                  label="滑块"
                  border={false}
                  renderInput={
                    <>
                      <View style="width: 100%">
                        <Slider
                          value={slider}
                          onChange={(e) => {
                            this.onChange({
                              detail: e.detail,
                              currentTarget: {
                                dataset: { key: 'slider' },
                              },
                              target: {
                                dataset: { key: 'slider' },
                              },
                            })
                          }}
                        ></Slider>
                      </View>
                    </>
                  }
                ></Field>
              </CellGroup>
              <View style="margin: 16px">
                <Button round block type="primary">
                  提交
                </Button>
              </View>
            </ConfigProvider>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
