/*! For license information please see 74.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [74],
  {
    525: function (e, r, i) {
      'use strict'
      i.r(r),
        i.d(r, 'taro_cover_view_core', function () {
          return c
        })
      var n = i(0),
        s = i.n(n),
        u = i(147),
        a = i(610),
        c = (function () {
          function t(e) {
            Object(u.g)(this, e),
              (this.onLongPress = Object(u.c)(this, 'longpress', 7)),
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
            (t.prototype.render = function () {
              var e,
                r = Object(a.a)(
                  (((e = {})['' + this.hoverClass] = this.hover), e),
                ),
                i = {}
              return (
                this.animation &&
                  ((i.animation = this.animation),
                  (i['data-animation'] = this.animation)),
                Object(u.e)(
                  u.a,
                  s()({ class: r }, i),
                  Object(u.e)('slot', null),
                )
              )
            }),
            t
          )
        })()
      c.style = 'taro-cover-view-core{display:block}'
    },
    610: function (e, r, i) {
      'use strict'
      i.d(r, 'a', function () {
        return s
      })
      var n = i(46)
      var s = (function createCommonjsModule(e, r, i) {
        return (
          e(
            (i = {
              path: r,
              exports: {},
              require: function require(e, r) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            i.exports,
          ),
          i.exports
        )
      })(function (e) {
        !(function () {
          var r = {}.hasOwnProperty
          function o() {
            for (var e = [], i = 0; i < arguments.length; i++) {
              var s = arguments[i]
              if (s) {
                var u = Object(n.a)(s)
                if ('string' === u || 'number' === u) e.push(s)
                else if (Array.isArray(s)) {
                  if (s.length) {
                    var a = o.apply(null, s)
                    a && e.push(a)
                  }
                } else if ('object' === u)
                  if (s.toString === Object.prototype.toString)
                    for (var c in s) r.call(s, c) && s[c] && e.push(c)
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
