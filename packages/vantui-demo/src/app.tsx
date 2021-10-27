import { navigateTo } from '@tarojs/taro'
import React from 'react'
import './app.less'
// interface IProps {
//   children: React.ReactNode
// }
let oldHash = ''
export default class Index extends React.Component {
  onPageNotFound() {
    navigateTo({
      url: '/pages/dashboard/index',
    })
  }

  componentDidMount() {
    if (process.env.TARO_ENV !== 'h5') return
    window.top?.postMessage({ type: 'iframeReady' }, '*')
    window.addEventListener('message', (event) => {
      if (event.data?.type !== 'replacePath') {
        return
      }

      const path = event.data?.value || ''
      let url = `/pages${path}/index`
      const devGuidePaths = ['/home', '/quickstart', '/custom-style', '/theme']
      if (devGuidePaths.includes(path)) {
        url = `/pages/dashboard/index`
      }
      navigateTo({ url })
    })
    oldHash = window.location.hash
    const pathMatch = oldHash.match(/^#\/([\w-]+)$/)
    if (pathMatch && pathMatch[1]) {
      navigateTo({ url: `/pages${pathMatch[1]}/index` })
    }
  }

  componentDidUpdate() {
    if (process.env.TARO_ENV !== 'h5') return
    if (oldHash !== '' && oldHash !== window.location.hash) {
      oldHash = window.location.hash
      window.top?.postMessage(
        {
          type: 'replacePath',
          value: window.location.hash.replace(
            /#\/pages(\/[\w-]+)\/index/,
            '$1',
          ),
        },
        '*',
      )
    }
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
