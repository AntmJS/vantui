;(window.webpackJsonp = window.webpackJsonp || []).push([
  [118],
  {
    503: function (n, e, t) {
      'use strict'
      t.r(e),
        t.d(e, 'taro_rich_text_core', function () {
          return g
        })
      var i = t(69),
        c = t(30),
        a = t.n(c),
        o = t(9),
        u = t.n(o),
        l = t(89),
        s = t.n(l),
        p = t(26),
        d = t.n(p),
        h = t(22),
        v = t.n(h),
        b = t(138),
        g = (function () {
          function r(n) {
            var e = this
            Object(b.g)(this, n),
              (this.renderNode = function (n) {
                if ('type' in n && 'text' === n.type)
                  return (n.text || '').replace(/&nbsp;/g, ' ')
                if ('name' in n && n.name) {
                  var t = n.name,
                    c = n.attrs,
                    o = n.children,
                    l = {},
                    p = []
                  if (c && 'object' === Object(i.a)(c)) {
                    var h = function f(n) {
                      var e = c[n]
                      if ('style' === n && 'string' == typeof e) {
                        var t,
                          i,
                          o = a()(
                            (t = u()((i = e.split(';'))).call(i, function (n) {
                              return s()(n).call(n)
                            })),
                          ).call(t, function (n) {
                            return n
                          }),
                          p = {}
                        return (
                          d()(o).call(o, function (n) {
                            if (n) {
                              var e = /(.+): *(.+)/g.exec(n)
                              if (e) {
                                var t = e[1],
                                  i = e[2],
                                  c = t.replace(/-([a-z])/g, function () {
                                    for (
                                      var n = [], e = 0;
                                      e < arguments.length;
                                      e++
                                    )
                                      n[e] = arguments[e]
                                    return n[1].toUpperCase()
                                  })
                                p[c] = i
                              }
                            }
                          }),
                          v()(p).length && (l.style = p),
                          'continue'
                        )
                      }
                      l[n] = e
                    }
                    for (var g in c) h(g)
                  }
                  return (
                    o &&
                      o.length &&
                      (p = u()(o).call(o, function (n) {
                        return e.renderNode(n)
                      })),
                    Object(b.e)(t, l, p)
                  )
                }
                return null
              })
          }
          return (
            (r.prototype.render = function () {
              var n = this.nodes,
                e = this.renderNode
              return Array.isArray(n)
                ? Object(b.e)(
                    b.a,
                    null,
                    u()(n).call(n, function (n) {
                      return e(n)
                    }),
                  )
                : Object(b.e)(b.a, { innerHTML: n })
            }),
            r
          )
        })()
    },
  },
])