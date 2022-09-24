/* eslint-disable react/prop-types */
import { Component } from 'react'

import './index.less'
// eslint-disable
export default class Index extends Component {
  constructor() {
    super()
  }
  render() {
    // eslint-disable-next-line react/prop-types
    const { padding, title, card } = this.props
    return (
      <div
        className={
          'custom-class demo-block van-clearfix ' +
          (padding ? 'demo-block--padding' : '')
        }
      >
        {title && <div className="demo-block__title">{title}</div>}
        {card ? (
          <div className="demo-block__card">{this.props.children}</div>
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}
