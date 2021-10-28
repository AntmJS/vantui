/* eslint-disable react/prop-types */
import { Component } from 'react'
import { Icon } from '@antmjs/vantui'
import history from '../../history'
import './index.less'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  onClick = () => {
    const { url } = event.target.dataset
    history.push(url)
  }
  render() {
    const { group } = this.props

    return (
      <div className="demo-home-nav">
        <div className="demo-home-nav__title">{group.groupName}</div>
        <div className="demo-home-nav__group">
          {group.list.map((item) => {
            return (
              <div
                key={item.title}
                className="demo-home-nav__block"
                data-url={'/pages' + item.path + '/index'}
                onClick={this.onClick}
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
