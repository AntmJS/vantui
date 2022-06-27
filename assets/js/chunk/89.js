;(window.webpackJsonp = window.webpackJsonp || []).push([
  [89],
  {
    522: function (n, o, e) {
      'use strict'
      e.r(o),
        e.d(o, 'taro_canvas_core', function () {
          return h
        })
      var i = e(0),
        c = e.n(i),
        r = e(55),
        a = e.n(r),
        s = e(147),
        h = (function () {
          function t(n) {
            var o = this
            Object(s.g)(this, n),
              (this.onLongTap = Object(s.c)(this, 'longtap', 7)),
              (this.nativeProps = {}),
              (this.onTouchStart = function () {
                o.timer = setTimeout(function () {
                  o.onLongTap.emit()
                }, 500)
              }),
              (this.onTouchMove = function () {
                clearTimeout(o.timer)
              }),
              (this.onTouchEnd = function () {
                clearTimeout(o.timer)
              })
          }
          return (
            (t.prototype.render = function () {
              var n = this.canvasId,
                o = this.nativeProps
              return Object(s.e)(
                'canvas',
                c()(
                  {
                    'canvas-id': n,
                    style: { width: '100%', height: '100%' },
                    onTouchStart: this.onTouchStart,
                    onTouchMove: this.onTouchMove,
                    onTouchEnd: this.onTouchEnd,
                  },
                  o,
                ),
              )
            }),
            a()(t.prototype, 'el', {
              get: function get() {
                return Object(s.d)(this)
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          )
        })()
      h.style =
        'taro-canvas-core{position:relative;display:block;width:300px;height:150px}'
    },
  },
])
