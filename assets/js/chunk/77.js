/*! For license information please see 77.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [77],
  {
    542: function (t, r, n) {
      'use strict'
      n.r(r),
        n.d(r, 'taro_navigator_core', function () {
          return l
        })
      var i = n(5),
        a = n.n(i),
        c = n(147),
        s = n(77),
        u = n(611),
        l = (function () {
          function e(t) {
            Object(c.g)(this, t),
              (this.onSuccess = Object(c.c)(this, 'cuccess', 7)),
              (this.onFail = Object(c.c)(this, 'fail', 7)),
              (this.onComplete = Object(c.c)(this, 'Complete', 7)),
              (this.openType = 'navigate'),
              (this.isHover = !1),
              (this.delta = 0)
          }
          return (
            (e.prototype.onClick = function () {
              var t = this,
                r = t.openType,
                n = t.onSuccess,
                i = t.onFail,
                c = t.onComplete,
                u = a.a.resolve()
              switch (r) {
                case 'navigate':
                  u = Object(s.e)({ url: this.url })
                  break
                case 'redirect':
                  u = Object(s.g)({ url: this.url })
                  break
                case 'switchTab':
                  u = Object(s.h)({ url: this.url })
                  break
                case 'reLaunch':
                  u = Object(s.f)({ url: this.url })
                  break
                case 'navigateBack':
                  u = Object(s.d)({ delta: this.delta })
                  break
                case 'exit':
                  u = a.a.reject(
                    new Error('navigator:fail 暂不支持"openType: exit"'),
                  )
              }
              u &&
                u
                  .then(function (t) {
                    n.emit(t)
                  })
                  .catch(function (t) {
                    i.emit(t)
                  })
                  .finally(function () {
                    c.emit()
                  })
            }),
            (e.prototype.render = function () {
              var t,
                r = this.isHover,
                n = this.hoverClass
              return Object(c.e)(c.a, {
                class: Object(u.a)(((t = {}), (t[n] = r), t)),
              })
            }),
            e
          )
        })()
      l.style = '.navigator-hover{background:#efefef}'
    },
    611: function (t, r, n) {
      'use strict'
      n.d(r, 'a', function () {
        return a
      })
      var i = n(46)
      var a = (function createCommonjsModule(t, r, n) {
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
              var a = arguments[n]
              if (a) {
                var c = Object(i.a)(a)
                if ('string' === c || 'number' === c) t.push(a)
                else if (Array.isArray(a)) {
                  if (a.length) {
                    var s = o.apply(null, a)
                    s && t.push(s)
                  }
                } else if ('object' === c)
                  if (a.toString === Object.prototype.toString)
                    for (var u in a) r.call(a, u) && a[u] && t.push(u)
                  else t.push(a.toString())
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