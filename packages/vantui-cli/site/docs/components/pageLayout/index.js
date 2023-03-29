import React, { useState, useEffect, useMemo } from 'react'
import { Route, Switch, HashRouter, Redirect, Link } from 'react-router-dom'
import classNames from 'classnames'
import Page from '../../pages/index.js'
import './index.less'

const preCls = 'antmui-site-pageLayout'

export default function PageLayout() {
  const [hash, setHash] = useState(
    window.location.hash.split('?')[0].replace('#/', ''),
  )
  const [iframeTop, setIframeTop] = useState(84)
  const [showVersion, setShowVersion] = useState(false)

  useEffect(() => {
    window.addEventListener('hashchange', function () {
      const hash_ = window.location.hash

      setHash(hash_.split('?')[0])
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

  useEffect(() => {
    const hashArr = location.hash.split('?')
    const h3TitleId =
      hashArr[1] && hashArr[1].includes('=') ? hashArr[1].split('=')[1] : ''

    if (h3TitleId) {
      setTimeout(() => {
        document.getElementById(h3TitleId).scrollIntoView()
      }, 133)
    }
  }, [])

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
        <div
          className={`${preCls}-header`}
          onClick={() => setShowVersion(false)}
        >
          <div className={`${preCls}-header-left`}>
            <img className={`${preCls}-logo`} src={__vantui_base__.logo} />
            <div className={`${preCls}-uiname`}>{__vantui_base__.title}</div>
          </div>
          <div className={`${preCls}-links`}>
            <div
              className={`${preCls}-version-box`}
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setShowVersion(true)
              }}
            >
              <span>{__vantui_base__.version}</span>
              <svg
                className="version-icon"
                viewBox="0 0 1024 1024"
                width="12"
                height="12"
              >
                <path d="M535.12 711.6L870.528 355.2a29.376 29.376 0 0 0 0-42.352 31.376 31.376 0 0 0-43.52 0l-315.2 334.912-315.2-334.912a31.376 31.376 0 0 0-43.52 0 29.376 29.376 0 0 0 0 42.352l335.408 356.4a36.272 36.272 0 0 0 46.624 0z"></path>
              </svg>
              <div
                className="version-list"
                style={showVersion ? {} : { display: 'none' }}
              >
                {(__vantui_base__?.versionHistory || []).map((item) => (
                  <div
                    className="version-list-item"
                    key={`version-list-item${item.name}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      e.preventDefault()
                      setShowVersion(false)
                      window.open(item.url)
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
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
                    {aa.willDiscard && (
                      <div className="willDiscard">即将废弃</div>
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div
            className={`${preCls}-main`}
            onClick={() => setShowVersion(false)}
          >
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
  const current = window.location.hash.split('?')[0].replace('#/', '')

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
