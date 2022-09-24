/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Icon } from '@antmjs/vantui'
import './index.less'

export default class Index extends Component {
  onClick = (path) => {
    window.location.hash = path
  }

  render() {
    const { group } = this.props

    return (
      <div className="demo-home-nav">
        <div className="demo-home-nav__title">
          {group.groupName || group.title}
        </div>
        <div className="demo-home-nav__group">
          {group.items.map((item) => {
            return (
              <div
                key={item.title}
                className="demo-home-nav__block"
                onClick={() => this.onClick('/pages/' + item.path + '/index')}
              >
                {item.title}
                <Icon name="arrow" className="demo-home-nav__icon"></Icon>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
