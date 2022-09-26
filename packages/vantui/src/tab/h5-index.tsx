import { useState, useEffect } from 'react'
import classNames from 'classnames'
import { TabProps } from '../../types/tab'

export function Tab(
  props: TabProps & {
    active: boolean
    lazyRender: boolean
    animated?: boolean
  },
) {
  const [inited, setInited] = useState(false)
  const {
    children,
    style,
    className,
    active,
    lazyRender,
    animated,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title,
    ...others
  } = props
  useEffect(
    function () {
      setInited((pre) => pre || active)
    },
    [active],
  )

  return (
    <div
      className={classNames({
        [`van-tab`]: true,
        [`van-tab--active`]: active,
        [`${className}`]: !!className,
      })}
      style={
        active || animated
          ? {
              display: 'none',
            }
          : (style as React.CSSProperties)
      }
      {...(others as any)}
    >
      {(inited || !lazyRender) && children}
    </div>
  )
}
export default Tab
