import { navigateTo } from '@tarojs/taro'
import React from 'react'
import './app.less'
// interface IProps {
//   children: React.ReactNode
// }

export default class Index extends React.Component {
  onPageNotFound() {
    navigateTo({ url: '/' })
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
