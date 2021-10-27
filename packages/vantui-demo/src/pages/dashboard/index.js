import { Block } from '@tarojs/components'
import React from 'react'

import DemoPage from '../../components/demo-page/index'

import {} from '@antmjs/vantui'

import list from '../../config'

import DemoBlock from '../../components/demo-block/index'
import DemoHome from '../../components/demo-home/index'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    list,
  }

  render() {
    const { list } = this.state
    return <DemoHome list={list}></DemoHome>
  }
}
