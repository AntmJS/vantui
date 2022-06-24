/*! For license information please see 82.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [82],
  {
    561: function (t, r, n) {
      'use strict'
      n.r(r),
        n.d(r, 'taro_text_core', function () {
          return c
        })
      var s = n(147),
        u = n(611),
        c = (function () {
          function e(t) {
            Object(s.g)(this, t), (this.selectable = !1)
          }
          return (
            (e.prototype.render = function () {
              var t = Object(u.a)({ 'taro-text__selectable': this.selectable })
              return Object(s.e)(s.a, { class: t }, Object(s.e)('slot', null))
            }),
            e
          )
        })()
      c.style =
        'taro-text-core{display:inline;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;white-space:pre-wrap}.taro-text__selectable{-moz-user-select:text;-webkit-user-select:text;-ms-user-select:text;user-select:text}'
    },
    611: function (t, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return u
      })
      var s = n(46)
      var u = (function createCommonjsModule(t, r, n) {
        return (
          t(
            (n = {
              path: r,
              exports: {},
              require: function require(t, r) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            n.exports,
          ),
          n.exports
        )
      })(function (t) {
        !(function () {
          var r = {}.hasOwnProperty
          function o() {
            for (var t = [], n = 0; n < arguments.length; n++) {
              var u = arguments[n]
              if (u) {
                var c = Object(s.a)(u)
                if ('string' === c || 'number' === c) t.push(u)
                else if (Array.isArray(u)) {
                  if (u.length) {
                    var i = o.apply(null, u)
                    i && t.push(i)
                  }
                } else if ('object' === c)
                  if (u.toString === Object.prototype.toString)
                    for (var a in u) r.call(u, a) && u[a] && t.push(a)
                  else t.push(u.toString())
              }
            }
            return t.join(' ')
          }
          t.exports
            ? ((o.default = o), (t.exports = o))
            : (window.classNames = o)
        })()
      })
    },
  },
])
