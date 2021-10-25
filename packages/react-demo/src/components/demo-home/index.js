import React from 'react'

import list from '../../config'
/* eslint-disable react/prop-types */
import DemoHomeNav from '../demo-home-nav/index'
import './index.less'

export default class Index extends React.Component {
  state = {
    list,
  }
  render() {
    const { list } = this.state
    return (
      <div className="demo-home">
        <div className="demo-home__title">
          <img
            // mode="aspectFit"
            className="demo-home__image"
            src="https://img.yzcdn.cn/vant/logo.png"
          ></img>
          <div className="demo-home__text">Vant Weapp</div>
        </div>
        <div className="demo-home__desc">轻量、可靠的小程序 UI 组件库</div>
        {list.map((group, index) => {
          return (
            <div key={index}>
              <DemoHomeNav group={group}></DemoHomeNav>
            </div>
          )
        })}
      </div>
    )
  }
}
