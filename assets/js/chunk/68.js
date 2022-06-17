;(window.webpackJsonp = window.webpackJsonp || []).push([
  [68],
  {
    840: function (e, n, t) {},
    904: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return L
        })
      var a = t(39),
        c = t(40),
        o = t(175),
        r = t(66),
        i = t(65),
        u = t(91),
        l = t(64),
        s = t.n(l),
        d = t(587),
        m = t(588),
        b = (t(574), t(840), t(116)),
        j = t.n(b),
        f = t(55),
        p = t.n(f),
        x = t(572),
        v = t.n(x),
        g = t(576),
        h = t.n(g),
        O = t(573),
        N = t.n(O),
        C = t(6),
        w = t.n(C),
        P = t(10),
        V = t.n(P),
        S = t(24),
        I = t.n(S),
        k = t(571),
        _ = t.n(k),
        D = t(32),
        T = t.n(D),
        y = t(570),
        z = t.n(y),
        E = t(27),
        M = t.n(E),
        R = t(173),
        K = t.n(R),
        J = t(568),
        F = t(115),
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
        ]
      function ownKeys(e, n) {
        var t = I()(e)
        if (_.a) {
          var a = _()(e)
          n &&
            (a = T()(a).call(a, function (n) {
              return z()(e, n).enumerable
            })),
            t.push.apply(t, a)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            a,
            c = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? M()((t = ownKeys(Object(c), !0))).call(t, function (n) {
                v()(e, n, c[n])
              })
            : K.a
            ? j()(e, K()(c))
            : M()((a = ownKeys(Object(c)))).call(a, function (n) {
                p()(e, n, z()(c, n))
              })
        }
        return e
      }
      var A = 'van-pagination'
      var B = function Pagination(e) {
          e.modelValue
          var n,
            t = e.mode,
            a = void 0 === t ? 'multi' : t,
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
            x = e.onChange,
            v = e.updatecurrent,
            g = e.forceEllipses,
            O = void 0 !== g && g,
            C = e.pageNodeRender,
            P = (e.defaultValue, e.className),
            S =
              void 0 === P
                ? function (e) {
                    return e.text
                  }
                : P,
            I = N()(e, q),
            k = Object(l.useState)(1),
            _ = h()(k, 2),
            D = _[0],
            T = _[1],
            y = Object(l.useState)([]),
            z = h()(y, 2),
            E = z[0],
            M = z[1],
            R = Object(l.useState)(Number(s)),
            K = h()(R, 2),
            B = K[0],
            G = K[1],
            H = Object(l.useCallback)(
              function () {
                var e = Number(s) || Math.ceil(Number(m) / Number(j))
                return e + '' == 'NaN' ? 1 : Math.max(1, e)
              },
              [j, s, m],
            ),
            L = function computedPages(e, n) {
              if ('simple' == a) return []
              var t = [],
                c = n || B,
                o = Number(p),
                r = e || Number(D),
                i = 1,
                u = c,
                l = c > o
              l &&
                (u = (i = Math.max(r - Math.floor(o / 2), 1)) + o - 1) > c &&
                (i = (u = c) - o + 1)
              for (var s = i; s <= u; s++) {
                var d = U(s, s, r == s)
                t.push(d)
              }
              if (l && o > 0 && O) {
                if (i > 1) {
                  var m = U(i - 1, '...')
                  t.unshift(m)
                }
                if (u < c) {
                  var b = U(u + 1, '...')
                  t.push(b)
                }
              }
              return t
            },
            Q = function selectPage(n, t) {
              n > B ||
                n < 1 ||
                ('modelValue' in e || (T(Number(n)), n != D && M(L(n))),
                n != D && v && v(n),
                t && x && x(n))
            },
            U = function setPage(e, n, t) {
              return { number: e, text: n, active: t }
            }
          if (
            (Object(l.useEffect)(
              function () {
                var n = e.defaultValue || 1
                'modelValue' in e && (n = Number(e.modelValue))
                var t = H()
                G(t), M(L(n, t))
              },
              [e, H],
            ),
            'modelValue' in e)
          ) {
            var W = e.modelValue ? Number(e.modelValue) : 1
            W !== D && (T(W), M(L(Number(W))))
          }
          return Object(F.jsxs)(
            J.n,
            _objectSpread(
              _objectSpread({ className: ''.concat(A, ' ').concat(S) }, I),
              {},
              {
                children: [
                  Object(F.jsx)(J.n, {
                    className: w()(
                      (n = ''
                        .concat(A, '-prev  ')
                        .concat('multi' == a ? '' : 'simple-border', ' ')),
                    ).call(n, 1 == D ? 'disabled' : ''),
                    onClick: function onClick() {
                      return Q(Number(D) - 1, !0)
                    },
                    children: o,
                  }),
                  'multi' == a
                    ? Object(F.jsx)(J.n, {
                        className: ''.concat(A, '-contain'),
                        children: V()(E).call(E, function (e, n) {
                          return Object(F.jsx)(
                            J.n,
                            {
                              className: ''
                                .concat(A, '-item ')
                                .concat(e.active ? 'active' : ''),
                              onClick: function onClick() {
                                return e.active ? '' : Q(e.number, !0)
                              },
                              children: C ? C(e) : e.text,
                            },
                            ''.concat(n, 'pagination'),
                          )
                        }),
                      })
                    : '',
                  'simple' == a
                    ? Object(F.jsx)(J.n, {
                        className: ''.concat(A, '-contain'),
                        children: Object(F.jsxs)(J.n, {
                          className: ''.concat(A, '-simple'),
                          children: [D, '/', B],
                        }),
                      })
                    : '',
                  Object(F.jsx)(J.n, {
                    className: ''
                      .concat(A, '-next  ')
                      .concat(Number(D) >= B ? 'disabled' : ''),
                    onClick: function onClick() {
                      return Q(Number(D) + 1, !0)
                    },
                    children: i,
                  }),
                ],
              },
            ),
          )
        },
        G = t(174)
      function Demo() {
        var e = s.a.useState(1),
          n = Object(G.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(F.jsx)(B, {
          modelValue: t,
          totalItems: '25',
          itemsPerPage: '5',
          onChange: function pageChange1(e) {
            a(e)
          },
        })
      }
      function demo2_Demo() {
        var e = s.a.useState(1),
          n = Object(G.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(F.jsx)(B, {
          modelValue: t,
          pageCount: 12,
          mode: 'simple',
          onChange: function pageChange2(e) {
            a(e)
          },
        })
      }
      function demo3_Demo() {
        var e = s.a.useState(1),
          n = Object(G.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(F.jsx)(B, {
          modelValue: t,
          totalItems: '125',
          showPageSize: '3',
          forceEllipses: !0,
          onChange: function pageChange3(e) {
            a(e)
          },
        })
      }
      t(619)
      var H = t(577)
      function demo4_Demo() {
        var e = s.a.useState(1),
          n = Object(G.a)(e, 2),
          t = n[0],
          a = n[1]
        return Object(F.jsx)(B, {
          modelValue: t,
          totalItems: '500',
          showPageSize: '5',
          onChange: function pageChange4(e) {
            a(e)
          },
          pageNodeRender: function pageNodeRender(e) {
            return Object(F.jsx)(F.Fragment, {
              children: 3 == e.number ? 'hot' : e.text,
            })
          },
          prevText: Object(F.jsx)(H.b, { name: 'arrow-left' }),
          nextText: Object(F.jsx)(H.b, { name: 'arrow' }),
        })
      }
      var L = (function (e) {
        Object(r.a)(Index, e)
        var n = Object(i.a)(Index)
        function Index() {
          var e
          return (
            Object(a.a)(this, Index),
            (e = n.call(this)),
            Object(u.a)(Object(o.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(c.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(F.jsxs)(d.a, {
                  title: 'Pagination 分页',
                  className: 'pages-pagination-index',
                  children: [
                    Object(F.jsx)(m.a, {
                      title: '基础用法',
                      padding: !0,
                      children: Object(F.jsx)(Demo, {}),
                    }),
                    Object(F.jsx)(m.a, {
                      title: '简单模式',
                      padding: !0,
                      children: Object(F.jsx)(demo2_Demo, {}),
                    }),
                    Object(F.jsx)(m.a, {
                      title: '显示省略号',
                      padding: !0,
                      children: Object(F.jsx)(demo3_Demo, {}),
                    }),
                    Object(F.jsx)(m.a, {
                      title: '自定义按钮',
                      padding: !0,
                      children: Object(F.jsx)(demo4_Demo, {}),
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
