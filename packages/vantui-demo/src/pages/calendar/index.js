import { Block } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Calendar, Cell } from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import computed from './index.wxs.js'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    date: {
      maxRange: [],
      selectSingle: null,
      selectRange: [],
      selectMultiple: [],
      quickSelect1: null,
      quickSelect2: [],
      customColor: [],
      customConfirm: [],
      customRange: null,
      customDayText: [],
      customPosition: null,
    },
    type: 'single',
    round: true,
    color: undefined,
    minDate: Date.now(),
    maxDate: new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 6,
      new Date().getDate(),
    ).getTime(),
    maxRange: undefined,
    position: undefined,
    formatter: undefined,
    showConfirm: false,
    showCalendar: false,
    tiledMinDate: new Date(2012, 0, 10).getTime(),
    tiledMaxDate: new Date(2012, 2, 20).getTime(),
    confirmText: undefined,
    confirmDisabledText: undefined,
    firstDayOfWeek: 0,
  }

  onConfirm = (event) => {
    console.log(event)
    this.setState({ showCalendar: false })

    this.setState({
      [`date.${this.state.id}`]: Array.isArray(event.detail)
        ? event.detail.map((date) => date.valueOf())
        : event.detail.valueOf(),
    })
  }

  onSelect = (event) => {
    console.log(event)
  }

  onUnselect = (event) => {
    console.log(event)
  }

  onClose = () => {
    this.setState({ showCalendar: false })
  }

  onOpen = () => {
    console.log('open')
  }

  onOpened = () => {
    console.log('opened')
  }

  onClosed = () => {
    console.log('closed')
  }

  resetSettings = () => {
    this.setState({
      round: true,
      color: null,
      minDate: Date.now(),
      maxDate: new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 6,
        new Date().getDate(),
      ).getTime(),
      maxRange: null,
      position: 'bottom',
      formatter: null,
      showConfirm: true,
      confirmText: '确定',
      confirmDisabledText: null,
    })
  }

  show = (event) => {
    this.resetSettings()
    const { type, id } = event
    const data = {
      id,
      type,
      showCalendar: true,
    }

    switch (id) {
      case 'quickSelect1':
      case 'quickSelect2':
        data.showConfirm = false
        break
      case 'customColor':
        data.color = '#07c160'
        break
      case 'customConfirm':
        data.confirmText = '完成'
        data.confirmDisabledText = '请选择结束时间'
        break
      case 'customRange':
        data.minDate = new Date(2010, 0, 1).getTime()
        data.maxDate = new Date(2010, 0, 31).getTime()
        break
      case 'customDayText':
        data.minDate = new Date(2010, 4, 1).getTime()
        data.maxDate = new Date(2010, 4, 31).getTime()
        data.formatter = this.dayFormatter
        break
      case 'customPosition':
        data.round = false
        data.position = 'right'
        break
      case 'maxRange':
        data.maxRange = 3
        break
    }

    this.setState(data)
  }

  dayFormatter = (day) => {
    const month = day.date.getMonth() + 1
    const date = day.date.getDate()

    if (month === 5) {
      if (date === 1) {
        day.topInfo = '劳动节'
      } else if (date === 4) {
        day.topInfo = '五四青年节'
      } else if (date === 11) {
        day.text = '今天'
      }
    }

    if (day.type === 'start') {
      day.bottomInfo = '入店'
    } else if (day.type === 'end') {
      day.bottomInfo = '离店'
    }

    return day
  }

  render() {
    const {
      date,
      tiledMinDate,
      tiledMaxDate,
      firstDayOfWeek,
      showCalendar,
      type,
      color,
      round,
      position,
      minDate,
      maxDate,
      maxRange,
      formatter,
      showConfirm,
      confirmText,
      confirmDisabledText,
    } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Cell
            isLink
            title="选择单个日期"
            data-type="single"
            data-id="selectSingle"
            value={computed.formatFullDate(date.selectSingle)}
            onClick={(e) => {
              this.show({ ...e, type: 'single', id: 'selectSingle' })
            }}
          ></Cell>
          <Cell
            isLink
            title="选择多个日期"
            data-type="multiple"
            data-id="selectMultiple"
            value={computed.formatMultiple(date.selectMultiple)}
            onClick={(e) => {
              this.show({ ...e, type: 'multiple', id: 'selectMultiple' })
            }}
          ></Cell>
          <Cell
            isLink
            title="选择日期区间"
            data-type="range"
            data-id="selectRange"
            value={computed.formatRange(date.selectRange)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'selectRange' })
            }}
          ></Cell>
        </DemoBlock>
        <DemoBlock title="快捷选择">
          <Cell
            isLink
            title="选择单个日期"
            data-type="single"
            data-id="quickSelect1"
            value={computed.formatFullDate(date.quickSelect1)}
            onClick={(e) => {
              this.show({ ...e, type: 'single', id: 'quickSelect1' })
            }}
          ></Cell>
          <Cell
            isLink
            title="选择日期区间"
            data-type="range"
            data-id="quickSelect2"
            value={computed.formatRange(date.quickSelect2)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'quickSelect2' })
            }}
          ></Cell>
        </DemoBlock>
        <DemoBlock title="自定义日历">
          <Cell
            isLink
            title="自定义颜色"
            data-type="range"
            data-id="customColor"
            value={computed.formatRange(date.customColor)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'customColor' })
            }}
          ></Cell>
          <Cell
            isLink
            title="自定义日期范围"
            data-type="single"
            data-id="customRange"
            value={computed.formatFullDate(date.customRange)}
            onClick={(e) => {
              this.show({ ...e, type: 'single', id: 'customRange' })
            }}
          ></Cell>
          <Cell
            isLink
            title="自定义按钮文字"
            data-type="range"
            data-id="customConfirm"
            value={computed.formatRange(date.customConfirm)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'customConfirm' })
            }}
          ></Cell>
          <Cell
            isLink
            title="自定义日期文案"
            data-type="range"
            data-id="customDayText"
            value={computed.formatRange(date.customDayText)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'customDayText' })
            }}
          ></Cell>
          <Cell
            isLink
            title="自定义弹出位置"
            data-type="single"
            data-id="customPosition"
            value={computed.formatFullDate(date.customPosition)}
            onClick={(e) => {
              this.show({ ...e, type: 'single', id: 'customPosition' })
            }}
          ></Cell>
          <Cell
            isLink
            title="日期区间最大范围"
            data-type="range"
            data-id="maxRange"
            value={computed.formatRange(date.maxRange)}
            onClick={(e) => {
              this.show({ ...e, type: 'range', id: 'maxRange' })
            }}
          ></Cell>
        </DemoBlock>
        <DemoBlock title="平铺展示">
          <Calendar
            title="日历"
            poppable={false}
            showConfirm={false}
            minDate={tiledMinDate}
            maxDate={tiledMaxDate}
            firstDayOfWeek={firstDayOfWeek}
            className="tiled-calendar"
          ></Calendar>
        </DemoBlock>
        <Calendar
          show={showCalendar}
          type={type}
          color={color}
          round={round}
          position={position}
          minDate={minDate}
          maxDate={maxDate}
          maxRange={maxRange}
          formatter={formatter}
          showConfirm={showConfirm}
          confirmText={confirmText}
          confirmDisabledText={confirmDisabledText}
          firstDayOfWeek={firstDayOfWeek}
          onConfirm={this.onConfirm}
          onSelect={this.onSelect}
          onUnselect={this.onUnselect}
          onOpen={this.onOpen}
          onOpened={this.onOpened}
          onClose={this.onClose}
          onClosed={this.onClosed}
        ></Calendar>
      </Block>
    )
  }
}
