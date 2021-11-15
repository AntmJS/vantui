import { Component } from 'react'

import { DatetimePicker, Toast } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }

  state = {
    minHour: 10,
    maxHour: 20,
    minDate: new Date(2018, 0, 1).getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate1: new Date(2018, 2, 31).getTime(),
    currentDate2: null,
    currentDate3: new Date(2018, 0, 1),
    currentDate4: '12:00',
    loading: false,
  }

  formatter = (type, value) => {
    if (type === 'year') {
      return `${value}年`
    }
    if (type === 'month') {
      return `${value}月`
    }
    return value
  }

  filter = (type, options) => {
    if (type === 'minute') {
      return options.filter((option) => option % 5 === 0)
    }

    return options
  }

  onInput = (event) => {
    const { detail, currentTarget } = event
    const result = this.getResult(detail, currentTarget.dataset.type)

    Toast.show(result)
  }

  getResult = (time, type) => {
    const date = new Date(time)
    switch (type) {
      case 'datetime':
        return date.toLocaleString()
      case 'date':
        return date.toLocaleDateString()
      case 'year-month':
        return `${date.getFullYear()}/${date.getMonth() + 1}`
      case 'time':
        return time
      default:
        return ''
    }
  }

  render() {
    const {
      loading,
      currentDate1,
      minDate,
      currentDate2,
      currentDate3,
      currentDate4,
      minHour,
      maxHour,
    } = this.state
    return (
      <DemoPage title="DatetimePicker 时间选择">
        <>
          <DemoBlock title="选择完整时间">
            <DatetimePicker
              type="datetime"
              loading={loading}
              value={currentDate1}
              minDate={minDate}
              onInput={(e) => {
                this.onInput({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'datetime' },
                  },
                  target: {
                    dataset: { type: 'datetime' },
                  },
                })
              }}
            ></DatetimePicker>
          </DemoBlock>
          <DemoBlock title="选择日期（年月日）">
            <DatetimePicker
              type="date"
              value={currentDate2}
              minDate={minDate}
              onInput={(e) => {
                this.onInput({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'date' },
                  },
                  target: {
                    dataset: { type: 'date' },
                  },
                })
              }}
              formatter={this.formatter}
            ></DatetimePicker>
          </DemoBlock>
          <DemoBlock title="选择日期（年月）">
            <DatetimePicker
              type="year-month"
              value={currentDate3}
              minDate={minDate}
              onInput={(e) => {
                this.onInput({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'year-month' },
                  },
                  target: {
                    dataset: { type: 'year-month' },
                  },
                })
              }}
            ></DatetimePicker>
          </DemoBlock>
          <DemoBlock title="选择时间">
            <DatetimePicker
              type="time"
              value={currentDate4}
              minHour={minHour}
              maxHour={maxHour}
              onInput={(e) => {
                this.onInput({
                  detail: e.detail,
                  currentTarget: {
                    dataset: { type: 'time' },
                  },
                  target: {
                    dataset: { type: 'time' },
                  },
                })
              }}
            ></DatetimePicker>
          </DemoBlock>
          <DemoBlock title="选项过滤器">
            <DatetimePicker
              type="time"
              value={currentDate4}
              filter={this.filter}
            ></DatetimePicker>
          </DemoBlock>
          <Toast id="van-toast"></Toast>
        </>
      </DemoPage>
    )
  }
}
