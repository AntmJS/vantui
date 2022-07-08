/*! For license information please see 80_e7ba0b3486db3f3dbd43.js.LICENSE.txt */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [80],
  {
    554: function (r, t, e) {
      'use strict'
      e.r(t),
        e.d(t, 'taro_scroll_view_core', function () {
          return h
        })
      var c = e(55),
        s = e.n(c),
        u = e(147),
        a = e(612)
      function easeOutScroll(r, t, e) {
        if (r !== t && 'number' == typeof r) {
          var c = t - r,
            s = Date.now(),
            u = t >= r
          !(function n() {
            ;(r = (function i(r, t, e, c) {
              return (e * r) / c + t
            })(Date.now() - s, r, c, 500)),
              (u && r >= t) || (!u && t >= r)
                ? e(t)
                : (e(r), requestAnimationFrame(n))
          })()
        }
      }
      var h = (function () {
        function l(r) {
          var t = this
          Object(u.g)(this, r),
            (this.onScroll = Object(u.c)(this, 'scroll', 3)),
            (this.onScrollToUpper = Object(u.c)(this, 'scrolltoupper', 3)),
            (this.onScrollToLower = Object(u.c)(this, 'scrolltolower', 3)),
            (this.scrollX = !1),
            (this.scrollY = !1),
            (this.upperThreshold = 50),
            (this.lowerThreshold = 50),
            (this.scrollWithAnimation = !1),
            (this.handleScroll = function (r) {
              if (!(r instanceof CustomEvent)) {
                var e = t.el,
                  c = e.scrollLeft,
                  s = e.scrollTop,
                  u = e.scrollHeight,
                  a = e.scrollWidth
                ;(t._scrollLeft = c),
                  (t._scrollTop = s),
                  t.uperAndLower(),
                  t.onScroll.emit({
                    scrollLeft: c,
                    scrollTop: s,
                    scrollHeight: u,
                    scrollWidth: a,
                  })
              }
            }),
            (this.uperAndLower = (function debounce(r, t) {
              var e
              return function () {
                for (var c = [], s = 0; s < arguments.length; s++)
                  c[s] = arguments[s]
                clearTimeout(e),
                  (e = setTimeout(function () {
                    r.apply(void 0, c)
                  }, t))
              }
            })(function () {
              var r = t.el,
                e = r.offsetWidth,
                c = r.offsetHeight,
                s = r.scrollLeft,
                u = r.scrollTop,
                a = r.scrollHeight,
                h = r.scrollWidth,
                p = Number(t.lowerThreshold),
                f = Number(t.upperThreshold)
              !isNaN(p) &&
                ((t.scrollY && c + u + p >= a) ||
                  (t.scrollX && e + s + p >= h)) &&
                t.onScrollToLower.emit({
                  direction: t.scrollX ? 'right' : t.scrollY ? 'bottom' : '',
                }),
                !isNaN(f) &&
                  ((t.scrollY && u <= f) || (t.scrollX && s <= f)) &&
                  t.onScrollToUpper.emit({
                    direction: t.scrollX ? 'left' : t.scrollY ? 'top' : '',
                  })
            }, 200))
        }
        return (
          (l.prototype.watchScrollLeft = function (r) {
            var t = this,
              e = Number(r)
            this.scrollX &&
              !isNaN(e) &&
              e !== this._scrollLeft &&
              (this.scrollWithAnimation
                ? easeOutScroll(this._scrollLeft, e, function (r) {
                    return (t.el.scrollLeft = r)
                  })
                : (this.el.scrollLeft = e),
              (this._scrollLeft = e))
          }),
          (l.prototype.watchScrollTop = function (r) {
            var t = this,
              e = Number(r)
            this.scrollY &&
              !isNaN(e) &&
              e !== this._scrollTop &&
              (this.scrollWithAnimation
                ? easeOutScroll(this._scrollTop, e, function (r) {
                    return (t.el.scrollTop = r)
                  })
                : (this.el.scrollTop = e),
              (this._scrollTop = e))
          }),
          (l.prototype.watchScrollIntoView = function (r) {
            var t
            'string' == typeof r &&
              r &&
              (null === (t = document.querySelector('#' + r)) ||
                void 0 === t ||
                t.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                  inline: 'start',
                }))
          }),
          (l.prototype.componentDidLoad = function () {
            var r = this,
              t = this,
              e = t.scrollY,
              c = t.scrollX,
              s = t.scrollWithAnimation,
              u = Number(this.mpScrollTop),
              a = Number(this.mpScrollLeft)
            e &&
              !isNaN(u) &&
              (s
                ? easeOutScroll(0, u, function (t) {
                    return (r.el.scrollTop = t)
                  })
                : (this.el.scrollTop = u),
              (this._scrollTop = u)),
              c &&
                !isNaN(a) &&
                (s
                  ? easeOutScroll(0, a, function (t) {
                      return (r.el.scrollLeft = t)
                    })
                  : (this.el.scrollLeft = a),
                (this._scrollLeft = a))
          }),
          (l.prototype.render = function () {
            var r = this.scrollX,
              t = this.scrollY,
              e = Object(a.a)({
                'taro-scroll-view__scroll-x': r,
                'taro-scroll-view__scroll-y': t,
              })
            return Object(u.e)(
              u.a,
              { class: e, onScroll: this.handleScroll },
              Object(u.e)('slot', null),
            )
          }),
          s()(l.prototype, 'el', {
            get: function get() {
              return Object(u.d)(this)
            },
            enumerable: !1,
            configurable: !0,
          }),
          s()(l, 'watchers', {
            get: function get() {
              return {
                mpScrollLeft: ['watchScrollLeft'],
                mpScrollTop: ['watchScrollTop'],
                mpScrollIntoView: ['watchScrollIntoView'],
              }
            },
            enumerable: !1,
            configurable: !0,
          }),
          l
        )
      })()
      h.style =
        'taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}'
    },
    612: function (r, t, e) {
      'use strict'
      e.d(t, 'a', function () {
        return s
      })
      var c = e(46)
      var s = (function createCommonjsModule(r, t, e) {
        return (
          r(
            (e = {
              path: t,
              exports: {},
              require: function require(r, t) {
                return (function commonjsRequire() {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  )
                })()
              },
            }),
            e.exports,
          ),
          e.exports
        )
      })(function (r) {
        !(function () {
          var t = {}.hasOwnProperty
          function o() {
            for (var r = [], e = 0; e < arguments.length; e++) {
              var s = arguments[e]
              if (s) {
                var u = Object(c.a)(s)
                if ('string' === u || 'number' === u) r.push(s)
                else if (Array.isArray(s)) {
                  if (s.length) {
                    var a = o.apply(null, s)
                    a && r.push(a)
                  }
                } else if ('object' === u)
                  if (s.toString === Object.prototype.toString)
                    for (var h in s) t.call(s, h) && s[h] && r.push(h)
                  else r.push(s.toString())
              }
            }
            return r.join(' ')
          }
          r.exports
            ? ((o.default = o), (r.exports = o))
            : (window.classNames = o)
        })()
      })
    },
  },
])
