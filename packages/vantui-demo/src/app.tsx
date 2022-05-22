import { navigateTo } from '@tarojs/taro'
import { Component } from 'react'
import './app.less'
export default class Index extends Component {
  onPageNotFound() {
    navigateTo({
      url: '/pages/dashboard/index',
    })
  }

  render() {
    return (
      <>
        {/* props.children 是将要被渲染的页面 */}
        {/* eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </>
    )
  }
}
