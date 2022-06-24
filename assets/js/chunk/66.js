;(window.webpackJsonp = window.webpackJsonp || []).push([
  [66],
  {
    578: function (e, t, n) {
      'use strict'
      ;(function (e) {
        n.d(t, 'a', function () {
          return Page
        })
        n(591)
        var a = n(576),
          c = n(568),
          r = n(90),
          o = n(739),
          s = n(77),
          i = n(64),
          l = (n(581), n(115))
        function Page(t) {
          var n = t.title,
            d = t.className,
            u = void 0 === d ? '' : d,
            j = t.children,
            b = r.a.useRouter().path
          return (
            Object(i.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(o.a)({ scrollTop: 0 })
              },
              [b],
            ),
            r.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(l.jsxs)(c.n, {
              className: 'demo-page '.concat(u),
              children: [
                Object(l.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(l.jsx)(a.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(s.d)()
                      },
                    }),
                    Object(l.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [n, ' '],
                    }),
                  ],
                }),
                j,
              ],
            })
          )
        }
      }.call(this, n(236)))
    },
    579: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var a = n(39),
        c = n(40),
        r = n(66),
        o = n(65),
        s = n(568),
        i = n(64),
        l = (n(582), n(115)),
        d = (function (e) {
          Object(r.a)(Index, e)
          var t = Object(o.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), t.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    t = e.padding,
                    n = e.title,
                    a = e.card
                  return Object(l.jsxs)(s.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (t ? 'demo-block--padding' : ''),
                    children: [
                      n &&
                        Object(l.jsx)(s.n, {
                          className: 'demo-block__title',
                          children: n,
                        }),
                      a
                        ? Object(l.jsx)(s.n, {
                            className: 'demo-block__card',
                            children: this.props.children,
                          })
                        : this.props.children,
                    ],
                  })
                },
              },
            ]),
            Index
          )
        })(i.Component)
    },
    581: function (e, t, n) {},
    582: function (e, t, n) {},
    836: function (e, t, n) {},
    914: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return F
        })
      var a = n(39),
        c = n(40),
        r = n(175),
        o = n(66),
        s = n(65),
        i = n(91),
        l = n(64),
        d = n.n(l),
        u = n(578),
        j = n(579),
        b = (n(577), n(836), n(116)),
        f = n.n(b),
        m = n(55),
        h = n.n(m),
        v = n(24),
        O = n.n(v),
        p = n(571),
        x = n.n(p),
        _ = n(32),
        w = n.n(_),
        k = n(570),
        y = n.n(k),
        N = n(27),
        g = n.n(N),
        S = n(173),
        I = n.n(S),
        A = n(572),
        D = n.n(A),
        E = n(573),
        T = n.n(E),
        C = n(574),
        W = n.n(C),
        K = n(595),
        R = n.n(K),
        z = n(10),
        J = n.n(z),
        M = n(90),
        P = n(568),
        B = n(569),
        L = n(115),
        V = [
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
        var n = O()(e)
        if (x.a) {
          var a = x()(e)
          t &&
            (a = w()(a).call(a, function (t) {
              return y()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a = null != arguments[t] ? arguments[t] : {}
          if (t % 2)
            g()((n = ownKeys(Object(a), !0))).call(n, function (t) {
              D()(e, t, a[t])
            })
          else if (I.a) f()(e, I()(a))
          else {
            var c
            g()((c = ownKeys(Object(a)))).call(c, function (t) {
              h()(e, t, y()(a, t))
            })
          }
        }
        return e
      }
      var Y = function Skeleton(e) {
        var t = Object(l.useState)({ isArray: !1, rowArray: [] }),
          n = W()(t, 2),
          a = n[0],
          c = n[1],
          r = a.isArray,
          o = a.rowArray,
          s = e.row,
          i = void 0 === s ? 0 : s,
          d = e.animate,
          u = void 0 === d || d,
          j = e.avatar,
          b = e.avatarShape,
          f = void 0 === b ? 'round' : b,
          m = e.avatarSize,
          h = void 0 === m ? M.a.pxTransform(64) : m,
          v = e.titleWidth,
          O = void 0 === v ? '40%' : v,
          p = e.title,
          x = e.rowWidth,
          _ = void 0 === x ? '100%' : x,
          w = e.loading,
          k = void 0 === w || w,
          y = e.children,
          N = e.style,
          g = e.className,
          S = T()(e, V)
        return (
          Object(l.useEffect)(
            function () {
              c(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { rowArray: R()({ length: i }) },
                )
              })
            },
            [i],
          ),
          Object(l.useEffect)(
            function () {
              c(function (e) {
                return _objectSpread(
                  _objectSpread({}, e),
                  {},
                  { isArray: _ instanceof Array },
                )
              })
            },
            [_],
          ),
          k
            ? Object(L.jsxs)(
                P.n,
                _objectSpread(
                  _objectSpread(
                    {
                      className:
                        ' ' +
                        B.b('skeleton', [{ animate: u }]) +
                        ' '.concat(g || ''),
                      style: N,
                    },
                    S,
                  ),
                  {},
                  {
                    children: [
                      j &&
                        Object(L.jsx)(P.n, {
                          className:
                            'avatar-class ' + B.b('skeleton__avatar', [f]),
                          style: 'width:' + h + ';height:' + h,
                        }),
                      Object(L.jsxs)(P.n, {
                        className: B.b('skeleton__content'),
                        children: [
                          p &&
                            Object(L.jsx)(P.n, {
                              className:
                                'title-class ' + B.b('skeleton__title'),
                              style: 'width:' + O,
                            }),
                          J()(o).call(o, function (e, t) {
                            return Object(L.jsx)(
                              P.n,
                              {
                                className: 'row-class ' + B.b('skeleton__row'),
                                style: 'width:' + (r ? _[t] : _),
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
            : Object(L.jsx)(P.n, {
                className: B.b('skeleton__content'),
                children: y,
              })
        )
      }
      function Demo() {
        return Object(L.jsx)(Y, { title: !0, row: '3' })
      }
      function demo2_Demo() {
        return Object(L.jsx)(Y, { title: !0, avatar: !0, row: '3' })
      }
      var q = n(174)
      function demo3_Demo() {
        var e = d.a.useState(!0),
          t = Object(q.a)(e, 2),
          n = t[0],
          a = t[1]
        return (
          d.a.useEffect(function () {
            setTimeout(function () {
              a(!1)
            }, 2e3)
          }, []),
          Object(L.jsx)(Y, {
            title: !0,
            avatar: !0,
            row: '3',
            loading: n,
            children: Object(L.jsx)(P.n, { children: '实际内容' }),
          })
        )
      }
      var F = (function (e) {
        Object(o.a)(Index, e)
        var t = Object(s.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = t.call(this)),
            Object(i.a)(Object(r.a)(e), 'state', { active: 0 }),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(L.jsxs)(u.a, {
                  title: 'Skeleton 骨架屏',
                  className: 'pages-skeleton-index',
                  children: [
                    Object(L.jsx)(j.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(L.jsx)(Demo, {}),
                    }),
                    Object(L.jsx)(j.a, {
                      title: '显示头像',
                      padding: !0,
                      children: Object(L.jsx)(demo2_Demo, {}),
                    }),
                    Object(L.jsx)(j.a, {
                      title: '展示子组件',
                      padding: !0,
                      children: Object(L.jsx)(demo3_Demo, {}),
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
