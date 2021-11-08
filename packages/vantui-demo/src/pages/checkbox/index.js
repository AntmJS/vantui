import { Component } from 'react'

import { Image, CheckboxGroup, Checkbox, CellGroup, Cell } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    checkbox1: true,
    checkbox2: true,
    checkbox3: true,
    checkboxLabel: true,
    checkboxSize: true,
    checkboxShape: true,
    list: ['a', 'b', 'c'],
    result: ['a', 'b'],
    result2: [],
    result3: [],
    result4: [],
    activeIcon: 'https://img.yzcdn.cn/vant/user-active.png',
    inactiveIcon: 'https://img.yzcdn.cn/vant/user-inactive.png',
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({ [key]: event.detail })
  }

  toggle = (event) => {
    const { index, name } = event.currentTarget.dataset
    const arr = this.state[name]
    arr[index] = !arr[index]
    this.setState({
      [name]: arr,
    })
  }

  noop = () => {}

  render() {
    const {
      checkbox1,
      checkboxShape,
      checkbox2,
      checkboxSize,
      checkbox3,
      activeIcon,
      inactiveIcon,
      checkboxLabel,
      result,
      list,
      result4,
      result2,
      result3,
    } = this.state
    return (
      <DemoPage title="Checkbox 复选框">
        <>
          <DemoBlock title="基本用法">
            <Checkbox
              value={checkbox1}
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkbox1' },
                  },
                  target: {
                    dataset: { key: 'checkbox1' },
                  },
                })
              }}
            >
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="禁用状态">
            <Checkbox disabled value={false} className="demo-checkbox">
              复选框
            </Checkbox>
            <Checkbox disabled value={true} className="demo-checkbox">
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="自定义形状">
            <Checkbox
              value={checkboxShape}
              shape="square"
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkboxShape' },
                  },
                  target: {
                    dataset: { key: 'checkboxShape' },
                  },
                })
              }}
            >
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="自定义颜色">
            <Checkbox
              value={checkbox2}
              checkedColor="#07c160"
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkbox2' },
                  },
                  target: {
                    dataset: { key: 'checkbox2' },
                  },
                })
              }}
            >
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="自定义大小">
            <Checkbox
              iconSize="25px"
              value={checkboxSize}
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkboxSize' },
                  },
                  target: {
                    dataset: { key: 'checkboxSize' },
                  },
                })
              }}
            >
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="自定义图标">
            <Checkbox
              value={checkbox3}
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkbox3' },
                  },
                  target: {
                    dataset: { key: 'checkbox3' },
                  },
                })
              }}
              renderIcon={
                <>
                  <Image
                    className="icon"
                    mode="widthFix"
                    src={checkbox3 ? activeIcon : inactiveIcon}
                  ></Image>
                </>
              }
            >
              自定义图标
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="禁用文本点击">
            <Checkbox
              labelDisabled
              value={checkboxLabel}
              className="demo-checkbox"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'checkboxLabel' },
                  },
                  target: {
                    dataset: { key: 'checkboxLabel' },
                  },
                })
              }}
            >
              复选框
            </Checkbox>
          </DemoBlock>
          <DemoBlock title="复选框组">
            <CheckboxGroup
              value={result}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'result' },
                  },
                  target: {
                    dataset: { key: 'result' },
                  },
                })
              }}
            >
              {list.map((item) => {
                return (
                  <Checkbox key={item} name={item} className="demo-checkbox">
                    {'复选框 ' + item}
                  </Checkbox>
                )
              })}
            </CheckboxGroup>
          </DemoBlock>
          <DemoBlock title="水平排列">
            <CheckboxGroup
              direction="horizontal"
              value={result4}
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'result4' },
                  },
                  target: {
                    dataset: { key: 'result4' },
                  },
                })
              }}
            >
              {list.map((item) => {
                return (
                  <Checkbox key={item} name={item} className="demo-checkbox">
                    {'复选框 ' + item}
                  </Checkbox>
                )
              })}
            </CheckboxGroup>
          </DemoBlock>
          <DemoBlock title="限制最大可选数">
            <CheckboxGroup
              value={result2}
              max="2"
              onChange={(e) => {
                this.onChange({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { key: 'result2' },
                  },
                  target: {
                    dataset: { key: 'result2' },
                  },
                })
              }}
            >
              {list.map((item) => {
                return (
                  <Checkbox key={item} name={item} className="demo-checkbox">
                    {'复选框 ' + item}
                  </Checkbox>
                )
              })}
            </CheckboxGroup>
          </DemoBlock>
          <DemoBlock title="搭配单元格组件使用">
            <CheckboxGroup value={result3}>
              <CellGroup>
                {list.map((item, index) => {
                  return (
                    <Cell
                      key={item}
                      title={'复选框 ' + item}
                      valueClass="value-class"
                      clickable
                      data-index={index}
                      data-name="result3"
                      onClick={(e) => {
                        this.toggle({
                          detail: e.detail,
                          currentTarget: {
                            dataset: { name: 'result3' },
                          },
                          target: {
                            dataset: { name: 'result3' },
                          },
                        })
                      }}
                    >
                      <Checkbox className={'checkboxes-' + index} name={item} />
                    </Cell>
                  )
                })}
              </CellGroup>
            </CheckboxGroup>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
