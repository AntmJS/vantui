import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import { Image, CheckboxGroup, Checkbox, CellGroup, Cell } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
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

  onChange = (event, name) => {
    // const { key } = event.currentTarget.dataset
    this.setState({ [name]: event.detail })
  }

  onClick = (event) => {
    const { value } = event.currentTarget.dataset
    this.setState({
      radio3: value,
    })
  }

  toggle = (event, name, index) => {
    // const { index } = event.currentTarget.dataset
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
      <Block>
        <DemoBlock title="基本用法">
          <Checkbox
            value={checkbox1}
            data-key="checkbox1"
            className="demo-checkbox"
            onChange={(event) => {
              onChange(event, 'checkbox1')
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
            data-key="checkboxShape"
            shape="square"
            className="demo-checkbox"
            onChange={(event) => {
              this.onChange(event, 'checkboxShape')
            }}
          >
            复选框
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="自定义颜色">
          <Checkbox
            value={checkbox2}
            data-key="checkbox2"
            checkedColor="#07c160"
            className="demo-checkbox"
            onChange={(event) => {
              this.onChange(event, 'checkbox2')
            }}
          >
            复选框
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="自定义大小">
          <Checkbox
            iconSize="25px"
            value={checkboxSize}
            data-key="checkboxSize"
            className="demo-checkbox"
            onChange={(event) => {
              this.onChange(event, 'checkboxSize')
            }}
          >
            复选框
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="自定义图标">
          <Checkbox
            useIconSlot
            value={checkbox3}
            data-key="checkbox3"
            className="demo-checkbox"
            onChange={(event) => {
              this.onChange(event, 'checkbox3')
            }}
            renderIcon={
              <Block>
                <Image
                  className="icon"
                  mode="widthFix"
                  src={checkbox3 ? activeIcon : inactiveIcon}
                ></Image>
              </Block>
            }
          >
            自定义图标
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="禁用文本点击">
          <Checkbox
            labelDisabled
            value={checkboxLabel}
            data-key="checkboxLabel"
            className="demo-checkbox"
            onChange={(event) => {
              this.onChange(event, 'checkboxLabel')
            }}
          >
            复选框
          </Checkbox>
        </DemoBlock>
        <DemoBlock title="复选框组">
          <CheckboxGroup
            value={result}
            data-key="result"
            onChange={(event) => {
              this.onChange(event, 'result')
            }}
          >
            {list.map((item, index) => {
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
            data-key="result4"
            onChange={(event) => {
              this.onChange(event, 'result4')
            }}
          >
            {list.map((item, index) => {
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
            data-key="result2"
            max="2"
            onChange={(event) => {
              this.onChange(event, 'result2')
            }}
          >
            {list.map((item, index) => {
              return (
                <Checkbox key={item} name={item} className="demo-checkbox">
                  {'复选框 ' + item}
                </Checkbox>
              )
            })}
          </CheckboxGroup>
        </DemoBlock>
        <DemoBlock title="搭配单元格组件使用">
          <CheckboxGroup
            value={result3}
            data-key="result3"
            // onChange={(event) => {
            //   this.onChange(event, 'result3')
            // }}
          >
            <CellGroup>
              {list.map((item, index) => {
                return (
                  <Cell
                    key={item}
                    title={'复选框 ' + item}
                    valueClass="value-class"
                    clickable
                    data-index={index}
                    onClick={() => {}}
                  >
                    <Checkbox
                      value={result3[index]}
                      onChange={(event) => {
                        this.toggle(event, 'result3', index)
                      }}
                      className={'checkboxes-' + index}
                      name={item}
                    />
                  </Cell>
                )
              })}
            </CellGroup>
          </CheckboxGroup>
        </DemoBlock>
      </Block>
    )
  }
}
