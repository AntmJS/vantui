;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    645: function (e, n, c) {
      'use strict'
      c.d(n, 'a', function () {
        return Tag
      })
      var t = c(24),
        r = c.n(t),
        s = c(571),
        a = c.n(s),
        i = c(32),
        o = c.n(i),
        l = c(570),
        j = c.n(l),
        d = c(27),
        b = c.n(d),
        u = c(173),
        O = c.n(u),
        p = c(116),
        x = c.n(p),
        m = c(55),
        h = c.n(m),
        y = c(572),
        g = c.n(y),
        f = c(573),
        _ = c.n(f),
        v = c(568),
        C = c(569),
        D = c(577),
        w = c(579)
      var k = c(115),
        N = [
          'type',
          'size',
          'mark',
          'plain',
          'round',
          'color',
          'textColor',
          'closeable',
          'children',
          'onClose',
          'style',
          'className',
        ]
      function ownKeys(e, n) {
        var c = r()(e)
        if (a.a) {
          var t = a()(e)
          n &&
            (t = o()(t).call(t, function (n) {
              return j()(e, n).enumerable
            })),
            c.push.apply(c, t)
        }
        return c
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var c,
            t,
            r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? b()((c = ownKeys(Object(r), !0))).call(c, function (n) {
                g()(e, n, r[n])
              })
            : O.a
            ? x()(e, O()(r))
            : b()((t = ownKeys(Object(r)))).call(t, function (n) {
                h()(e, n, j()(r, n))
              })
        }
        return e
      }
      function Tag(e) {
        var n,
          c = e.type,
          t = void 0 === c ? 'default' : c,
          r = e.size,
          s = e.mark,
          a = e.plain,
          i = e.round,
          o = e.color,
          l = e.textColor,
          j = e.closeable,
          d = e.children,
          b = e.onClose,
          u = e.style,
          O = e.className,
          p = _()(e, N)
        return Object(k.jsxs)(
          v.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  ' ' +
                  C.b('tag', [t, r, { mark: s, plain: a, round: i }]) +
                  ' '.concat(O || ''),
                style: C.c([
                  ((n = { plain: a, color: o, textColor: l }),
                  Object(w.a)({
                    'background-color': n.plain ? '' : n.color,
                    color: n.textColor || n.plain ? n.textColor || n.color : '',
                  })),
                  u,
                ]),
              },
              p,
            ),
            {},
            {
              children: [
                d,
                j &&
                  Object(k.jsx)(D.a, {
                    name: 'cross',
                    className: 'van-tag__close',
                    onClick: b,
                  }),
              ],
            },
          ),
        )
      }
      n.b = Tag
    },
    663: function (e, n, c) {
      'use strict'
      c(574), c(580), c(581), c(699)
    },
    699: function (e, n, c) {},
    897: function (e, n, c) {
      'use strict'
      c.r(n),
        c.d(n, 'default', function () {
          return h
        })
      var t = c(39),
        r = c(40),
        s = c(175),
        a = c(66),
        i = c(65),
        o = c(91),
        l = c(64),
        j = c.n(l),
        d = c(587),
        b = c(588),
        u = (c(663), c(645)),
        O = c(568),
        p = c(115)
      function Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, { type: 'primary', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'success', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, { type: 'warning', children: '标签' }),
          ],
        })
      }
      function demo2_Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'primary',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'success',
              children: '标签',
            }),
            Object(p.jsx)(u.b, { plain: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              plain: !0,
              type: 'warning',
              children: '标签',
            }),
          ],
        })
      }
      function demo3_Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'primary',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'success',
              children: '标签',
            }),
            Object(p.jsx)(u.b, { round: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              round: !0,
              type: 'warning',
              children: '标签',
            }),
          ],
        })
      }
      function demo4_Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, { mark: !0, type: 'primary', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'success', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, { mark: !0, type: 'warning', children: '标签' }),
          ],
        })
      }
      function demo5_Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, { color: '#f2826a', children: '标签' }),
            Object(p.jsx)(u.b, { color: '#7232dd', children: '标签' }),
            Object(p.jsx)(u.b, {
              color: '#7232dd',
              plain: !0,
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              color: '#ffe1e1',
              textColor: '#ad0000',
              children: '标签',
            }),
          ],
        })
      }
      function demo6_Demo() {
        return Object(p.jsxs)(O.n, {
          children: [
            Object(p.jsx)(u.b, { type: 'danger', children: '标签' }),
            Object(p.jsx)(u.b, {
              type: 'danger',
              size: 'medium',
              children: '标签',
            }),
            Object(p.jsx)(u.b, {
              type: 'danger',
              size: 'large',
              children: '标签',
            }),
          ],
        })
      }
      var x = c(611),
        m = c(174)
      function demo7_Demo() {
        var e = j.a.useState({ primary: !0, success: !0 }),
          n = Object(m.a)(e, 2),
          c = n[0],
          t = n[1]
        return Object(p.jsxs)(O.n, {
          children: [
            c.primary &&
              Object(p.jsx)(u.b, {
                className: 'demo-margin-right',
                type: 'primary',
                size: 'medium',
                closeable: !0,
                onClose: function onClose() {
                  return t(Object(x.a)(Object(x.a)({}, c), {}, { primary: !1 }))
                },
                children: '标签',
              }),
            c.success &&
              Object(p.jsx)(u.b, {
                className: 'demo-margin-right',
                type: 'success',
                size: 'medium',
                closeable: !0,
                onClose: function onClose() {
                  return t(Object(x.a)(Object(x.a)({}, c), {}, { success: !1 }))
                },
                children: '标签',
              }),
          ],
        })
      }
      var h = (function (e) {
        Object(a.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(t.a)(this, Index),
            (e = n.call(this)),
            Object(o.a)(Object(s.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(p.jsxs)(d.a, {
                  title: 'Tag 标签',
                  className: 'pages-tag-index',
                  children: [
                    Object(p.jsx)(b.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(p.jsx)(Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '空心样式',
                      padding: !0,
                      children: Object(p.jsx)(demo2_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '圆角样式',
                      padding: !0,
                      children: Object(p.jsx)(demo3_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '标记样式',
                      padding: !0,
                      children: Object(p.jsx)(demo4_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '自定义颜色',
                      padding: !0,
                      children: Object(p.jsx)(demo5_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '标签大小',
                      padding: !0,
                      children: Object(p.jsx)(demo6_Demo, {}),
                    }),
                    Object(p.jsx)(b.a, {
                      title: '可关闭标签',
                      padding: !0,
                      children: Object(p.jsx)(demo7_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(l.Component)
    },
  },
])
