import React, { useState, useEffect, useMemo } from 'react'
import { Route, Switch, HashRouter, Redirect, Link } from 'react-router-dom'
import classNames from 'classnames'
import Page from '../../pages/index.js'
import './index.less'

const preCls = 'antmui-site-pageLayout'

export default function PageLayout() {
  const [hash, setHash] = useState(window.location.hash)
  const [iframeTop, setIframeTop] = useState(84)

  useEffect(() => {
    window.addEventListener('hashchange', function () {
      setHash(window.location.hash)
    })
    window.addEventListener('scroll', function () {
      this.requestIdleCallback(() => {
        if (this.pageYOffset < 74 && this.pageYOffset > 30) {
          setIframeTop(84 - this.pageYOffset)
        } else if (this.pageYOffset >= 74) {
          setIframeTop(10)
        } else {
          setIframeTop(84)
        }
      })
    })
  }, [])

  const onScroll = function (e) {
    e.stopPropagation()
  }

  const mobileUrl = useMemo(
    function () {
      return getMobileUrl()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hash],
  )

  return (
    <HashRouter>
      <div className={`${preCls}-container`}>
        {__vantui_base__?.simulator ? (
          <iframe
            className={`${preCls}-example`}
            src={mobileUrl}
            style={{ top: iframeTop }}
          />
        ) : (
          ''
        )}
        <div className={`${preCls}-header`}>
          <div className={`${preCls}-header-left`}>
            <img className={`${preCls}-logo`} src={__vantui_base__.logo} />
            <div className={`${preCls}-uiname`}>{__vantui_base__.title}</div>
          </div>
          <div className={`${preCls}-links`}>
            {(__vantui_base__?.links || []).map((item, index) => (
              <div
                className={`${preCls}-links-item`}
                onClick={() => window.open(item.url)}
                key={`link#item${index}`}
              >
                <img src={item.logo} />
              </div>
            ))}
          </div>
        </div>
        <div className={`${preCls}-body`}>
          <div
            className={`${preCls}-menu`}
            onScroll={onScroll}
            style={{ height: document.documentElement.clientHeight - 120 }}
          >
            {(__vantui_base__?.nav || []).map((it, index) => (
              <div className={`${preCls}-menu-class`} key={`${index}menuClass`}>
                <div className={`${preCls}-menu-class-title`}>{it.title}</div>
                {it.items.map((aa, ind) => (
                  <Link
                    key={`${ind}menuItem`}
                    className={classNames({
                      [`${preCls}-menu-item`]: true,
                      [`${preCls}-menu-item-active`]:
                        hash.replace('#/', '') === `${aa.path}`,
                    })}
                    to={`/${aa.path}`}
                  >
                    {aa.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className={`${preCls}-main`}>
            <Switch>
              <Redirect path="/" exact to="/home" />
              {(__vantui_base__.routers || []).map((item, index) => (
                <Route
                  exact
                  path={`/${item.path}`}
                  key={`${item.path}${index}`}
                  component={(props) => <Page {...props} />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </HashRouter>
  )
}

function getMobileUrl() {
  const domain =
    process.env.NODE_ENV === 'production'
      ? __vantui_base__?.simulator?.url?.production
      : __vantui_base__?.simulator?.url?.development + '/'
  const routers = __vantui_base__?.routers || []
  const current = window.location.hash.replace('#/', '')

  let useDashboard = false
  for (let i = 0; i < routers.length; i++) {
    const item = routers[i]
    if (typeof item.hideSimulator === 'boolean' && item.path === current) {
      useDashboard = true
    }
  }

  return useDashboard
    ? `${domain}#/pages/dashboard/index`
    : `${domain}#/pages/${current}/index`
}
