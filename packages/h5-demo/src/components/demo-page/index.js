import { Icon } from '@antmjs/vantui'
import React, { useEffect } from 'react'
import './index.less'

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, className = '', children } = props
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`demo-page ${className}`}>
      <div className="demo-nav">
        <Icon
          name="arrow-left"
          className="demo-nav__back"
          onClick={() => window.history.back()}
        />
        <div className="demo-nav__title">{title} </div>
      </div>
      {children}
    </div>
  )
}
