;(window.webpackJsonp = window.webpackJsonp || []).push([
  [65],
  {
    578: function (e, n, t) {
      'use strict'
      ;(function (e) {
        t.d(n, 'a', function () {
          return Page
        })
        t(590)
        var a = t(574),
          c = t(568),
          o = t(90),
          r = t(737),
          i = t(77),
          l = t(64),
          s = (t(581), t(115))
        function Page(n) {
          var t = n.title,
            u = n.className,
            d = void 0 === u ? '' : u,
            m = n.children,
            b = o.a.useRouter().path
          return (
            Object(l.useEffect)(
              function () {
                'react' === e.env.LIBRARY_ENV
                  ? (document.body.scrollTop =
                      document.documentElement.scrollTop =
                        0)
                  : Object(r.a)({ scrollTop: 0 })
              },
              [b],
            ),
            o.a.useShareAppMessage(function () {
              return { title: 'AntM 组件库演示', path: b }
            }),
            Object(s.jsxs)(c.n, {
              className: 'demo-page '.concat(d),
              children: [
                Object(s.jsxs)(c.n, {
                  className: 'demo-nav',
                  children: [
                    Object(s.jsx)(a.b, {
                      name: 'arrow-left',
                      className: 'demo-nav__back',
                      onClick: function onClick() {
                        return Object(i.d)()
                      },
                    }),
                    Object(s.jsxs)(c.n, {
                      className: 'demo-nav__title',
                      children: [t, ' '],
                    }),
                  ],
                }),
                m,
              ],
            })
          )
        }
      }.call(this, t(236)))
    },
    579: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return u
      })
      var a = t(39),
        c = t(40),
        o = t(66),
        r = t(65),
        i = t(568),
        l = t(64),
        s = (t(582), t(115)),
        u = (function (e) {
          Object(o.a)(Index, e)
          var n = Object(r.a)(Index)
          function Index() {
            return Object(a.a)(this, Index), n.call(this)
          }
          return (
            Object(c.a)(Index, [
              {
                key: 'render',
                value: function render() {
                  var e = this.props,
                    n = e.padding,
                    t = e.title,
                    a = e.card
                  return Object(s.jsxs)(i.n, {
                    className:
                      'custom-class demo-block van-clearfix ' +
                      (n ? 'demo-block--padding' : ''),
                    children: [
                      t &&
                        Object(s.jsx)(i.n, {
                          className: 'demo-block__title',
                          children: t,
                        }),
                      a
                        ? Object(s.jsx)(i.n, {
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
        })(l.Component)
    },
    581: function (e, n, t) {},
    582: function (e, n, t) {},
    840: function (e, n, t) {},
    904: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return G
        })
      var a = t(39),
        c = t(40),
        o = t(175),
        r = t(66),
        i = t(65),
        l = t(91),
        s = t(64),
        u = t.n(s),
        d = t(578),
        m = t(579),
        b = (t(576), t(840), t(116)),
        j = t.n(b),
        f = t(55),
        p = t.n(f),
        x = t(572),
        h = t.n(x),
        v = t(577),
        O = t.n(v),
        g = t(573),
        N = t.n(g),
        C = t(6),
        k = t.n(C),
        I = t(10),
        _ = t.n(I),
        P = t(24),
        w = t.n(P),
        V = t(571),
        S = t.n(V),
        T = t(32),
        D = t.n(T),
        y = t(570),
        E = t.n(y),
        R = t(27),
        M = t.n(R),
        z = t(173),
        A = t.n(z),
        K = t(568),
        J = t(115),
        B = [
          'modelValue',
          'mode',
          'prevText',
          'nextText',
          'pageCount',
          'totalItems',
          'itemsPerPage',
          'showPageSize',
          'onChange',
          'updatecurrent',
          'forceEllipses',
          'pageNodeRender',
          'defaultValue',
          'className',
        ]
      function ownKeys(e, n) {
        var t = w()(e)
        if (S.a) {
          var a = S()(e)
          n &&
            (a = D()(a).call(a, function (n) {
              return E()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a = null != arguments[n] ? arguments[n] : {}
          if (n % 2)
            M()((t = ownKeys(Object(a), !0))).call(t, function (n) {
              h()(e, n, a[n])
            })
          else if (A.a) j()(e, A()(a))
          else {
            var c
            M()((c = ownKeys(Object(a)))).call(c, function (n) {
              p()(e, n, E()(a, n))
            })
          }
        }
        return e
      }
      var F = 'van-pagination'
      var L = function Pagination(e) {
          e.modelValue
          var n,
            t = e.mode,
            a = void 0 === t ? 'multi' : t,
            c = e.prevText,
            o = void 0 === c ? '上一页' : c,
            r = e.nextText,
            i = void 0 === r ? '下一页' : r,
            l = e.pageCount,
            u = void 0 === l ? '' : l,
            d = e.totalItems,
            m = void 0 === d ? '0' : d,
            b = e.itemsPerPage,
            j = void 0 === b ? '10' : b,
            f = e.showPageSize,
            p = void 0 === f ? '5' : f,
            x = e.onChange,
            h = e.updatecurrent,
            v = e.forceEllipses,
            g = void 0 !== v && v,
            C = e.pageNodeRender,
            I = (e.defaultValue, e.className),
            P =
              void 0 === I
                ? function (e) {
                    return e.text
                  }
                : I,
            w = N()(e, B),
            V = Object(s.useState)(1),
            S = O()(V, 2),
            T = S[0],
            D = S[1],
            y = Object(s.useState)([]),
            E = O()(y, 2),
            R = E[0],
            M = E[1],
            z = Object(s.useState)(Number(u)),
            A = O()(z, 2),
            L = A[0],
            Y = A[1],
            q = Object(s.useCallback)(
              function () {
                var e = Number(u) || Math.ceil(Number(m) / Number(j))
                return e + '' == 'NaN' ? 1 : Math.max(1, e)
              },
              [j, u, m],
            ),
            G = function computedPages(e, n) {
              if ('simple' == a) return []
              var t = [],
                c = n || L,
                o = Number(p),
                r = e || Number(T),
                i = 1,
                l = c,
                s = c > o
              s &&
                (l = (i = Math.max(r - Math.floor(o / 2), 1)) + o - 1) > c &&
                (i = (l = c) - o + 1)
              for (var u = i; u <= l; u++) {
                var d = Q(u, u, r == u)
                t.push(d)
              }
              if (s && o > 0 && g) {
                if (i > 1) {
                  var m = Q(i - 1, '...')
                  t.unshift(m)
                }
                if (l < c) {
                  var b = Q(l + 1, '...')
                  t.push(b)
                }
              }
              return t
            },
            H = function selectPage(n, t) {
              n > L ||
                n < 1 ||
                ('modelValue' in e || (D(Number(n)), n != T && M(G(n))),
                n != T && h && h(n),
                t && x && x(n))
            },
            Q = function setPage(e, n, t) {
              return { number: e, text: n, active: t }
            }
          if (
            (Object(s.useEffect)(
              function () {
                var n = e.defaultValue || 1
                'modelValue' in e && (n = Number(e.modelValue))
                var t = q()
                Y(t), M(G(n, t))
              },
              [e, q],
            ),
            'modelValue' in e)
          ) {
            var U = e.modelValue ? Number(e.modelValue) : 1
            U !== T && (D(U), M(G(Number(U))))
          }
          return Object(J.jsxs)(
            K.n,
            _objectSpread(
              _objectSpread({ className: ''.concat(F, ' ').concat(P) }, w),
              {},
              {
                children: [
                  Object(J.jsx)(K.n, {
                    className: k()(
                      (n = ''
                        .concat(F, '-prev  ')
                        .concat('multi' == a ? '' : 'simple-border', ' ')),
                    ).call(n, 1 == T ? 'disabled' : ''),
                    onClick: function onClick() {
                      return H(Number(T) - 1, !0)
                    },
                    children: o,
                  }),
                  'multi' == a
                    ? Object(J.jsx)(K.n, {
                        className: ''.concat(F, '-contain'),
                        children: _()(R).call(R, function (e, n) {
                          return Object(J.jsx)(
                            K.n,
                            {
                              className: ''
                                .concat(F, '-item ')
                                .concat(e.active ? 'active' : ''),
                              onClick: function onClick() {
                                return e.active ? '' : H(e.number, !0)
                              },
                              children: C ? C(e) : e.text,
                            },
                            ''.concat(n, 'pagination'),
                          )
                        }),
                      })
                    : '',
                  'simple' == a
                    ? Object(J.jsx)(K.n, {
                        className: ''.concat(F, '-contain'),
                        children: Object(J.jsxs)(K.n, {
                          className: ''.concat(F, '-simple'),
                          children: [T, '/', L],
                        }),
                      })
                    : '',
                  Object(J.jsx)(K.n, {
                    className: ''
                      .concat(F, '-next  ')
                      .concat(Number(T) >= L ? 'disabled' : ''),
                    onClick: function onClick() {
                      return H(Number(T) + 1, !0)
                    },
                    children: i,
                  }),
                ],
              },
            ),
          )
        },
        Y = t(174)
      function Demo() {
        var e = u.a.useState(1),
          n = Object(Y.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(J.jsx)(L, {
          modelValue: t,
          totalItems: '25',
          itemsPerPage: '5',
          onChange: function pageChange1(e) {
            a(e)
          },
        })
      }
      function demo2_Demo() {
        var e = u.a.useState(1),
          n = Object(Y.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(J.jsx)(L, {
          modelValue: t,
          pageCount: 12,
          mode: 'simple',
          onChange: function pageChange2(e) {
            a(e)
          },
        })
      }
      function demo3_Demo() {
        var e = u.a.useState(1),
          n = Object(Y.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(J.jsx)(L, {
          modelValue: t,
          totalItems: '125',
          showPageSize: '3',
          forceEllipses: !0,
          onChange: function pageChange3(e) {
            a(e)
          },
        })
      }
      t(590)
      var q = t(574)
      function demo4_Demo() {
        var e = u.a.useState(1),
          n = Object(Y.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(J.jsx)(L, {
          modelValue: t,
          totalItems: '500',
          showPageSize: '5',
          onChange: function pageChange4(e) {
            a(e)
          },
          pageNodeRender: function pageNodeRender(e) {
            return Object(J.jsx)(J.Fragment, {
              children: 3 == e.number ? 'hot' : e.text,
            })
          },
          prevText: Object(J.jsx)(q.b, { name: 'arrow-left' }),
          nextText: Object(J.jsx)(q.b, { name: 'arrow' }),
        })
      }
      var G = (function (e) {
        Object(r.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = n.call(this)),
            Object(l.a)(Object(o.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(J.jsxs)(d.a, {
                  title: 'Pagination 分页',
                  className: 'pages-pagination-index',
                  children: [
                    Object(J.jsx)(m.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(J.jsx)(Demo, {}),
                    }),
                    Object(J.jsx)(m.a, {
                      title: '简单模式',
                      padding: !0,
                      children: Object(J.jsx)(demo2_Demo, {}),
                    }),
                    Object(J.jsx)(m.a, {
                      title: '显示省略号',
                      padding: !0,
                      children: Object(J.jsx)(demo3_Demo, {}),
                    }),
                    Object(J.jsx)(m.a, {
                      title: '自定义按钮',
                      padding: !0,
                      children: Object(J.jsx)(demo4_Demo, {}),
                    }),
                  ],
                })
              },
            },
          ]),
          Index
        )
      })(s.Component)
    },
  },
])
