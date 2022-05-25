;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    840: function (e, t, n) {},
    904: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function () {
          return H
        })
      var a = n(39),
        c = n(40),
        o = n(175),
        r = n(66),
        i = n(65),
        u = n(91),
        l = n(64),
        s = n.n(l),
        d = n(587),
        m = n(588),
        b = (n(574), n(840), n(572)),
        j = n.n(b),
        f = n(576),
        v = n.n(f),
        p = n(573),
        x = n.n(p),
        g = n(6),
        h = n.n(g),
        O = n(10),
        N = n.n(O),
        C = n(24),
        w = n.n(C),
        P = n(571),
        V = n.n(P),
        S = n(32),
        I = n.n(S),
        k = n(570),
        _ = n.n(k),
        D = n(27),
        T = n.n(D),
        y = n(173),
        R = n.n(y),
        z = n(116),
        E = n.n(z),
        M = n(55),
        K = n.n(M),
        J = n(115),
        q = [
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
          'children',
        ]
      function ownKeys(e, t) {
        var n = w()(e)
        if (V.a) {
          var a = V()(e)
          t &&
            (a = I()(a).call(a, function (t) {
              return _()(e, t).enumerable
            })),
            n.push.apply(n, a)
        }
        return n
      }
      function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n,
            a,
            c = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? T()((n = ownKeys(Object(c), !0))).call(n, function (t) {
                j()(e, t, c[t])
              })
            : R.a
            ? E()(e, R()(c))
            : T()((a = ownKeys(Object(c)))).call(a, function (t) {
                K()(e, t, _()(c, t))
              })
        }
        return e
      }
      var A = 'van-pagination',
        B = function Pagination(e) {
          e.modelValue
          var t,
            n = e.mode,
            a = void 0 === n ? 'multi' : n,
            c = e.prevText,
            o = void 0 === c ? '上一页' : c,
            r = e.nextText,
            i = void 0 === r ? '下一页' : r,
            u = e.pageCount,
            s = void 0 === u ? '' : u,
            d = e.totalItems,
            m = void 0 === d ? '0' : d,
            b = e.itemsPerPage,
            j = void 0 === b ? '10' : b,
            f = e.showPageSize,
            p = void 0 === f ? '5' : f,
            g = e.onChange,
            O = e.updatecurrent,
            C = e.forceEllipses,
            w = void 0 !== C && C,
            P = e.pageNodeRender,
            V = (e.defaultValue, e.className),
            S =
              void 0 === V
                ? function (e) {
                    return e.text
                  }
                : V,
            I = (e.children, x()(e, q)),
            k = Object(l.useState)(1),
            _ = v()(k, 2),
            D = _[0],
            T = _[1],
            y = Object(l.useState)([]),
            R = v()(y, 2),
            z = R[0],
            E = R[1],
            M = Object(l.useState)(Number(s)),
            K = v()(M, 2),
            B = K[0],
            F = K[1],
            G = function computedCountRef() {
              var e = Number(s) || Math.ceil(Number(m) / Number(j))
              return isNaN(e) ? 1 : Math.max(1, e)
            },
            H = function computedPages(e, t) {
              if ('simple' == a) return []
              var n = [],
                c = t || B,
                o = Number(p),
                r = e || Number(D),
                i = 1,
                u = c,
                l = c > o
              l &&
                (u = (i = Math.max(r - Math.floor(o / 2), 1)) + o - 1) > c &&
                (i = (u = c) - o + 1)
              for (var s = i; s <= u; s++) {
                var d = Q(s, s, r == s)
                n.push(d)
              }
              if (l && o > 0 && w) {
                if (i > 1) {
                  var m = Q(i - 1, '...')
                  n.unshift(m)
                }
                if (u < c) {
                  var b = Q(u + 1, '...')
                  n.push(b)
                }
              }
              return n
            },
            L = function selectPage(t, n) {
              t > B ||
                t < 1 ||
                ('modelValue' in e || (T(Number(t)), t != D && E(H(t))),
                t != D && O && O(t),
                n && g && g(t))
            },
            Q = function setPage(e, t, n) {
              return { number: e, text: t, active: n }
            }
          if (
            (Object(l.useEffect)(
              function () {
                var t = e.defaultValue || 1
                'modelValue' in e && (t = Number(e.modelValue))
                var n = G()
                F(n), E(H(t, n))
              },
              [G, H, e],
            ),
            'modelValue' in e)
          ) {
            var U = e.modelValue ? Number(e.modelValue) : 1
            U !== D && (T(U), E(H(Number(U))))
          }
          return Object(J.jsxs)(
            'div',
            _objectSpread(
              _objectSpread({ className: ''.concat(A, ' ').concat(S) }, I),
              {},
              {
                children: [
                  Object(J.jsx)('div', {
                    className: h()(
                      (t = ''
                        .concat(A, '-prev  ')
                        .concat('multi' == a ? '' : 'simple-border', ' ')),
                    ).call(t, 1 == D ? 'disabled' : ''),
                    onClick: function onClick() {
                      return L(Number(D) - 1, !0)
                    },
                    children: o,
                  }),
                  'multi' == a
                    ? Object(J.jsx)('div', {
                        className: ''.concat(A, '-contain'),
                        children: N()(z).call(z, function (e, t) {
                          return Object(J.jsx)(
                            'div',
                            {
                              className: ''
                                .concat(A, '-item ')
                                .concat(e.active ? 'active' : ''),
                              onClick: function onClick() {
                                return e.active ? '' : L(e.number, !0)
                              },
                              children: P ? P(e) : e.text,
                            },
                            ''.concat(t, 'pagination'),
                          )
                        }),
                      })
                    : '',
                  'simple' == a
                    ? Object(J.jsx)('div', {
                        className: ''.concat(A, '-contain'),
                        children: Object(J.jsxs)('div', {
                          className: ''.concat(A, '-simple'),
                          children: [D, '/', B],
                        }),
                      })
                    : '',
                  Object(J.jsx)('div', {
                    className: ''
                      .concat(A, '-next  ')
                      .concat(Number(D) >= B ? 'disabled' : ''),
                    onClick: function onClick() {
                      return L(Number(D) + 1, !0)
                    },
                    children: i,
                  }),
                ],
              },
            ),
          )
        },
        F = n(174)
      function Demo() {
        var e = s.a.useState(1),
          t = Object(F.a)(e, 2),
          n = t[0],
          a = t[1]
        return Object(J.jsx)(B, {
          modelValue: n,
          totalItems: '25',
          itemsPerPage: '5',
          onChange: function pageChange1(e) {
            a(e)
          },
        })
      }
      function demo2_Demo() {
        var e = s.a.useState(1),
          t = Object(F.a)(e, 2),
          n = t[0],
          a = t[1]
        return Object(J.jsx)(B, {
          modelValue: n,
          pageCount: 12,
          mode: 'simple',
          onChange: function pageChange2(e) {
            a(e)
          },
        })
      }
      function demo3_Demo() {
        var e = s.a.useState(1),
          t = Object(F.a)(e, 2),
          n = t[0],
          a = t[1]
        return Object(J.jsx)(B, {
          modelValue: n,
          totalItems: '125',
          showPageSize: '3',
          forceEllipses: !0,
          onChange: function pageChange3(e) {
            a(e)
          },
        })
      }
      n(619)
      var G = n(577)
      function demo4_Demo() {
        var e = s.a.useState(1),
          t = Object(F.a)(e, 2),
          n = t[0],
          a = t[1]
        return Object(J.jsx)(B, {
          modelValue: n,
          totalItems: '500',
          showPageSize: '5',
          onChange: function pageChange4(e) {
            a(e)
          },
          pageNodeRender: function pageNodeRender(e) {
            return Object(J.jsx)('div', {
              children: 3 == e.number ? 'hot' : e.text,
            })
          },
          prevText: Object(J.jsx)(G.b, { name: 'arrow-left' }),
          nextText: Object(J.jsx)(G.b, { name: 'arrow' }),
        })
      }
      var H = (function (e) {
        Object(r.a)(Index, e)
        var t = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = t.call(this)),
            Object(u.a)(Object(o.a)(e), 'state', {}),
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
      })(l.Component)
    },
  },
])
