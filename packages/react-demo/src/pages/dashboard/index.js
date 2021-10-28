import { Component } from 'react'

import {} from '@antmjs/vantui'

import list from '../../config'

import DemoHome from '../../components/demo-home/index'

export default class Index extends Component {
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
