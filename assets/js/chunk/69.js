;(window.webpackJsonp = window.webpackJsonp || []).push([
  [69],
  {
    836: function (e, t, n) {},
    913: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return Q
        })
      var a = n(39),
        r = n(40),
        c = n(175),
        o = n(66),
        i = n(65),
        s = n(91),
        l = n(64),
        d = n.n(l),
        j = n(587),
        u = n(588),
        b = (n(574), n(836), n(24)),
        f = n.n(b),
        v = n(571),
        O = n.n(v),
        h = n(32),
        m = n.n(h),
        x = n(570),
        w = n.n(x),
        p = n(27),
        _ = n.n(p),
        y = n(173),
        S = n.n(y),
        k = n(116),
        g = n.n(k),
        N = n(55),
        A = n.n(N),
        D = n(572),
        I = n.n(D),
        W = n(573),
        E = n.n(W),
        K = n(576),
        z = n.n(K),
        J = n(592),
        T = n.n(J),
        C = n(10),
        q = n.n(C),
        B = n(90),
        F = n(568),
        G = n(569),
        H = n(115),
        L = [
          'row',
          'animate',
          'avatar',
          'avatarShape',
          'avatarSize',
          'titleWidth',
          'title',
          'rowWidth',
          'loading',
          'children',
          'style',
          'className',
        ]
      function ownKeys(e, t) {
        var n = f()(e)
        if (O.a) {
          var a = O()(e)
          t &&
            (a = m()(a).call(a, function (t) {
              return w()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a,
            r = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? _()((n = ownKeys(Object(r), !0))).call(n, function (t) {
                I()(e, t, r[t])
              })
            : S.a
            ? g()(e, S()(r))
            : _()((a = ownKeys(Object(r)))).call(a, function (t) {
                A()(e, t, w()(r, t))
              })
        }
        return e
      }
      var M = function Skeleton(e) {
        var t = Object(l.useState)({ isArray: !1, rowArray: [] }),
          n = z()(t, 2),
          a = n[0],
          r = n[1],
          c = a.isArray,
          o = a.rowArray,
          i = e.row,
          s = void 0 === i ? 0 : i,
          d = e.animate,
          j = void 0 === d || d,
          u = e.avatar,
          b = e.avatarShape,
          f = void 0 === b ? 'round' : b,
          v = e.avatarSize,
          O = void 0 === v ? B.a.pxTransform(64) : v,
          h = e.titleWidth,
          m = void 0 === h ? '40%' : h,
          x = e.title,
          w = e.rowWidth,
          p = void 0 === w ? '100%' : w,
          _ = e.loading,
          y = void 0 === _ || _,
          S = e.children,
          k = e.style,
          g = e.className,
          N = E()(e, L)
        return (
          Object(l.useEffect)(
            function () {
              r(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { rowArray: T()({ length: s }) },
                )
              })
            },
            [s],
          ),
          Object(l.useEffect)(
            function () {
              r(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { isArray: p instanceof Array },
                )
              })
            },
            [p],
          ),
          y
            ? Object(H.jsxs)(
                F.n,
                _objectSpread(
                  _objectSpread(
                    {
                      className:
                        ' ' +
                        G.b('skeleton', [{ animate: j }]) +
                        ' '.concat(g || ''),
                      style: k,
                    },
                    N,
                  ),
                  {},
                  {
                    children: [
                      u &&
                        Object(H.jsx)(F.n, {
                          className:
                            'avatar-class ' + G.b('skeleton__avatar', [f]),
                          style: 'width:' + O + ';height:' + O,
                        }),
                      Object(H.jsxs)(F.n, {
                        className: G.b('skeleton__content'),
                        children: [
                          x &&
                            Object(H.jsx)(F.n, {
                              className:
                                'title-class ' + G.b('skeleton__title'),
                              style: 'width:' + m,
                            }),
                          q()(o).call(o, function (e, t) {
                            return Object(H.jsx)(
                              F.n,
                              {
                                className: 'row-class ' + G.b('skeleton__row'),
                                style: 'width:' + (c ? p[t] : p),
                              },
                              t,
                            )
                          }),
                        ],
                      }),
                    ],
                  },
                ),
              )
            : Object(H.jsx)(F.n, {
                className: G.b('skeleton__content'),
                children: S,
              })
        )
      }
      function Demo() {
        return Object(H.jsx)(M, { title: !0, row: '3' })
      }
      function demo2_Demo() {
        return Object(H.jsx)(M, { title: !0, avatar: !0, row: '3' })
      }
      var P = n(174)
      function demo3_Demo() {
        var e = d.a.useState(!0),
          t = Object(P.a)(e, 2),
          n = t[0],
          a = t[1]
        return (
          d.a.useEffect(function () {
            setTimeout(function () {
              a(!1)
            }, 2e3)
          }, []),
          Object(H.jsx)(M, {
            title: !0,
            avatar: !0,
            row: '3',
            loading: n,
            children: Object(H.jsx)(F.n, { children: '实际内容' }),
          })
        )
      }
      var Q = (function (e) {
        Object(o.a)(Index, e)
        var t = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = t.call(this)),
            Object(s.a)(Object(c.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(r.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(H.jsxs)(j.a, {
                  title: 'Skeleton 骨架屏',
                  className: 'pages-skeleton-index',
                  children: [
                    Object(H.jsx)(u.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(H.jsx)(Demo, {}),
                    }),
                    Object(H.jsx)(u.a, {
                      title: '显示头像',
                      padding: !0,
                      children: Object(H.jsx)(demo2_Demo, {}),
                    }),
                    Object(H.jsx)(u.a, {
                      title: '展示子组件',
                      padding: !0,
                      children: Object(H.jsx)(demo3_Demo, {}),
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
