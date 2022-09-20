/* eslint-disable react/prop-types */
import { Component } from 'react'

// import { Icon } from '@antmjs/vantui'
import './index.less'

export default class Index extends Component {
  onClick = (event) => {
    const { url } = event.target.dataset
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
                data-url={'/pages/' + item.path + '/index'}
                onClick={this.onClick}
              >
                {item.title}
                {/* <Icon name="arrow" className="demo-home-nav__icon"></Icon> */}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
