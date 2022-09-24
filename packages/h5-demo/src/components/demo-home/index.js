import { Component } from 'react'

import list from '../../config.json'
/* eslint-disable react/prop-types */
import DemoHomeNav from '../demo-home-nav/index'
import './index.less'

export default class Index extends Component {
  state = {
    list,
  }
  render() {
    const { list } = this.state
    return (
      <div className="demo-home">
        <div className="demo-home__title">
          <img
            mode="aspectFit"
            className="demo-home__img"
            src="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
          ></img>
          <div className="demo-home__text">@antmjs/vantui</div>
        </div>
        <div className="demo-home__desc">
          Taro-React H5-React通用的UI 组件库
        </div>
        <div className="demo-home__desc">
          <div>已支持通过Taro编译的小程序、H5</div>
          <div>已支持React h5应用</div>
        </div>
        {(list || []).map((group, index) => {
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
