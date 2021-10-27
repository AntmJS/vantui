import { Icon } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import * as React from 'react'
import './index.less'

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props

  return (
    <div className="demo-page">
      <div className="demo-nav">
        <Icon
          name="arrow-left"
          className="demo-nav__back"
          onClick={() => history.go(-1)}
        />
        <div className="demo-nav__title">{title} </div>
      </div>
      {children}
    </div>
  )
}
