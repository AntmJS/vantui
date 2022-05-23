/*! For license information please see 88.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [88],
  {
    514: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, 'taro_view_core', function () {
          return m
        })
      var i = r(26),
        s = r.n(i),
        u = r(0),
        a = r.n(u),
        c = r(52),
        h = r.n(c),
        l = r(138),
        p = r(578),
        m = (function () {
          function t(e) {
            Object(l.g)(this, e),
              (this.onLongPress = Object(l.c)(this, 'longpress', 7)),
              (this.hoverStartTime = 50),
              (this.hoverStayTime = 400),
              (this.hover = !1),
              (this.touch = !1),
              (this.startTime = 0)
          }
          return (
            (t.prototype.onTouchStart = function () {
              var e = this
              this.hoverClass &&
                ((this.touch = !0),
                setTimeout(function () {
                  e.touch && (e.hover = !0)
                }, this.hoverStartTime)),
                (this.timeoutEvent = setTimeout(function () {
                  e.onLongPress.emit()
                }, 350)),
                (this.startTime = Date.now())
            }),
            (t.prototype.onTouchMove = function () {
              clearTimeout(this.timeoutEvent)
            }),
            (t.prototype.onTouchEnd = function () {
              var e = this
              Date.now() - this.startTime < 350 &&
                clearTimeout(this.timeoutEvent),
                this.hoverClass &&
                  ((this.touch = !1),
                  setTimeout(function () {
                    e.touch || (e.hover = !1)
                  }, this.hoverStayTime))
            }),
            (t.prototype.componentDidRender = function () {
              var e,
                n = this.el
              s()((e = n.childNodes)).call(e, function (e) {
                e.nodeType === document.COMMENT_NODE && n.removeChild(e)
              })
            }),
            (t.prototype.render = function () {
              var e,
                n = Object(p.a)(
                  (((e = {})['' + this.hoverClass] = this.hover), e),
                ),
                r = {}
              return (
                this.animation &&
                  ((r.animation = this.animation),
                  (r['data-animation'] = this.animation)),
                Object(l.e)(
                  l.a,
                  a()({ class: n }, r),
                  Object(l.e)('slot', null),
                )
              )
            }),
            h()(t.prototype, 'el', {
              get: function get() {
                return Object(l.d)(this)
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })()
      m.style =
        'body,html{-webkit-tap-highlight-color:rgba(0, 0, 0, 0);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}taro-view-core{display:block}'
    },
    578: function (e, n, r) {
      'use strict'
      r.d(n, 'a', function () {
        return s
      })
      var i = r(69)
      var s = (function createCommonjsModule(e, n, r) {
        return (
          e(
            (r = {
              path: n,
              exports: {},
              require: function require(e, n) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            r.exports,
          ),
          r.exports
        )
      })(function (e) {
        !(function () {
          var n = {}.hasOwnProperty
          function o() {
            for (var e = [], r = 0; r < arguments.length; r++) {
              var s = arguments[r]
              if (s) {
                var u = Object(i.a)(s)
                if ('string' === u || 'number' === u) e.push(s)
                else if (Array.isArray(s)) {
                  if (s.length) {
                    var a = o.apply(null, s)
                    a && e.push(a)
                  }
                } else if ('object' === u)
                  if (s.toString === Object.prototype.toString)
                    for (var c in s) n.call(s, c) && s[c] && e.push(c)
                  else e.push(s.toString())
              }
            }
            return e.join(' ')
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : (window.classNames = o)
        })()
      })
    },
  },
])