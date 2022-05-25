;(window.webpackJsonp = window.webpackJsonp || []).push([
  [24],
  {
    611: function (e, n, t) {
      'use strict'
      t.d(n, 'a', function () {
        return _objectSpread2
      })
      var c = t(608),
        a = t.n(c),
        i = t(606),
        r = t.n(i),
        s = t(629),
        o = t.n(s),
        l = t(633),
        d = t.n(l),
        u = t(622),
        v = t.n(u),
        b = t(637),
        f = t.n(b),
        j = t(641),
        x = t.n(j),
        h = t(67),
        m = t.n(h),
        O = t(91)
      function ownKeys(e, n) {
        var t = a()(e)
        if (r.a) {
          var c = r()(e)
          n &&
            (c = o()(c).call(c, function (n) {
              return d()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread2(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            a = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? v()((t = ownKeys(Object(a), !0))).call(t, function (n) {
                Object(O.a)(e, n, a[n])
              })
            : f.a
            ? x()(e, f()(a))
            : v()((c = ownKeys(Object(a)))).call(c, function (n) {
                m()(e, n, d()(a, n))
              })
        }
        return e
      }
    },
    615: function (e, n, t) {
      'use strict'
      t(574), t(580), t(581), t(664)
    },
    616: function (e, n, t) {
      'use strict'
      var c = t(24),
        a = t.n(c),
        i = t(571),
        r = t.n(i),
        s = t(32),
        o = t.n(s),
        l = t(570),
        d = t.n(l),
        u = t(27),
        v = t.n(u),
        b = t(173),
        f = t.n(b),
        j = t(116),
        x = t.n(j),
        h = t(55),
        m = t.n(h),
        O = t(572),
        p = t.n(O),
        g = t(576),
        y = t.n(g),
        C = t(573),
        _ = t.n(C),
        w = t(64),
        I = t(568),
        k = t(569),
        N = t(577),
        A = t(578)
      var S = {
        none: 'scaleToFill',
        fill: 'scaleToFill',
        cover: 'aspectFill',
        contain: 'aspectFit',
        widthFix: 'widthFix',
        heightFix: 'heightFix',
        scaleDown: 'aspectFit',
      }
      function mode(e) {
        return S[e]
      }
      var K = t(115),
        F = [
          'src',
          'round',
          'width',
          'height',
          'radius',
          'lazyLoad',
          'showMenuByLongpress',
          'fit',
          'showError',
          'showLoading',
          'className',
          'style',
          'renderError',
          'renderLoading',
        ]
      function ownKeys(e, n) {
        var t = a()(e)
        if (r.a) {
          var c = r()(e)
          n &&
            (c = o()(c).call(c, function (n) {
              return d()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            a = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? v()((t = ownKeys(Object(a), !0))).call(t, function (n) {
                p()(e, n, a[n])
              })
            : f.a
            ? x()(e, f()(a))
            : v()((c = ownKeys(Object(a)))).call(c, function (n) {
                m()(e, n, d()(a, n))
              })
        }
        return e
      }
      n.a = function Image(e) {
        var n = e.src,
          t = e.round,
          c = e.width,
          a = e.height,
          i = e.radius,
          r = e.lazyLoad,
          s = e.showMenuByLongpress,
          o = e.fit,
          l = e.showError,
          d = void 0 === l || l,
          u = e.showLoading,
          v = void 0 === u || u,
          b = e.className,
          f = e.style,
          j = e.renderError,
          x = e.renderLoading,
          h = _()(e, F),
          m = Object(w.useState)(),
          O = y()(m, 2),
          p = O[0],
          g = O[1],
          C = Object(w.useState)(!1),
          S = y()(C, 2),
          L = S[0],
          E = S[1]
        Object(w.useEffect)(
          function () {
            void 0 === p && g(!0), E(!1)
          },
          [p],
        )
        var D,
          T = Object(w.useCallback)(function () {
            g(!1)
          }, []),
          z = Object(w.useCallback)(function () {
            E(!0)
          }, []),
          M = Object(w.useMemo)(
            function () {
              var e = {}
              return (
                ('heightFix' !== o && 'widthFix' !== o) ||
                  (e = {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }),
                e
              )
            },
            [o],
          )
        return Object(K.jsxs)(
          I.n,
          _objectSpread(
            _objectSpread(
              {
                style: k.c([
                  ((D = { width: c, height: a, radius: i }),
                  Object(k.c)([
                    {
                      width: Object(A.a)(D.width),
                      height: Object(A.a)(D.height),
                      'border-radius': Object(A.a)(D.radius),
                    },
                    D.radius ? 'overflow: hidden' : null,
                  ])),
                  f,
                ]),
                className: ' ' + k.b('image', { round: t }) + ' ' + b,
                onClick: h.onClick,
              },
              h,
            ),
            {},
            {
              children: [
                !L &&
                  Object(K.jsx)(I.f, {
                    src: n,
                    mode: mode(o || 'none'),
                    lazyLoad: r,
                    className: 'image-class van-image__img',
                    showMenuByLongpress: s,
                    onLoad: T,
                    onError: z,
                    style: M,
                  }),
                p &&
                  v &&
                  Object(K.jsx)(I.n, {
                    className: 'loading-class van-image__loading',
                    children:
                      x ||
                      Object(K.jsx)(N.b, {
                        name: 'photo',
                        className: 'van-image__loading-icon',
                      }),
                  }),
                L &&
                  d &&
                  Object(K.jsx)(I.n, {
                    className: 'error-class van-image__error',
                    children:
                      j ||
                      Object(K.jsx)(N.b, {
                        name: 'photo-fail',
                        className: 'van-image__error-icon',
                      }),
                  }),
              ],
            },
          ),
        )
      }
    },
    622: function (e, n, t) {
      e.exports = t(677)
    },
    629: function (e, n, t) {
      e.exports = t(630)
    },
    630: function (e, n, t) {
      e.exports = t(631)
    },
    631: function (e, n, t) {
      var c = t(632)
      e.exports = c
    },
    632: function (e, n, t) {
      var c = t(237)
      e.exports = c
    },
    633: function (e, n, t) {
      e.exports = t(634)
    },
    634: function (e, n, t) {
      e.exports = t(635)
    },
    635: function (e, n, t) {
      var c = t(636)
      e.exports = c
    },
    636: function (e, n, t) {
      var c = t(604)
      e.exports = c
    },
    637: function (e, n, t) {
      e.exports = t(638)
    },
    638: function (e, n, t) {
      e.exports = t(639)
    },
    639: function (e, n, t) {
      var c = t(640)
      e.exports = c
    },
    640: function (e, n, t) {
      var c = t(239)
      e.exports = c
    },
    641: function (e, n, t) {
      e.exports = t(642)
    },
    642: function (e, n, t) {
      e.exports = t(643)
    },
    643: function (e, n, t) {
      var c = t(644)
      e.exports = c
    },
    644: function (e, n, t) {
      var c = t(238)
      e.exports = c
    },
    664: function (e, n, t) {},
    677: function (e, n, t) {
      e.exports = t(678)
    },
    678: function (e, n, t) {
      var c = t(679)
      e.exports = c
    },
    679: function (e, n, t) {
      var c = t(243)
      e.exports = c
    },
    740: function (e, n, t) {
      'use strict'
      var c = t(572),
        a = t.n(c),
        i = t(573),
        r = t.n(i),
        s = t(5),
        o = t.n(s),
        l = t(27),
        d = t.n(l),
        u = t(24),
        v = t.n(u),
        b = t(571),
        f = t.n(b),
        j = t(32),
        x = t.n(j),
        h = t(570),
        m = t.n(h),
        O = t(173),
        p = t.n(O),
        g = t(116),
        y = t.n(g),
        C = t(55),
        _ = t.n(C),
        w = t(568),
        I = t(64),
        k = t(569),
        N = t(115),
        A = ['activeKey', 'onChange', 'className', 'children', 'style']
      function ownKeys(e, n) {
        var t = v()(e)
        if (f.a) {
          var c = f()(e)
          n &&
            (c = x()(c).call(c, function (n) {
              return m()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            i = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? d()((t = ownKeys(Object(i), !0))).call(t, function (n) {
                a()(e, n, i[n])
              })
            : p.a
            ? y()(e, p()(i))
            : d()((c = ownKeys(Object(i)))).call(c, function (n) {
                _()(e, n, m()(i, n))
              })
        }
        return e
      }
      n.a = function Sidebar(e) {
        var n = e.activeKey,
          t = e.onChange,
          c = e.className,
          a = e.children,
          i = e.style,
          s = r()(e, A),
          l = Object(I.useRef)([]),
          u = Object(I.useCallback)(function (e) {
            var n = l.current
            return n && n.length
              ? (d()(n).call(n, function (e) {
                  e.setActive(!1)
                }),
                n[e] && n[e].setActive(!0),
                o.a.resolve())
              : o.a.resolve()
          }, [])
        Object(I.useEffect)(
          function () {
            u(n)
          },
          [u, n],
        )
        var v = Object(I.useCallback)(function (e, n) {
            l.current[e] = n
          }, []),
          b = Object(I.useMemo)(
            function () {
              var e = []
              return (
                a &&
                  Array.isArray(a) &&
                  d()(a).call(a, function (n, c) {
                    e.push(
                      Object(I.cloneElement)(n, {
                        key: c,
                        setChildren: v,
                        index: c,
                        setAction: u,
                        onChange: t,
                      }),
                    )
                  }),
                e
              )
            },
            [a, t, u, v],
          )
        return Object(N.jsx)(
          w.n,
          _objectSpread(
            _objectSpread(
              { style: k.c([i]), className: 'van-sidebar  '.concat(c) },
              s,
            ),
            {},
            { children: b },
          ),
        )
      }
    },
    741: function (e, n, t) {
      'use strict'
      var c = t(24),
        a = t.n(c),
        i = t(571),
        r = t.n(i),
        s = t(32),
        o = t.n(s),
        l = t(570),
        d = t.n(l),
        u = t(27),
        v = t.n(u),
        b = t(173),
        f = t.n(b),
        j = t(116),
        x = t.n(j),
        h = t(55),
        m = t.n(h),
        O = t(572),
        p = t.n(O),
        g = t(576),
        y = t.n(g),
        C = t(573),
        _ = t.n(C),
        w = t(568),
        I = t(64),
        k = t(569),
        N = t(657),
        A = t(115),
        S = [
          'dot',
          'badge',
          'index',
          'renderTitle',
          'setChildren',
          'setAction',
          'onClick',
          'onChange',
          'info',
          'title',
          'disabled',
          'className',
          'style',
        ]
      function ownKeys(e, n) {
        var t = a()(e)
        if (r.a) {
          var c = r()(e)
          n &&
            (c = o()(c).call(c, function (n) {
              return d()(e, n).enumerable
            })),
            t.push.apply(t, c)
        }
        return t
      }
      function _objectSpread(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t,
            c,
            a = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? v()((t = ownKeys(Object(a), !0))).call(t, function (n) {
                p()(e, n, a[n])
              })
            : f.a
            ? x()(e, f()(a))
            : v()((c = ownKeys(Object(a)))).call(c, function (n) {
                m()(e, n, d()(a, n))
              })
        }
        return e
      }
      n.a = function SidebarItem(e) {
        var n = e.dot,
          t = e.badge,
          c = e.index,
          a = e.renderTitle,
          i = e.setChildren,
          r = e.setAction,
          s = e.onClick,
          o = e.onChange,
          l = e.info,
          d = e.title,
          u = e.disabled,
          v = e.className,
          b = e.style,
          f = _()(e, S),
          j = Object(I.useState)(),
          x = y()(j, 2),
          h = x[0],
          m = x[1],
          O = Object(I.useCallback)(function (e) {
            return m(e)
          }, [])
        Object(I.useEffect)(
          function () {
            null == i || i(c, { setActive: O, selected: h })
          },
          [O, c, i, h],
        )
        var p = Object(I.useCallback)(
          function () {
            u ||
              r(c).then(function () {
                null == o || o({ detail: c }), null == s || s(c)
              })
          },
          [u, c, o, s, r],
        )
        return Object(A.jsx)(
          w.n,
          _objectSpread(
            _objectSpread(
              {
                className:
                  k.b('sidebar-item', { selected: h, disabled: u }) +
                  ' ' +
                  (h ? 'active-class' : '') +
                  ' ' +
                  (u ? 'disabled-class' : '') +
                  ' custom-class ' +
                  v,
                hoverClass: 'van-sidebar-item--hover',
                hoverStayTime: 70,
                onClick: p,
                style: k.c([b]),
              },
              f,
            ),
            {},
            {
              children: Object(A.jsxs)(w.n, {
                className: 'van-sidebar-item__text',
                children: [
                  (null != t || null !== l || n) &&
                    Object(A.jsx)(N.b, { dot: n, info: null != t ? t : l }),
                  d ? Object(A.jsx)(w.n, { children: d }) : a,
                ],
              }),
            },
          ),
        )
      }
    },
    784: function (e, n, t) {},
    785: function (e, n, t) {},
    846: function (e, n, t) {},
    898: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'default', function () {
          return z
        })
      var c = t(39),
        a = t(40),
        i = t(175),
        r = t(66),
        s = t(65),
        o = t(91),
        l = t(64),
        d = t.n(l),
        u = t(587),
        v = t(588),
        b = (t(574), t(580), t(785), t(581), t(784), t(846), t(576)),
        f = t.n(b),
        j = t(21),
        x = t.n(j),
        h = t(55),
        m = t.n(h),
        O = t(10),
        p = t.n(O),
        g = t(568),
        y = t(569),
        C = t(741),
        _ = t(740),
        w = t(577),
        I = t(28),
        k = t.n(I)
      function isActive(e, n) {
        return Array.isArray(e) ? k()(e).call(e, n) > -1 : e === n
      }
      var N = t(115)
      var A = function TreeSelect(e) {
          var n = e.items,
            t = void 0 === n ? [] : n,
            c = e.selectedIcon,
            a = void 0 === c ? 'success' : c,
            i = e.height,
            r = void 0 === i ? 300 : i,
            s = e.mainActiveIndex,
            o = void 0 === s ? 0 : s,
            d = e.activeId,
            u = e.max,
            v = void 0 === u ? 1 / 0 : u,
            b = e.onClickItem,
            j = e.onClickNav,
            h = e.renderContent,
            O = Object(l.useState)([]),
            I = f()(O, 2),
            k = I[0],
            A = I[1],
            S = Object(l.useCallback)(
              function (e, n) {
                var t,
                  c = Array.isArray(d),
                  a = c && d.length >= v,
                  i = c ? x()((t = d)).call(t, n.id) : d === n.id
                n.disabled ||
                  (a && !i) ||
                  (m()(e, 'detail', { value: n }), null == b || b(e))
              },
              [d, v, b],
            ),
            K = Object(l.useCallback)(
              function (e) {
                var n = e.detail,
                  c = t[n]
                ;(null != c && c.disabled) ||
                  null == j ||
                  j({ detail: { index: n } })
              },
              [j, t],
            )
          return (
            Object(l.useEffect)(
              function () {
                var e = (t[o] || {}).children
                A(void 0 === e ? [] : e)
              },
              [t, o, A],
            ),
            Object(N.jsxs)(g.n, {
              className: 'van-tree-select',
              style: 'height: ' + y.a(r),
              children: [
                Object(N.jsx)(g.j, {
                  scrollY: !0,
                  className: 'van-tree-select__nav',
                  children: Object(N.jsx)(_.a, {
                    activeKey: o,
                    onChange: K,
                    className: 'van-tree-select__nav__inner',
                    children: p()(t).call(t, function (e, n) {
                      return Object(N.jsx)(
                        C.a,
                        {
                          className: 'main-item-class',
                          badge: e.badge,
                          dot: e.dot,
                          title: e.text,
                          disabled: e.disabled,
                        },
                        n,
                      )
                    }),
                  }),
                }),
                Object(N.jsxs)(g.j, {
                  scrollY: !0,
                  className: 'van-tree-select__content',
                  children: [
                    h,
                    p()(k).call(k, function (e) {
                      return Object(N.jsxs)(
                        g.n,
                        {
                          className:
                            'van-ellipsis content-item-class ' +
                            y.b('tree-select__item', {
                              active: isActive(d, e.id),
                              disabled: e.disabled,
                            }) +
                            ' ' +
                            (isActive(d, e.id) ? 'content-active-class' : '') +
                            ' ' +
                            (e.disabled ? 'content-disabled-class' : ''),
                          'data-item': e,
                          onClick: function onClick(n) {
                            S(n, e)
                          },
                          children: [
                            e.text,
                            isActive(d, e.id) &&
                              Object(N.jsx)(w.b, {
                                name: a,
                                size: '16px',
                                className: 'van-tree-select__selected',
                              }),
                          ],
                        },
                        e.id,
                      )
                    }),
                  ],
                }),
              ],
            })
          )
        },
        S = t(611),
        K = t(174),
        F = [
          {
            text: '浙江',
            children: [
              { text: '杭州', id: 1 },
              { text: '温州', id: 2 },
              { text: '宁波', id: 3, disabled: !0 },
              { text: '义乌', id: 4 },
            ],
          },
          {
            text: '江苏',
            children: [
              { text: '南京', id: 5 },
              { text: '无锡', id: 6 },
              { text: '徐州', id: 7 },
              { text: '苏州', id: 8 },
            ],
          },
          {
            text: '福建',
            children: [
              { text: '泉州', id: 9 },
              { text: '厦门', id: 10 },
            ],
          },
        ]
      function Demo() {
        var e = F,
          n = d.a.useState({ mainActiveIndex: 0, activeId: null }),
          t = Object(K.a)(n, 2),
          c = t[0],
          a = t[1],
          i = function setState(e) {
            a(Object(S.a)(Object(S.a)({}, c), e))
          }
        return Object(N.jsx)(A, {
          items: e,
          mainActiveIndex: c.mainActiveIndex,
          activeId: c.activeId,
          onClickNav: function onClickNav(e) {
            var n = e.detail
            i({ mainActiveIndex: (void 0 === n ? {} : n).index || 0 })
          },
          onClickItem: function onClickItem(e) {
            var n = e.detail,
              t = void 0 === n ? {} : n,
              a = c.activeId === t.id ? null : t.id
            i({ activeId: a })
          },
        })
      }
      var L = t(93),
        E = t(118),
        D = t.n(E)
      function demo2_Demo() {
        var e = F,
          n = d.a.useState({ mainActiveIndex: 0, activeIds: [] }),
          t = Object(K.a)(n, 2),
          c = t[0],
          a = t[1],
          i = function setState(e) {
            a(Object(S.a)(Object(S.a)({}, c), e))
          }
        return Object(N.jsx)(A, {
          items: e,
          mainActiveIndex: c.mainActiveIndex,
          activeId: c.activeIds,
          onClickNav: function onClickNav(e) {
            var n = e.detail
            i({ mainActiveIndex: (void 0 === n ? {} : n).index || 0 })
          },
          onClickItem: function onClickItem(e) {
            var n = e.detail,
              t = void 0 === n ? {} : n,
              a = c.activeIds
            x()(a).call(a, t.id)
              ? D()(a).call(a, k()(a).call(a, t.id), 1)
              : a.push(t.id),
              console.info(a),
              i({ activeIds: Object(L.a)(a) })
          },
          max: 2,
        })
      }
      t(615)
      var T = t(616)
      function demo3_Demo() {
        return Object(N.jsx)(A, {
          items: [{ text: '自定义' }],
          height: '55vw',
          mainActiveIndex: 0,
          renderContent: Object(N.jsx)(T.a, {
            src: 'https://img.yzcdn.cn/vant/apple-1.jpg',
          }),
        })
      }
      var z = (function (e) {
        Object(r.a)(Index, e)
        var n = Object(s.a)(Index)
        function Index() {
          var e
          return (
            Object(c.a)(this, Index),
            (e = n.call(this)),
            Object(o.a)(Object(i.a)(e), 'state', {}),
            e
          )
        }
        return (
          Object(a.a)(Index, [
            {
              key: 'render',
              value: function render() {
                return Object(N.jsxs)(u.a, {
                  title: 'TreeSelect 分类选择',
                  className: 'pages-tree-select-index',
                  children: [
                    Object(N.jsx)(v.a, {
                      title: '单选模式',
                      padding: !0,
                      children: Object(N.jsx)(Demo, {}),
                    }),
                    Object(N.jsx)(v.a, {
                      title: '多选模式',
                      padding: !0,
                      children: Object(N.jsx)(demo2_Demo, {}),
                    }),
                    Object(N.jsx)(v.a, {
                      title: '自定义内容',
                      padding: !0,
                      children: Object(N.jsx)(demo3_Demo, {}),
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
