;(window.webpackJsonp = window.webpackJsonp || []).push([
  [90],
  {
    524: function (t, i, o) {
      'use strict'
      o.r(i),
        o.d(i, 'taro_cover_image_core', function () {
          return c
        })
      var e = o(0),
        n = o.n(e),
        h = o(147),
        c = (function () {
          function r(t) {
            Object(h.g)(this, t),
              (this.onLoad = Object(h.c)(this, 'load', 7)),
              (this.onError = Object(h.c)(this, 'error', 7)),
              (this.nativeProps = {})
          }
          return (
            (r.prototype.imageOnLoad = function () {
              var t = this.imgRef,
                i = t.width,
                o = t.height
              this.onLoad.emit({ width: i, height: o })
            }),
            (r.prototype.imageOnError = function () {
              this.onError.emit()
            }),
            (r.prototype.render = function () {
              var t = this,
                i = this,
                o = i.src,
                e = i.imageOnLoad,
                c = i.imageOnError,
                s = i.nativeProps
              return Object(h.e)(
                'img',
                n()(
                  {
                    ref: function ref(i) {
                      return (t.imgRef = i)
                    },
                    src: o,
                    onLoad: e.bind(this),
                    onError: c.bind(this),
                  },
                  s,
                ),
              )
            }),
            r
          )
        })()
      c.style =
        'taro-cover-image-core{overflow:hidden;width:320px;height:240px}'
    },
  },
])